import * as React from 'react'

import FacebookSharePreview from './FacebookSharePreview'
import TwitterSharePreview from './TwitterSharePreview'
import LinkedinSharePreview from './LinkedinSharePreview'
import { GoogleDesktop, GoogleMobile } from './GooglePreview'

import '../styles/socialPreview.css?raw'
import {
  DocumentView,
  GenericSanityDoc,
  BasePreviewProps,
} from './previewTypes'

function fallbackPrepare(doc: GenericSanityDoc): BasePreviewProps | undefined {
  if (!doc) {
    return
  }
  // Sane defaults to what we could use for title, description, etc.
  return {
    title: doc.title || '(page not yet named)',
    description: doc.description || doc.metaDescription || doc.seoDescription,
    siteUrl: 'https://example.com',
    ogImage: doc.openGraphImage || doc.ogImage || doc.image,
    slug: doc.slug?.current || doc.relativePath?.current,
  }
}

export interface SocialPreviewProps {
  /**
   * Function you'll use to customize which props correspond to which
   */
  prepareFunction: (doc: GenericSanityDoc) => BasePreviewProps | undefined
  google?: boolean
  twitter?: boolean
  linkedin?: boolean
  facebook?: boolean
}

// @TODO: select object to make it easier to re-use prepare function logic
const SocialPreview = ({
  prepareFunction = fallbackPrepare,
  google = true,
  twitter = true,
  linkedin = true,
  facebook = true,
}:
  | SocialPreviewProps
  | { [key: string]: any }
  | undefined = {}): React.FC<DocumentView> => {
  return ({ document }) => {
    const previewProps = prepareFunction(document?.displayed)

    if (!previewProps) {
      return null
    }

    return (
      <>
        {google && (
          <>
            <GoogleDesktop {...previewProps} />
            <GoogleMobile {...previewProps} />
          </>
        )}
        {facebook && <FacebookSharePreview {...previewProps} />}
        {twitter && <TwitterSharePreview {...previewProps} />}
        {linkedin && <LinkedinSharePreview {...previewProps} />}
      </>
    )
  }
}

export default SocialPreview
