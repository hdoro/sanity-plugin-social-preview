import { PrepareFunction } from './types'
import { toPlainText } from './utils'

export const fallbackPrepareData: PrepareFunction = (doc) => {
  if (!doc) {
    return
  }

  const description = doc.description || doc.metaDescription || doc.seoDescription

  // Sane defaults to what we could use for title, description, etc.
  // eslint-disable-next-line
  return {
    title: doc.title || '(page not yet named)',
    description:
      // eslint-disable-next-line
      typeof description === 'string'
        ? description
        : Array.isArray(description)
        ? toPlainText(description)
        : undefined,
    url: 'https://example.com',
    image: doc.openGraphImage || doc.ogImage || doc.image,
  }
}
