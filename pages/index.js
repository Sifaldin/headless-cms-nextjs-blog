import { useGetBlogsPages } from 'actions/pagination';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';
import PageLayout from 'components/PageLayout';
import { getAllBlogs, getPaginatedBlogs } from 'lib/api';
import { useState } from 'react';
import { Row, Button } from 'react-bootstrap';

export default function home({ blogs }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 }
  });

  const {
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMore
  } = useGetBlogsPages({ blogs, filter });

  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) =>
          setFilter({ ...filter, [option]: value })
        } />
      <hr />
      <Row className="mb-5">
        {pages}
      </Row>
      <div style={{ textAlign: 'center' }}>

        <Button
          onClick={loadMore}
          disabled={isReachingEnd || isLoadingMore}
          variant="outline-secondary"
          size="lg">
          {isLoadingMore ? '...' : isReachingEnd ? 'No More blogs' : 'More Blogs'}
        </Button>

      </div>

    </PageLayout>
  )
}

// this function is called during build time. create static page, provides props
export async function getStaticProps() {
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc'});
  return {
    props: {
      blogs
    }
  }
}
