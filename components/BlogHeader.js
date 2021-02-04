import { urlFor } from "lib/api";
import moment from 'moment'; 

export default function BlogHeader({ blog }) {
  return (
    <div className="blog-detail-header">
      <p className="lead mb-0">
        <img
          src={blog.author?.avatar || 'https://via.placeholder.com/150'}
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
          alt="avatar" />
        {blog.author?.name}
        {', '} {moment(blog.date).format('LLLL')}
      </p>
      <h1 className="font-weight-bold blog-detail-header-title mb-0">{blog.title}</h1>
      <h2 className="blog-detail-header-subtitle mb-3">{blog.subtitle}</h2>
      <div className="blog-image">
        {blog.coverImage && <img className="img-fluid rounded" src={urlFor(blog.coverImage).height(600).fit('max').url()} alt="" />}
      </div>
    </div>
  )
}
