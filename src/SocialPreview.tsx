import React from 'react'
import { useState } from 'react'
import { Spinner, Flex } from '@sanity/ui'
import styled from 'styled-components'

import { FacebookSharePreview } from './networks/Facebook'
import { TwitterSharePreview } from './networks/Twitter'
import { LinkedinSharePreview } from './networks/Linkedin'
import { GoogleDesktop, GoogleMobile } from './networks/Google'
import { DocumentView, GenericSanityDoc, BasePreviewProps } from './types'
import { toPlainText } from './utils'

// LOGOS:
import FacebookLogo from './components/Facebook/FacebookLogo'
import GoogleLogo from './components/GoogleLogo'
import TwitterLogo from './components/TwitterLogo'
import LinkedinLogo from './components/LinkedinLogo'

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

const Wrapper = styled.div`
  font-family: Open Sans, sans-serif;
  .navBar {
    background-color: white;
    display: flex;
    margin: 1.5em 12.5em;
    justify-content: space-around;
  }

  button {
    background-color: white;
    border: none;
    cursor: pointer;
    transform: scale(0.8);
    transition: all 0.2s;
    filter: grayscale(1);

    &:hover,
    &:focus-visible,
    &[data-active='true'] {
      transform: scale(1.03);
      filter: grayscale(0);
      outline: none;
    }
  }
`

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
    const [network, setNetwork] = useState('linkedin')

    if (!previewProps || !document?.displayed) {
      return (
        <Flex justify="center" align="center" height="fill">
          <Spinner muted size={2} />
        </Flex>
      )
    }

    return (
      <Wrapper>
        <>
          <div className="navBar">
            <button
              type="button"
              onClick={() => setNetwork('google')}
              data-active={network === 'google'}
            >
              <GoogleLogo />
            </button>
            <button
              type="button"
              onClick={() => setNetwork('facebook')}
              data-active={network === 'facebook'}
            >
              <FacebookLogo />
            </button>
            <button
              type="button"
              onClick={() => setNetwork('twitter')}
              data-active={network === 'twitter'}
            >
              <TwitterLogo />
            </button>
            <button
              type="button"
              onClick={() => setNetwork('linkedin')}
              data-active={network === 'linkedin'}
            >
              <LinkedinLogo />
            </button>
          </div>
          {network === 'google' && google && <GoogleDesktop {...previewProps} />}
          {network === 'facebook' && facebook && <FacebookSharePreview {...previewProps} />}
          {network === 'twitter' && twitter && <TwitterSharePreview {...previewProps} />}
          {network === 'linkedin' && linkedin && <LinkedinSharePreview {...previewProps} />}
        </>
      </Wrapper>
    )
  }
}

export default SocialPreview
