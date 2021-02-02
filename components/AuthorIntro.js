import { Row, Col, Media, Image } from 'react-bootstrap';

export default function AuthorIntro() {
  return (
    <Row>
      <Col md="8">
        <Media className="mb-4 admin-intro">
          <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="https://avatars.githubusercontent.com/u/57807968?s=400&u=c1ae76fa8a50e006fd0972a90003fe7c87685e7d&v=4"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
            <p className="welcome-text">
              My name is Sifaldin Abbas and I am an experienced software developer and freelance developer.
              and this is my blog page.
            </p>
          </Media.Body>
        </Media>
      </Col>
    </Row>
  )
}
