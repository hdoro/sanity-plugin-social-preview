import React from 'react'

import s from '../styles/FacebookSharePreview.module.css'
import { urlFor, getDomainName } from './socialPreviewUtils'
import GlobeIcon from './GlobeIcon'
import { BasePreviewProps } from './previewTypes'

const FacebookSharePreview: React.FC<BasePreviewProps> = ({
  title,
  description,
  ogImage,
  siteUrl,
}) => {
  const ogImageUrl: string | undefined = ogImage
    ? urlFor(ogImage).size(1200, 630).url() || undefined
    : undefined
  return (
    <section
      className="share-item"
      style={{ background: 'rgb(233, 235, 238)' }}
    >
      <h2>Facebook sharing</h2>
      <div className={s.wrapper}>
        <div className={s.header}>
          <img src="https://via.placeholder.com/40/40" aria-hidden />
          <div>Person</div>
          <span>
            1h <GlobeIcon />
          </span>
        </div>
        <div className={s.imageContainer}>
          <img className={s.image} src={ogImageUrl} />
        </div>
        <div className={s.content}>
          <div className={s.url}>{getDomainName(siteUrl)}</div>
          <div className={s.title}>
            <a href="#">{title}</a>
          </div>
          <div className={s.desc}>{description}</div>
        </div>
        <div className={s.actions}>
          <span>Like</span>
          <span>Comment</span>
          <span>Share</span>
        </div>
      </div>
    </section>
  )
}

export default FacebookSharePreview
