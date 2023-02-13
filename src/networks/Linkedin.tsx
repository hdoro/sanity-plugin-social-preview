import React from 'react'
import styled from 'styled-components'
import GlobeIcon from '../components/GlobeIcon'
import { ShareItem } from '../components/ShareItem'
import { BasePreviewProps } from '../types'
import { getDomainName, useImageUrl } from '../utils'

const Wrapper = styled.div`
  max-width: 552px;
  background: white;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
    Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif;
  border-radius: 0.8rem;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.08);

  p {
    margin: 0;
  }

  .profile {
    display: grid;
    align-items: center;
    grid-template-columns: 48px auto;
    grid-template-rows: 19.99px 16px 16px;
    gap: 0 8px;
    padding: 12px 16px 0;
    margin-bottom: 8px;
  }

  .profile > img {
    grid-row: 1 / -1;
    grid-column: 1;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .profile > div {
    color: rgba(0, 0, 0, 0.9);
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }

  .profile > div > span {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
  }

  .profile > span {
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    line-height: 16px;
  }

  .profile svg {
    fill: currentColor;
    height: 14px;
    vertical-align: middle;
  }

  .imageContainer {
    padding-top: 52.3%;
    max-width: 100%;
    max-height: 493px;
    position: relative;
  }

  .imageContainer > img {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .content {
    display: grid;
    align-items: flex-start;
    color: rgba(0, 0, 0, 0.9);
    font-size: 16px;
    justify-content: space-between;
    line-height: 24px;
    padding: 8px 12px;
    background: #eff3f7;
  }

  .content > div {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    line-height: 20px;
    max-height: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .content > p {
    margin: 8px 0 0;
    font-size: 12px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.6);
  }

  .reactions {
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    display: grid;
    justify-content: space-between;
    grid-template-columns: auto auto;
    margin: 0 16px;
    padding: 8px 0;
  }

  .reactions > div {
    display: flex;
  }

  .reactions > div > p {
    padding-left: 4px;
  }

  .iconStacked {
    margin: 0 0 0 -0.4rem;
    border-radius: 50%;
    background-color: white;
  }

  .actions {
    display: grid;
    grid-template-columns: auto auto auto auto;
    height: 48px;
    padding: 4px 12px;
  }

  .actions > div {
    display: flex;
    padding: 10px 8px;
    align-items: center;
    justify-content: center;
  }

  .actions > div > svg {
    margin: 0 4px 0 -2px;
  }

  .actions > div > p {
    margin: 0;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
  }
`

export function LinkedinSharePreview({ title, image, url }: BasePreviewProps) {
  const ogImageUrl = useImageUrl(image, { w: 1200, h: 630 })

  return (
    <ShareItem style={{ background: '#f5f5f5' }} title="LinkedIn sharing">
      <Wrapper>
        <div className={'profile'}>
          <img src="https://via.placeholder.com/48/48" aria-hidden alt={`Image for ${title}`} />
          <div>
            Person <span>• 1st</span>
          </div>
          <span>Creator</span>
          <span>
            1h • <GlobeIcon />
          </span>
        </div>
        {ogImageUrl && (
          <div className={'imageContainer'}>
            <img src={ogImageUrl} />
          </div>
        )}
        <div className={'content'}>
          <div>{title}</div>
          <p className={'url'}>{getDomainName(url)} • 2 min read</p>
          {/* {description && <p>{truncate(description, 150)}</p>} */}
        </div>
        <div>
          <div className={'reactions'}>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  id="interest-consumption-small"
                  data-supported-dps="16x16"
                >
                  <g>
                    <path d="M8 0a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z" fill="none" />
                    <circle cx="8" cy="8" r="7" fill="#f5bb5c" />
                    <path
                      d="M8.82 13.4h-1.6a.54.54 0 01-.54-.54v-1.33h2.68v1.33a.54.54 0 01-.54.54z"
                      fill="#ffe1b2"
                      fillRule="evenodd"
                    />
                    <path
                      d="M6.69 11.79v-.26a3.08 3.08 0 00-.16-1A3.46 3.46 0 006 9.75a3.24 3.24 0 01-1.19-2.49 3.21 3.21 0 016.42 0A3.38 3.38 0 0110 9.8c.07-.05-.08.06-.18.2a1.71 1.71 0 00-.23.47 3.37 3.37 0 00-.15 1v.26"
                      fill="#fcf0de"
                      fillRule="evenodd"
                    />
                    <path
                      d="M7.46 4.78a2.21 2.21 0 00-1.22.65 2.43 2.43 0 00-.68 1.22"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M8.82 13.4h-1.6a.54.54 0 01-.54-.54v-1.33h2.68v1.33a.54.54 0 01-.54.54z"
                      fill="none"
                      stroke="#5d3b01"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.68 11.79v-.26a3.37 3.37 0 00-.15-1 2 2 0 00-.26-.47 2.54 2.54 0 00-.37-.43 3.41 3.41 0 01-.37-.39 3.16 3.16 0 01-.72-2h0a3.21 3.21 0 016.42 0 3.25 3.25 0 01-.73 2 3.84 3.84 0 01-.57.57l-.2.21a1.68 1.68 0 00-.22.47 3.37 3.37 0 00-.15 1v.26M4.6 2.64l.61.79M11.42 2.63l-.61.8M8 1.5v1.26"
                      fill="none"
                      stroke="#5d3b01"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="iconStacked"
                >
                  <g>
                    <path d="M8 0a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z" fill="none" />
                    <circle cx="8" cy="8" r="7" fill="#df704d" />
                    <path
                      d="M7.71 5A2.64 2.64 0 004 8.75l4 4 4-4A2.64 2.64 0 0012 5a2.61 2.61 0 00-1.85-.77h0A2.57 2.57 0 008.3 5l-.3.3z"
                      fill="#fff3f0"
                      stroke="#77280c"
                      fillRule="evenodd"
                    />
                    <path
                      d="M11.43 5.18a2 2 0 01.53.63c.9 1.67-.6 2.72-1.54 3.67-.6.61-1.22 1.22-1.85 1.8M5.79 4.81a2.1 2.1 0 00-.79.11 1.8 1.8 0 00-1 .82A2.6 2.6 0 003.77 7v.09"
                      fill="none"
                    />
                    <path
                      d="M7.71 5A2.6 2.6 0 004 5a2.66 2.66 0 000 3.7l4 4 4-4A2.66 2.66 0 0012 5a2.58 2.58 0 00-1.85-.78h0A2.58 2.58 0 008.3 5l-.3.25z"
                      fill="none"
                      stroke="#77280c"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="iconStacked"
                >
                  <g>
                    <path d="M8 0a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z" fill="none" />
                    <circle cx="8" cy="8" r="7" fill="#378fe9" />
                    <path
                      d="M11.93 7.25h-.55c-.05 0-.15-.19-.4-.46-.37-.4-.78-.91-1.07-1.19a7.13 7.13 0 01-1.73-2.24c-.24-.51-.26-.74-.75-.74a.78.78 0 00-.67.81c0 .14.07.63.1.8a7.54 7.54 0 001 2.2H4.12a.88.88 0 00-.65.28.84.84 0 00-.23.66.91.91 0 00.93.85h.16a.82.82 0 00-.55.24.77.77 0 00-.21.54.81.81 0 00.74.8.8.8 0 00.33 1.42.76.76 0 00-.09.55.87.87 0 00.85.63h2.29a3.8 3.8 0 00.89-.11l1.42-.4h1.9c1.02-.04 1.29-4.64.03-4.64z"
                      fill="#d0e8ff"
                      fillRule="evenodd"
                    />
                    <path
                      d="M7.43 6.43H4.11a.88.88 0 00-.88 1 .92.92 0 00.93.84h.16a.82.82 0 00-.55.24.77.77 0 00-.21.56.83.83 0 00.74.81.81.81 0 00-.31.63.81.81 0 00.65.8.78.78 0 00-.09.56.86.86 0 00.85.62h2.29a3.8 3.8 0 00.89-.11l1.42-.47h1.9c1 0 1.27-4.64 0-4.64a5 5 0 01-.55 0s-.15-.19-.4-.46h0c-.37-.4-.78-.91-1.07-1.19a7.08 7.08 0 01-1.7-2.25 2.14 2.14 0 00-.32-.52.83.83 0 00-1.16.09 1.39 1.39 0 00-.25.38 1.71 1.71 0 00-.09.3 2.38 2.38 0 00.07.84 4.12 4.12 0 00.27.84 6.65 6.65 0 00.66 1 .18.18 0 01.07.08"
                      fill="none"
                      stroke="#004182"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <p>232</p>
            </div>
            <div>
              <p>3 comments</p>
              <p>•</p>
              <p>5 reposts</p>
            </div>
          </div>
          <div className={'actions'}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(0, 0, 0, 0.6)"
                width="24"
                height="24"
              >
                <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z" />
              </svg>
              <p>Like</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(0, 0, 0, 0.6)"
                width="24"
                height="24"
              >
                <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z" />
              </svg>
              <p>Comment</p>
            </div>
            <div>
              <svg
                width="19"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 17.5V6.63793C1.5 6.08565 1.94772 5.63793 2.5 5.63793H13.5M13.5 5.63793L10.5 1.5M13.5 5.63793L10.5 9.5"
                  stroke="#666666"
                  strokeWidth="2"
                />
                <path
                  d="M17.5 9.5V20.3621C17.5 20.9144 17.0523 21.3621 16.5 21.3621H5.5M5.5 21.3621L8.5 25.5M5.5 21.3621L8.5 17.5"
                  stroke="#666666"
                  strokeWidth="2"
                />
              </svg>

              <p>Repost</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(0, 0, 0, 0.6)"
                width="24"
                height="24"
              >
                <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z" />
              </svg>
              <p>Send</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </ShareItem>
  )
}
