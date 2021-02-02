import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import PageLayout from 'components/PageLayout';
import { getAllBlogs } from 'lib/api';
import { Row, Col } from 'react-bootstrap';

export default function home({ blogs }) {
  return (
    <PageLayout>
      <AuthorIntro />
      <Row className="mb-5">
        {/*  <Col md="10">
          <CardListItem />
        </Col> */}
        {blogs.map(blog => <Col key={blog.slug} md="4">
          <CardItem
            title={blog.title}
            subtitle={blog.subtitle}
            date={blog.date}
            coverImage={blog.coverImage}
            author={blog.author?.name}
            avatar={blog.author?.avatar || 'https://via.placeholder.com/150'}
            link={{
              href: '/blogs/[slug]',
              as: `/blogs/${blog.slug}`
            }}
          />
        </Col>)
        }
      </Row>
    </PageLayout>
  )
}

// this function is called during build time. create static page, provides props
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  }
}
