import client from './sanity';

const fields = `
    title,
    subtitle,
    'slug': slug.current,
     date,
    'coverImage': coverImage.asset->url,
    'author': author->{name, 'avatar': avatar.asset->url}
    `;

export async function getAllBlogs() {
  const result = await client
    .fetch(`*[_type == "blog"]{${fields}}`);
  return result;
}

export async function getBlogBySlug(slug) {
  const result = await client.fetch(`*[_type == "blog" && 
  slug.current == $slug]{${fields}}`, { slug })
    .then(res => res?.[0]);
  return result;
}