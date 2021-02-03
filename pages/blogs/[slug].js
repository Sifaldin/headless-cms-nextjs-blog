import BlogHeader from 'components/BlogHeader';
import PageLayout from 'components/PageLayout'
import { getAllBlogs, getBlogBySlug } from 'lib/api';
import { Row, Col } from 'react-bootstrap';
import BlogContent from 'components/BlogContent';

export default function BlogDetail({ blog }) {
  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader blog={blog} />
          <hr />
          <BlogContent blog={blog} />
        </Col>
      </Row>
    </PageLayout>
  )
}


export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog }
  }
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map(b => ({ params: { slug: b.slug } }));
  return {
    paths,
    fallback: false
  }
}