import { Card, ListGroup} from 'react-bootstrap';

export function Item({ data }) {
  if(!data){
    return <p>No Data Found!</p>
  }

  function limitText(text='', limit=0){
    if(text.length > limit){
        return text.slice(0, limit) + '...';
    }
    return text;
  }  

  const { number, title, originalTitle, description, releaseDate, pages, cover } = data;
  
  return (
    <Card style={{ width: '255px'}} className='bg-secondary text-white'>
      <Card.Img variant="top" src={cover} alt={`Book cover for ${originalTitle}`} style={{ width: '255px', height: '375px'}} />
      <Card.Header>Book {number}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {limitText(description, 90)}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Publish Date: {releaseDate}</ListGroup.Item>
        <ListGroup.Item>Total Pages: {pages}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}