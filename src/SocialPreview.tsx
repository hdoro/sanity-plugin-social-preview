import { Flex, Spinner } from '@sanity/ui'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

import FacebookLogo from './components/Facebook/FacebookLogo'
import GoogleLogo from './components/GoogleLogo'
import LinkedinLogo from './components/LinkedinLogo'
import TwitterLogo from './components/TwitterLogo'
import { fallbackPrepareData } from './fallbackPrepareData'
import { FacebookSharePreview } from './networks/Facebook'
import { GoogleDesktop } from './networks/Google'
import { LinkedinSharePreview } from './networks/Linkedin'
import { TwitterSharePreview } from './networks/Twitter'
import {
  BasePreviewProps,
  DocumentView,
  Network,
  PrepareFunction,
  SocialPreviewProps,
} from './types'

const Wrapper = styled.div`
  font-family: Open Sans, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  .navBar {
    background-color: white;
    display: flex;
    padding: 1.25em 0;
    justify-content: center;
    gap: 1em;
    border-bottom: 1px solid #eaeaea;
    // Make the network preview wrappers take up the remaining height of the panel
    + * {
      flex: 1;
    }
  }

  button {
    background-color: white;
    border: none;
    cursor: pointer;
    transform: scale(0.8);
    transition: all 0.2s;
    filter: grayscale(1);

    &:hover,
    &:focus-visible,
    &[data-active='true'] {
      transform: scale(1.03);
      filter: grayscale(0);
      outline: none;
    }
  }
`

const NETWORKS: Record<
  Network,
  { icon: React.FC<{}>; component: (props: BasePreviewProps) => React.ReactElement }
> = {
  google: { icon: GoogleLogo, component: GoogleDesktop },
  facebook: { icon: FacebookLogo, component: FacebookSharePreview },
  twitter: { icon: TwitterLogo, component: TwitterSharePreview },
  linkedin: { icon: LinkedinLogo, component: LinkedinSharePreview },
}

const SocialPreview = ({
  prepareData = fallbackPrepareData,
  google,
  twitter,
  linkedin,
  facebook,
}: SocialPreviewProps = {}) => {
  return function SocialPreviewComponent({ document }: DocumentView) {
    const previewProps = prepareData(document?.displayed)
    const [chosenNetwork, setChosenNetwork] = useState<Network>('google')

    const chooseNetwork = useCallback(
      (network: Network) => () => setChosenNetwork(network),
      [setChosenNetwork],
    )

    if (!previewProps || !document?.displayed || Object.keys(document.displayed).length <= 2) {
      return (
        <Flex justify="center" align="center" height="fill">
          <Spinner muted size={2} />
        </Flex>
      )
    }

    const networkProps: Record<Network, ReturnType<PrepareFunction>> = {
      google: google === false ? undefined : (google || prepareData)(document?.displayed),
      twitter: twitter === false ? undefined : (twitter || prepareData)(document?.displayed),
      linkedin: linkedin === false ? undefined : (linkedin || prepareData)(document?.displayed),
      facebook: facebook === false ? undefined : (facebook || prepareData)(document?.displayed),
    }
    const networkKeys = Object.keys(NETWORKS) as Network[]

    return (
      <Wrapper>
        <div className="navBar">
          {networkKeys.map((network) => {
            if (!networkProps[network]) return null

            const { icon: Icon } = NETWORKS[network]
            return (
              <button
                key={network}
                type="button"
                onClick={chooseNetwork(network)}
                data-active={network === chosenNetwork}
              >
                <Icon />
              </button>
            )
          })}
        </div>
        {networkKeys.map((network) => {
          const props = networkProps[network]
          if (!props || network !== chosenNetwork) return null

          const { component: Component } = NETWORKS[network]
          return <Component key={network} {...props} />
        })}
      </Wrapper>
    )
  }
}

export default SocialPreview
