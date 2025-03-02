import { Card, ListGroup} from 'react-bootstrap';
import { translations } from '@/lib/lang';
import LanguageContext from '@/lib/languageContext';
import { useContext } from 'react';

export function Item({ data }) {
  const { language } = useContext(LanguageContext);
  const { item } = translations;

  if(!data){
    return <p>{item.noData[language]}</p>
  }

  function limitText(text='', limit=0){
    if(text.length > limit){
        return text.slice(0, limit) + '...';
    }
    return text;
  }

  const { number, title, originalTitle, description, releaseDate, pages, cover } = data;
  const { fullName, nickname, hogwartsHouse, interpretedBy, children, image, birthdate } = data;
  const { house, emoji, founder, colors, animal } = data;
  const {spell, use } = data;

  
  if (title){
    return (
      <Card style={{ width: '255px'}} className='bg-secondary text-white'>
        <Card.Img variant="top" src={cover} alt={`${title}`} style={{ width: '255px', height: '375px'}} />
        <Card.Header>{item.book.number[language]} {number}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{limitText(description, 90)}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{item.book.publishDate[language]}: {releaseDate}</ListGroup.Item>
          <ListGroup.Item>{item.book.totalPages[language]}: {pages}</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  } else if (fullName){
    return (
      <Card style={{ width: '255px'}} className='bg-secondary text-white'>
        <Card.Img variant="top" src={image} alt={fullName} style={{ width: '255px', height: '375px'}} />
        <Card.Header>{fullName}</Card.Header>
        <Card.Body>
          <Card.Title>{nickname}</Card.Title>
          <Card.Text>{hogwartsHouse}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{item.character.birthdate[language]}: {birthdate}</ListGroup.Item>
          <ListGroup.Item>{item.character.actor[language]}: {interpretedBy}</ListGroup.Item>
          <ListGroup.Item style={{height: '100px', overflow: 'hidden'}}>
            {item.character.children[language]}: {children.length === 0 ? 
              <p>{item.character.na[language]}</p> : 
              children.map((child) => <span key={child}>{child}, </span>)
            }
          </ListGroup.Item>
        </ListGroup>
      </Card>
    )
  } else if (house){
    return (
      <Card style={{ width: '255px'}}>
        <Card.Header>{house} [{emoji}]</Card.Header>
        <Card.Body style={{backgroundColor: colors[0], color: colors[1]}}>
          <Card.Text>
            {item.house.founder[language]}: {founder}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            {item.house.colors[language]}: <b style={{color: colors[0]}}>{translations.item.house[colors[0]][language]}</b> {item.house.and[language]} 
            <b style={{color: colors[1]}}> {translations.item.house[colors[1]][language]}</b>
          </ListGroup.Item>
          <ListGroup.Item>{item.house.animal[language]}: {animal}</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  } else if (spell){
    return (
      <Card style={{ width: '255px'}}>
        <Card.Header className='bg-secondary text-white'>{spell}</Card.Header>
        <Card.Body>
          <Card.Title>{item.spell.use[language]}: {use}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
  
  return <p>{item.error[language]}</p>
}