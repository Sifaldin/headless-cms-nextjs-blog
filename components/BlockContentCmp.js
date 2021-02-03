import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    code: ({node: {language, code, filename}}) => (
      <pre data-language={language}>
        <code>{code}</code>
        <p>{filename}</p>
      </pre>
    )
  }
}

export default function BlockContentCmp({blog}) {
  return  <BlockContent
          imageOptions={{w: 400, h: 400, fit: 'max'}}
          serializers={serializers}
          blocks={blog.content} />

 
}
