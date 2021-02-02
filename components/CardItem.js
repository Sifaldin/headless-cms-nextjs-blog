import { Card } from 'react-bootstrap';
import Link from 'next/link';

export default function CardItem({
  title,
  subtitle,
  date,
  coverImage,
  author,
  avatar,
  link }) {
  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header
          className="d-flex flex-row">
          <img
            src={avatar}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar" />
          <div>
            <Card.Title className="font-weight-bold mb-1">{author}</Card.Title>
            <Card.Text className="card-date">{date}</Card.Text>
          </div>
        </Card.Header>
        <div className="view overlay">
          <Card.Img
            src={coverImage}
            alt="Card image cap"
          />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>

      {link &&
        <Link {...link}>
          <a className="card-button">
            Read More
          </a>
        </Link>
      }


    </Card>
  )
}
