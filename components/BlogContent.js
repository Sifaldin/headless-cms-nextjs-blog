import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from 'lib/api';
import CodeHighlight from './CodeHighlight';

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => (
      <pre data-language={language}>
        <CodeHighlight language={language}>
          {code}
          <div className="code-filename">{filename}</div>
        </CodeHighlight>
      </pre>
    ),
    image: ({ node: { asset, alt, position = 'center' } }) => {
      return (
        <div className={`blog-image blog-image-${position}`}>
          <img src={urlFor(asset.url).height(400).fit('max').url()} alt={alt} />
          <div className="img-alt">{alt}</div>
        </div>

      )
    }
  }

}

export default function BlogContentCmp({ blog }) {
  return <BlockContent
    serializers={serializers}
    blocks={blog.content} />


}
