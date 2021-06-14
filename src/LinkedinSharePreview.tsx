import React from 'react'

import s from '../styles/LinkedinSharePreview.module.css'
import { urlFor } from './socialPreviewUtils'
import GlobeIcon from './GlobeIcon'
import { BasePreviewProps } from './previewTypes'

const LinkedinSharePreview: React.FC<BasePreviewProps> = ({
  title,
  description,
  ogImage,
  ogImageAbsoluteUrl,
}) => {
  const ogImageUrl: string | undefined = ogImage
    ? urlFor(ogImage).size(1200, 630).url() || undefined
    : ogImageAbsoluteUrl || undefined
  return (
    <section className="share-item" style={{ background: '#f5f5f5' }}>
      <h2>LinkedIn sharing</h2>
      <div className={s.wrapper}>
        <div className={s.profile}>
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
          <div className={s.imageContainer}>
            <img src={ogImageUrl} />
          </div>
        )}
        <div className={s.content}>
          <div>{title}</div>
          {description && <p>{description}</p>}
        </div>
        <div className={s.likes}>10 • 3 comments</div>
      </div>
    </section>
  )
}

export default LinkedinSharePreview
