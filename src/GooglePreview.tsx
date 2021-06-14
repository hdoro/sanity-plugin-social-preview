import React from 'react'

import s from '../styles/GooglePreview.module.css'
import { BasePreviewProps } from './previewTypes'
import { urlFor } from './socialPreviewUtils'

export const GoogleDesktop: React.FC<BasePreviewProps> = ({
  title,
  description,
  siteUrl,
  slug,
}) => {
  const url = siteUrl + (slug || '')

  return (
    <section className="share-item">
      <h2>Desktop Google result</h2>
      <div className={s.wrapper}>
        <h3>{title}</h3>
        <div className={s.metaDesktop}>{url}</div>
        <p>
          {description && description.length > 135
            ? description.slice(0, 135) + ' ...'
            : description}
        </p>
      </div>
    </section>
  )
}

export const GoogleMobile: React.FC<BasePreviewProps> = ({
  title,
  description,
  ogImage,
  ogImageAbsoluteUrl,
  siteUrl,
  slug,
}) => {
  const url = siteUrl + (slug || '')

  const ogImageUrl: string | undefined = ogImage
    ? urlFor(ogImage).size(104, 104).url() || undefined
    : ogImageAbsoluteUrl || undefined

  return (
    <section className="share-item">
      <h2>Mobile Google result</h2>
      <div className={s.wrapper + ' ' + s.wrapperMobile}>
        <div className={s.metaMobile}>
          <div /> {url}
        </div>
        <h3>{title}</h3>
        <div className={s.contentMobile}>
          <div>
            {description && description.length > 135
              ? description.slice(0, 135) + ' ...'
              : description}
          </div>
          {ogImageUrl && <img src={ogImageUrl} />}
        </div>
      </div>
    </section>
  )
}
