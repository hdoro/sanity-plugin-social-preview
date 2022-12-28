import React from 'react'
import styled from 'styled-components'
import { ShareItem } from '../components/ShareItem'
import { BasePreviewProps } from '../types'
import { getDomainName, truncate } from '../utils'

const DesktopWrapper = styled.div`
  line-height: 1.57;
  font-family: arial, sans-serif;
  max-width: 560px;

  .header {
    padding-top: 1px;
    line-height: 1.5;
    display: flex;
    align-items: center;
    gap: 12px;

    > div:first-of-type {
      background: #f1f3f4;
      border: 1px solid #ecedef;
      padding: 0 4px;
      flex: 0 0 27px;
      height: 27px;
      width: 27px;
      border-radius: 50%;
      box-sizing: border-box;
    }

    > div:last-of-type {
      color: #4d5156;
      font-size: 12px;
      line-height: 18px;
      > div {
        color: #202124;
        font-size: 14px;
        line-height: 20px;
      }
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
    padding-top: 1px;
    line-height: 1.58;
    word-wrap: break-word;
    margin: 4px 0 0;
  }
`

export function GoogleDesktop({ title, description, siteUrl, slug }: BasePreviewProps) {
  const url = siteUrl + (slug || '')

  return (
    <ShareItem title="Desktop Google result">
      <DesktopWrapper>
        <div className={'header'}>
          <div>{/* img */}</div>
          <div>
            <div>{getDomainName(url)}</div>
            {url}
          </div>
        </div>
        <h3>{title}</h3>
        {/* @TODO: add optional date before description */}
        {description && <p>{truncate(description, 135)}</p>}
      </DesktopWrapper>
    </ShareItem>
  )
}
