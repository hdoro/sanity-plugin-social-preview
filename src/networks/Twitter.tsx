import React from 'react'
import styled from 'styled-components'
import { ShareItem } from '../components/ShareItem'
import { BasePreviewProps } from '../types'
import { getDomainName, truncate, useUrlFor } from '../utils'

const Wrapper = styled.div`
  padding: 30px 40px;
  max-width: 560px;
  background: white;
  font-family: 'Segoe UI', Arial, sans-serif;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .profile {
    display: grid;
    grid-template-columns: 48px auto;
    grid-template-rows: auto auto;
    grid-gap: 0 8px;
    gap: 0 8px;
  }

  .profile > img {
    grid-row: 1 / -1;
    grid-column: 1;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .profile > div {
    color: #14171a;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }

  .profile > span {
    color: #657786;
    font-size: 14px;
    line-height: 20px;
  }

  .button {
    color: #981ceb;
    border: 1px solid currentColor;
    border-radius: 100px;
    font-size: 14px;
    min-width: 100px;
    line-height: 20px;
    font-weight: 700;
    padding: 6px 16px;
    text-align: center;
    background: transparent;
    cursor: pointer;
  }

  .card {
    border-radius: 12px;
    overflow: hidden;
    margin: 10px 0 20px;
  }

  .card > img {
    border-bottom: 1px solid #e1e8ed;
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .content {
    font-size: 14px;
    padding: 0.75em 1em;
    line-height: 18px;
    color: black;
    border-width: 1px;
    border-style: solid;
    border-color: #e1e8ed;
    border-radius: 0 0 12px 12px;
  }

  .content > div {
    max-height: 1.3em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 0 0.15em;
    font-weight: 700;
  }

  .content > p {
    max-height: 2.6em;
    overflow: hidden;
    margin: 0.32em 0 0;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -moz-box-orient: vertical;
  }

  .content > span {
    text-transform: lowercase;
    color: #8899a6;
    max-height: 1.3em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0.32333em;
  }

  .date {
    margin-top: 10px;
    color: #657786;
    font-size: 14px;
    line-height: 24px;
  }

  .likes {
    margin-top: 10px;
    border-bottom: 1px solid #e6ecf0;
    border-top: 1px solid #e6ecf0;
    color: #657786;
    padding: 12px 0;
  }

  .likes strong {
    color: #14171a;
    font-weight: bold;
  }
`

export function TwitterSharePreview({ title, description, ogImage, siteUrl }: BasePreviewProps) {
  const urlFor = useUrlFor()
  const ogImageUrl: string | undefined = ogImage
    ? urlFor(ogImage).size(1200, 600).url() || undefined
    : undefined
  return (
    <ShareItem style={{ background: 'rgb(230, 236, 240)' }} title="Twitter sharing">
      <Wrapper>
        <div className={'header'}>
          <div className={'profile'}>
            <img src="https://via.placeholder.com/48/48" aria-hidden />
            <div>Person</div>
            <span>@person</span>
          </div>
          <span className="button">Follow</span>
        </div>
        <div className={'card'}>
          <img src={ogImageUrl} />
          <div className={'content'}>
            <div>{title}</div>
            {description && <p>{truncate(description, 150)}</p>}
            <span>{getDomainName(siteUrl)}</span>
          </div>
        </div>
        <div className={'date'}>
          {new Date().toLocaleTimeString('en', {
            second: undefined,
          })}{' '}
          -{' '}
          {new Date().toLocaleDateString('en', {
            dateStyle: 'medium',
          } as any)}
        </div>
        <div className={'likes'}>
          <strong>10</strong> likes
        </div>
      </Wrapper>
    </ShareItem>
  )
}
