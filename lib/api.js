import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const fields = `
    title,
    subtitle,
    'slug': slug.current,
     date,
    coverImage,
    'author': author->{name, 'avatar': avatar.asset->url},
    `;

export function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export async function getAllBlogs() {
  const result = await client
    .fetch(`*[_type == "blog"] | order(date desc) {${fields}}`);
  return result;
}

export async function getBlogBySlug(slug) {
  const result = await client.fetch(`*[_type == "blog" && 
  slug.current == $slug]{${fields}content[]{..., "asset": asset->}}`, { slug })
    .then(res => res?.[0]);
  return result;
}