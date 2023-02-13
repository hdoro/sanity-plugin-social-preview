import React from 'react'
import styled from 'styled-components'
import { ShareItem } from '../components/ShareItem'
import { BasePreviewProps } from '../types'
import { getDomainName, useUrlFor } from '../utils'

// SVG COMPONENTS:
import InfoCircle from '../components/Facebook/InfoCircle'
import GlobeIcon from '../components/GlobeIcon'
import ThreeDots from '../components/ThreeDots'
import CommentSVG from '../components/Facebook/CommentSVG'
import LikeSVG from '../components/Facebook/LikeSVG'
import ShareSVG from '../components/Facebook/ShareSVG'

const Wrapper = styled.div`
  overflow: hidden;
  font-family: Helvetica, Arial, sans-serif;
  background: #fff;
  color: #1c1e21;
  line-height: 1.34;
  max-width: min(680px, 100%);
  border-radius: max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px;

  &:hover .content {
    background: rgba(29, 33, 41, 0.08);
  }

  .header {
    padding: 12px 16px 0 16px;
    height: 36px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: row;
  }

  .headerContent {
    margin-top: -5px;
    margin-bottom: -5px;
    margin-left: 10px;
    width: 100%;
  }

  .headerContent > div {
    color: #050505;
    font-weight: 600;
    font-size: 15px;
    line-height: 17.5px;
    text-align: left;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .headerContent > span {
    font-weight: 400;
    font-size: 13px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    color: #65676b;
    height: 16px;
  }

  .headerContent > span > span {
    padding-left: 3.665px;
    padding-right: 3.665px;
    font-size: 0.8125rem;
    width: 3.665px;
  }

  .headerContent > span > svg {
    fill: currentColor;
    width: 12px;
    flex: 0 0 12px;
  }

  .threeDots {
    padding: 8px;
    width: 20px;
    height: 20px;
  }

  .header > img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  .container {
    display: grid;
    width: 100%;
    background: rgba(29, 33, 41, 0.04);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .imgContainer {
    position: relative;
  }

  .imgContainer[data-has-img='true'] {
    aspect-ratio: 1.91;
  }

  .imgContainer > svg {
    position: absolute;
    right: 18px;
    bottom: 0;
    transform: translateY(50%);
    z-index: 1;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .content {
    padding: 12px 16px;
    color: #050505;
    background: #f0f2f5;
    height: 52px;
    line-height: 16.08px;
    overflow: hidden;
  }

  .url {
    color: #65676b;
    flex-shrink: 0;
    font-size: 13px;
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
    color: #050505;
    font-family: inherit;
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    text-decoration: none;
  }

  .desc {
    color: #606770;
    font-size: 15px;
    line-height: 20px;
    max-height: 80px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
  }

  .actions {
    padding: 4px;
    height: 44px;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    font-size: 15px;
    font-weight: 600;
    color: #65676b;
    line-height: 19.9995px;
  }

  .actions > span {
    margin: -6px -4px;
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    align-items: center;
  }

  .actions > span > svg {
    padding-right: 8px;
    height: 18px;
    width: 18px;
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
          <div className={'headerContent'}>
            <div>Person</div>
            <span>
              1h <span> · </span>
              <GlobeIcon />
            </span>
          </div>
          <div className={'threeDots'}>
            <ThreeDots />
          </div>
        </div>
        <div className={'container'}>
          <div className={'imgContainer'} data-has-img={!!ogImageUrl}>
            {ogImageUrl && <img className={'image'} src={ogImageUrl} />}
            <InfoCircle />
          </div>
          <div className={'content'}>
            <div className={'url'}>{getDomainName(siteUrl)}</div>
            <div className={'title'}>
              <a href="#">{title}</a>
            </div>
            <div className={'desc'}>{description}</div>
          </div>
        </div>
        <div className={'actions'}>
          <span>
            <LikeSVG />
            Like
          </span>
          <span>
            <CommentSVG />
            Comment
          </span>
          <span>
            <ShareSVG />
            Share
          </span>
        </div>
      </Wrapper>
    </ShareItem>
  )
}
