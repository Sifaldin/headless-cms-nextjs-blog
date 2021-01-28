import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import PageLayout from 'components/PageLayout';
import { Row, Col } from 'react-bootstrap';

export default function home() {
  return (
    <PageLayout>
      <AuthorIntro />
      <Row className="mb-5">
        <Col md="10">
          <CardListItem />
        </Col>
        <Col md="4">
          <CardItem />
        </Col>
      </Row>
    </PageLayout>
  )
}
