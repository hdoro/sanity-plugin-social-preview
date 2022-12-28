import React from 'react'
import styled from 'styled-components'
import GlobeIcon from '../components/GlobeIcon'
import { ShareItem } from '../components/ShareItem'
import { BasePreviewProps } from '../types'
import { truncate, useUrlFor } from '../utils'

const Wrapper = styled.div`
  max-width: 552px;
  background: white;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
    Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);

  .profile {
    display: grid;
    align-items: center;
    grid-template-columns: 48px auto;
    grid-template-rows: auto auto auto;
    grid-gap: 0 8px;
    gap: 0 8px;
    padding: 12px 16px 0;
    margin-bottom: 8px;
  }

  .profile > img {
    grid-row: 1 / -1;
    grid-column: 1;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .profile > div {
    color: rgba(0, 0, 0, 0.9);
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }

  .profile > div > span {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
  }

  .profile > span {
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    line-height: 14px;
    display: block;
  }

  .profile svg {
    fill: currentColor;
    height: 1em;
    vertical-align: middle;
  }

  .imageContainer {
    padding-top: 52.3%;
    max-width: 100%;
    position: relative;
  }

  .imageContainer > img {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .content {
    border-top: 1px solid #e6e9ec;
    padding: 8px 12px 12px;
    font-size: 12px;
    line-height: 16px;
    color: black;
    background: rgb(243, 246, 248);
  }

  .content > div {
    margin: 0 0 0.15em;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    line-height: 2rem !important;
    max-height: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .content > p {
    margin: 8px 0 0;
  }

  .likes {
    margin: 0 16px;
    padding: 8px 0;
    border-bottom: 1px solid #e6e9ec;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
  }
`

export function LinkedinSharePreview({ title, description, ogImage }: BasePreviewProps) {
  const urlFor = useUrlFor()
  const ogImageUrl: string | undefined = ogImage
    ? urlFor(ogImage).size(1200, 630).url() || undefined
    : undefined
  return (
    <ShareItem style={{ background: '#f5f5f5' }} title="LinkedIn sharing">
      <Wrapper>
        <div className={'profile'}>
          <img src="https://via.placeholder.com/48/48" aria-hidden />
          <div>
            Person <span>• 1st</span>
          </div>
          <span>Fan #1</span>
          <span>
            1h • <GlobeIcon />
          </span>
        </div>
        {ogImageUrl && (
          <div className={'imageContainer'}>
            <img src={ogImageUrl} />
          </div>
        )}
        <div className={'content'}>
          <div>{title}</div>
          {description && <p>{truncate(description, 150)}</p>}
        </div>
        <div className={'likes'}>10 • 3 comments</div>
      </Wrapper>
    </ShareItem>
  )
}
