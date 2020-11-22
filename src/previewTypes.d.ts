export interface BaseSanityDoc {
  _type: string
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
}

export interface GenericSanityDoc extends BaseSanityDoc {
  [key: string]: any
}

export interface DocumentView<DocumentSchema = GenericSanityDoc> {
  documentId: string
  document: {
    displayed: DocumentSchema
    draft: DocumentSchema
    historical: DocumentSchema | null
    published: DocumentSchema | null
  }
  // there are some other properties such as options and schemaType, which we can define here once we need them
}

export interface SanityImage {
  _type?: string
  asset?: {
    _ref?: string
    _type?: string
  }
  crop?: {
    _type: string
    bottom: number
    left: number
    right: number
    top: number
  }
  hotspot?: {
    _type: string
    height: number
    width: number
    x: number
    y: number
  }
}

export interface BasePreviewProps {
  title: string
  description?: string
  ogImage?: SanityImage
  siteUrl: string
  slug?: string
}

declare module 'part:social-preview/component' {
  const SocialPreview: (props: SocialPreviewProps) => any
  export default SocialPreview
}

declare module 'part:social-preview/utils' {
  export function toPlainText(
    blocks: any[],
    opts: {
      nonTextBehavior?: 'remove'
    } = {},
  ): string
}
