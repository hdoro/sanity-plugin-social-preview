import React from 'react'
import styled from 'styled-components'
import ThreeDots from '../components/ThreeDots'
import { ShareItem } from '../components/ShareItem'
import { BasePreviewProps } from '../types'
import { getDomainName, truncate } from '../utils'

const DesktopWrapper = styled.div`
  line-height: 1.3;
  font-family: arial, sans-serif;
  max-width: 773px;

  .header {
    display: flex;
    align-items: center;
    padding: 1px 0 2px 0;
    font-size: 14px;
    color: #202124;
    height: 20.539px; }

    .header > span {
      padding-right: 12px;
    }

    .dots {
      transform: rotate(90deg);
      padding-top: 5px;
    }

    .dots > svg {
      width: 16px;
      height: 16px;
    }
  }

  > h3 {
    color: #1a0dab;
    font-size: 20px;
    line-height: 1.3;
    font-weight: normal;
    margin: 5px 0 3px;
  }

  > p {
    color: #4d5156;
    font-size: 14px;
    line-height: 1.58;
    word-wrap: break-word;
    margin: 0;
  }
`

export function GoogleDesktop({ title, description, url }: BasePreviewProps) {
  return (
    <ShareItem title="Google result">
      <DesktopWrapper>
        <div className={'header'}>
          <span>{getDomainName(url)}</span>
          <div className={'dots'}>
            <ThreeDots />
          </div>
        </div>
        <h3>{title}</h3>
        {/* @TODO: add optional date before description */}
        {description && <p>{truncate(description, 135)}</p>}
      </DesktopWrapper>
    </ShareItem>
  )
}
