import React from 'react'

import s from '../styles/TwitterSharePreview.module.css'
import { getDomainName, urlFor } from './socialPreviewUtils'
import { BasePreviewProps } from './previewTypes'

const TwitterSharePreview: React.FC<BasePreviewProps> = ({
  title,
  description,
  ogImage,
  siteUrl,
}) => {
  let absoluteImageUrl: string | undefined = undefined

  if (ogImageAbsoluteUrl) {
    absoluteImageUrl =
      ogImageAbsoluteUrl.startsWith('https://') ||
      ogImageAbsoluteUrl.startsWith('http://') ||
      ogImageAbsoluteUrl.startsWith('//')
        ? ogImageAbsoluteUrl
        : undefined
  }

  const ogImageUrl: string | undefined = ogImage
    ? urlFor(ogImage).size(1200, 600).url() || undefined
    : absoluteImageUrl || undefined
    
  return (
    <section
      className="share-item"
      style={{ background: 'rgb(230, 236, 240)' }}
    >
      <h2>Twitter sharing</h2>
      <div className={s.wrapper}>
        <div className={s.header}>
          <div className={s.profile}>
            <img src="https://via.placeholder.com/48/48" aria-hidden />
            <div>Person</div>
            <span>@person</span>
          </div>
          <button>Follow</button>
        </div>
        <div className={s.card}>
          <img src={ogImageUrl} />
          <div className={s.content}>
            <div>{title}</div>
            {description && <p>{description}</p>}
            <span>{getDomainName(siteUrl)}</span>
          </div>
        </div>
        <div className={s.date}>
          {new Date().toLocaleTimeString('en', {
            second: undefined,
          })}{' '}
          -{' '}
          {new Date().toLocaleDateString('en', {
            dateStyle: 'medium',
          } as any)}
        </div>
        <div className={s.likes}>
          <strong>10</strong> likes
        </div>
      </div>
    </section>
  )
}

export default TwitterSharePreview
