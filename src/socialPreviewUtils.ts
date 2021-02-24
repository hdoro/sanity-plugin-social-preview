import imageUrlBuilder from '@sanity/image-url'
import sanityClient from 'part:@sanity/base/client'
import { SanityImage } from './previewTypes'

const builder = imageUrlBuilder(sanityClient)

export const getDomainName = (url: string) => url.split('://')[1]

export const urlFor = (source: SanityImage) => {
  return builder.image(source)
}

export const assemblePageUrl = ({
  document,
  options,
}: {
  document: { slug?: string }
  options: { previewURL?: string }
}): string => {
  const { slug } = document
  const { previewURL } = options
  if (!slug || !previewURL) {
    console.warn('Missing slug or previewURL', { slug, previewURL })
    return ''
  }
  return `${previewURL}/project/${slug}`
}

const defaults = { nonTextBehavior: 'remove' }

export function toPlainText(
  blocks: any[],
  opts: {
    nonTextBehavior?: 'remove'
  } = {},
): string {
  const options = Object.assign({}, defaults, opts)
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove'
          ? ''
          : `[${block._type} block]`
      }

      return block.children.map((child: any) => child.text || '').join('')
    })
    .join('\n\n')
}
