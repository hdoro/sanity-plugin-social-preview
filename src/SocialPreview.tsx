import React from 'react'
import { Spinner, Flex } from '@sanity/ui'
import { FacebookSharePreview } from './networks/Facebook'
import { TwitterSharePreview } from './networks/Twitter'
import { LinkedinSharePreview } from './networks/Linkedin'
import { GoogleDesktop, GoogleMobile } from './networks/Google'

import { DocumentView, GenericSanityDoc, BasePreviewProps } from './types'
import { toPlainText } from './utils'

function fallbackPrepare(doc: GenericSanityDoc): BasePreviewProps | void {
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
}: SocialPreviewProps | { [key: string]: any } | undefined = {}): React.FC<DocumentView> => {
  return function SocialPreviewComponent({ document }: DocumentView) {
    const previewProps = prepareFunction(document?.displayed)

    if (!previewProps || !document?.displayed) {
      return (
        <Flex justify="center" align="center" height="fill">
          <Spinner muted size={2} />
        </Flex>
      )
    }

    return (
      <>
        {google && <GoogleDesktop {...previewProps} />}
        {facebook && <FacebookSharePreview {...previewProps} />}
        {twitter && <TwitterSharePreview {...previewProps} />}
        {linkedin && <LinkedinSharePreview {...previewProps} />}
      </>
    )
  }
}

export default SocialPreview
