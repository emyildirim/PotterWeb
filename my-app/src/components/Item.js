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
  const { fullName, nickname, hogwartsHouse, interpretedBy, children, image, birtdate } = data;
  const { house, emoji, founder, colours, animal } = data;
  const {spell, use } = data;

  
  if (title){
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
  )
  } else if (fullName){
    return (
      <Card style={{ width: '255px'}} className='bg-secondary text-white'>
        <Card.Img variant="top" src={image} alt={`Character image for ${fullName}`} style={{ width: '255px', height: '375px'}} />
        <Card.Header>{fullName}</Card.Header>
        <Card.Body>
          <Card.Title>{nickname}</Card.Title>
          <Card.Text>
            {limitText(hogwartsHouse, 90)}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Birthdate: {birtdate}</ListGroup.Item>
          <ListGroup.Item>Interpreted By: {interpretedBy}</ListGroup.Item>
          <ListGroup.Item>Children: {children}</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  } else if (house){
    return (
      <Card style={{ width: '255px'}} className='bg-secondary text-white'>
        <Card.Header>{house}</Card.Header>
        <Card.Body>
          <Card.Title>Founder: {founder}</Card.Title>
          <Card.Text>
            {limitText(emoji, 90)}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Colours: {colours}</ListGroup.Item>
          <ListGroup.Item>Animal: {animal}</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  } else if (spell){
    return (
      <Card style={{ width: '255px'}}>
        <Card.Header className='bg-secondary text-white'>{spell}</Card.Header>
        <Card.Body>
          <Card.Title>Use: {use}</Card.Title>
        </Card.Body>
      </Card>
    )
  } else {
    return <p>Something went wrong, Please try again later.</p>
  }
}