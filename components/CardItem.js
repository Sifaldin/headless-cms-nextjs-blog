import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { urlFor } from 'lib/api';
import moment from 'moment';

export default function CardItem({
  title,
  subtitle,
  date,
  coverImage,
  author,
  avatar,
  link,
  mode = 'normal' }) {
  return (
    <Card className={`fj-card ${mode}`}>
      <div className={`card-body-wrapper ${coverImage ? '' : 'no-image'}`}>
        <Card.Header
          className="d-flex flex-row">
          <img
            src={avatar}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar" />
          <div>
            {
              mode === 'placeholder' ?
                <>
                  <Card.Title className="font-weight-bold mb-1">Placeholder Title</Card.Title>
                  <Card.Text className="card-date">Placeholder Date</Card.Text>
                </>
                :
                <>
                  <Card.Title className="font-weight-bold mb-1">{author}</Card.Title>
                  <Card.Text className="card-date">{moment(date).format('LL')}</Card.Text>
                </>
            }
          </div>
        </Card.Header>
        <div className="view overlay">
          {mode === 'placeholder' ?
            <div className="image-placeholder" />
            :
            coverImage &&
            <Card.Img
              src={
                urlFor(coverImage)
                  .height(300)
                  .crop('center')
                  .fit('clip')
                  .url()}
              alt="Card image cap"
            /> 
          }
        </div>
        <Card.Body>
          {
            mode === 'placeholder' ?
              <>
                <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                <Card.Text>Placeholder Subtitle</Card.Text>
              </>
              :
              <>
                <Card.Title className="card-main-title">{title}</Card.Title>
                <Card.Text>{subtitle}</Card.Text>
              </>
          }
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
