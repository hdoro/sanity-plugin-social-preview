import React from 'react'
import styled from 'styled-components'
import GlobeIcon from '../components/GlobeIcon'
import { ShareItem } from '../components/ShareItem'
import { BasePreviewProps } from '../types'
import { getDomainName, useUrlFor } from '../utils'

const Wrapper = styled.div`
  overflow: hidden;
  font-family: Helvetica, Arial, sans-serif;
  max-width: 515px;
  background: white;
  border-radius: 3px;

  &:hover .content {
    background: rgba(29, 33, 41, 0.08);
  }

  .header {
    padding: 12px;
    display: grid;
    grid-template-columns: 40px auto;
    grid-template-rows: auto auto;
    grid-gap: 0px 8px;
    align-items: center;
  }

  .header > div {
    color: #385898;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }

  .header > span {
    color: #616770;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
  }

  .header > span > svg {
    fill: currentColor;
    width: 12px;
    flex: 0 0 12px;
    margin-left: 11px;
  }

  .header > img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    grid-row: 1 / -1;
    grid-column: 1;
  }

  .imageContainer {
    display: flex;
    width: 100%;
    overflow: hidden;
    background: rgba(29, 33, 41, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
  }

  .image {
    max-height: 262px;
    width: 100%;
    object-fit: cover;
  }

  .content {
    padding: 10px 12px;
    color: #606770;
    background: rgba(29, 33, 41, 0.04);
  }

  .url {
    color: #606770;
    flex-shrink: 0;
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    padding: 0;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
  }

  .title a {
    color: #1d2129;
    font-family: inherit;
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    margin: 3px 0 0;
    padding-top: 2px;
    text-decoration: none;
  }

  .desc {
    color: #606770;
    font-size: 14px;
    line-height: 20px;
    max-height: 80px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
  }

  .actions {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 13px;
    padding: 15px;
    font-weight: 600;
    color: #606770;
    line-height: 14px;
  }
`

export function FacebookSharePreview({ title, description, ogImage, siteUrl }: BasePreviewProps) {
  const urlFor = useUrlFor()
  const ogImageUrl: string | undefined = ogImage
    ? urlFor(ogImage).size(1200, 630).url() || undefined
    : undefined
  return (
    <ShareItem style={{ background: 'rgb(233, 235, 238)' }} title="Facebook sharing">
      <Wrapper>
        <div className={'header'}>
          <img src="https://via.placeholder.com/40/40" aria-hidden />
          <div>Person</div>
          <span>
            1h <GlobeIcon />
          </span>
        </div>
        <div className={'imageContainer'}>
          <img className={'image'} src={ogImageUrl} />
        </div>
        <div className={'content'}>
          <div className={'url'}>{getDomainName(siteUrl)}</div>
          <div className={'title'}>
            <a href="#">{title}</a>
          </div>
          <div className={'desc'}>{description}</div>
        </div>
        <div className={'actions'}>
          <span>Like</span>
          <span>Comment</span>
          <span>Share</span>
        </div>
      </Wrapper>
    </ShareItem>
  )
}
