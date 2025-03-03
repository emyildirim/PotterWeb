import { Endpoints, staticConfig, fetchCategoryData } from "@/lib/api"
import { useFetch } from "@/lib/useFetch";
import { Item } from "@/components/Item"
import { useContext } from "react";
import LanguageContext from "@/lib/languageContext";
import { translations } from "@/lib/lang";

export default function CategoryPage({ initialData, category }) {
    const { language } = useContext(LanguageContext);
    const { errors } = translations;

    const getEndpoint = (category, language) => {
        const endpointKey = `GET_${category.toUpperCase()}`;
        return Endpoints[endpointKey]?.(language) ?? null;
    };

    const { data, loading, error } = useFetch(
        getEndpoint(category, language), 
        initialData
    );

    if (!staticConfig.categories.includes(category)) {
        return <p>{errors.error[language]}</p>;
    }

    return (
        <div className="flex-horizontal top-margin bottom-margin">
            {loading ? <p>{errors.loading[language]}</p>
                : error ? <p>{error}</p>
                    : data ? data.map((item) => (
                        <Item 
                            key={item.index || item.id || item.number} 
                            data={item}
                        />
                    )) : null}
        </div>
    );
}

export async function getStaticPaths() {
    const paths = staticConfig.supportedLanguages.flatMap(lang => 
        staticConfig.categories.map(category => ({
            params: { lang, category }
        }))
    );

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const { lang, category } = params;
    
    const data = await fetchCategoryData(category, lang);

    return {
        props: {
            initialData: data,
            category,
        },
        revalidate: staticConfig.revalidateTime,
    };
} 