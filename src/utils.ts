import imageUrlBuilder from '@sanity/image-url'
import { useDataset, useProjectId } from 'sanity'
import { SanityImage } from './types'

export const getDomainName = (str: string): string => {
  try {
    const url = new URL(str)
    return url.hostname
  } catch (error) {
    return str
  }
}

// eslint-disable-next-line
export const useUrlFor = () => {
  const projectId = useProjectId()
  const dataset = useDataset()

  const builder = imageUrlBuilder({ projectId, dataset })
  return (source: SanityImage) => builder.image(source)
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
        return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`
      }

      return block.children.map((child: any) => child.text || '').join('')
    })
    .join('\n\n')
}

export function truncate(str: string, maxLength: number): string {
  if (str.length < maxLength) {
    return str
  }

  // To prevent truncating in the middle of words, let's get
  // the position of the first whitespace after the truncation
  const firstWhitespaceAfterTruncation = str.slice(maxLength).search(/\s/) + maxLength

  return `${str.slice(0, firstWhitespaceAfterTruncation)}...`
}
