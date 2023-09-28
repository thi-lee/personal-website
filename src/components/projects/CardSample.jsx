import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './project_styles.css';

function CardSample(props) {
  return (
    <Card className={'card'} >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title className={'card-title'}>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardSample;