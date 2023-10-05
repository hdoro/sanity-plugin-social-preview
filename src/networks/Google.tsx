import React from 'react'
import styled from 'styled-components'
import ThreeDots from '../components/ThreeDots'
import { ShareItem } from '../components/ShareItem'
import { BasePreviewProps } from '../types'
import { getDomainName, truncate } from '../utils'

const DesktopWrapper = styled.div`
  line-height: 1.3;
  font-family: arial, sans-serif;
  max-width: 600px;
  padding: 20px;
  box-sizing: content-box;
  border-radius: 8px;

  .header {
    display: flex;
    align-items: center;
    font-size: 12px;
  }

  .dots {
    margin-left: 12px;
    transform: rotate(90deg);
  }

  .dots > svg {
    width: 12px;
    height: 12px;
  }

  > h3 {
    margin: 5px 0 0;
    font-size: 20px;
    line-height: 1.3;
    font-weight: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    :hover {
      text-decoration: underline;
    }
  }

  > p,
  > span {
    margin: 0;
    font-size: 14px;
    line-height: 1.58;
    word-wrap: break-word;
    display: inline-block;
  }

  [data-scheme='light'] & {
    background-color: #fff;

    .header {
      color: #4d5156;

      .dots > svg {
        fill: #4d5156;
      }
    }

    > h3 {
      color: #1a0dab;
    }
    > span {
      color: #70757a;
    }
    > p {
      color: #4d5156;
    }
  }

  [data-scheme='dark'] & {
    background-color: #202124;

    .header {
      color: #bdc1c6;

      .dots > svg {
        fill: #9aa0a6;
      }
    }

    > h3 {
      color: #8ab4f8;
    }
    > span {
      color: #9aa0a6;
    }
    > p {
      color: #bdc1c6;
    }
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
        {/* {date && <span>Mar 9, 2021&nbsp;—&nbsp;</span>} */}
        {description && <p>{truncate(description, 135)}</p>}
      </DesktopWrapper>
    </ShareItem>
  )
}
