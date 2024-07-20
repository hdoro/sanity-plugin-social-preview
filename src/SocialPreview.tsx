import { Flex, Spinner } from '@sanity/ui'
import React, { useCallback, useState, useEffect } from 'react'
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

async function asyncCall(this: unknown, item: unknown, ...args: unknown[]): Promise<unknown> {
  // eslint-disable-next-line no-return-await
  return await (typeof item === 'function' ? item.apply(this, args) : item)
}

const SocialPreview = ({
  prepareData = fallbackPrepareData,
  google,
  twitter,
  linkedin,
  facebook,
}: SocialPreviewProps = {}) => {
  return function SocialPreviewComponent({ document }: DocumentView) {
    const [loading, setLoading] = useState<boolean | undefined>(undefined)
    const [chosenNetwork, setChosenNetwork] = useState<Network>('google')
    const [networkProps, setNetworkProps] = useState<Record<PropertyKey, BasePreviewProps>>({})

    const chooseNetwork = useCallback(
      (network: Network) => () => setChosenNetwork(network),
      [setChosenNetwork],
    )

    const availableNetworks: Record<Network, boolean | undefined> = {
      google: google === false ? undefined : true,
      twitter: twitter === false ? undefined : true,
      linkedin: linkedin === false ? undefined : true,
      facebook: facebook === false ? undefined : true,
    }
    const networkKeys = Object.keys(NETWORKS) as Network[]

    useEffect(() => {
      const loadProps = () => {
        setLoading(true)

        Promise.all([
          asyncCall(prepareData, document?.displayed) as Promise<BasePreviewProps>,
          asyncCall(google, document?.displayed) as Promise<BasePreviewProps>,
          asyncCall(twitter, document?.displayed) as Promise<BasePreviewProps>,
          asyncCall(linkedin, document?.displayed) as Promise<BasePreviewProps>,
          asyncCall(facebook, document?.displayed) as Promise<BasePreviewProps>,
        ]).then(([data, googleData, twitterData, linkedinData, facebookData]) => {
          const newNetworkProps = { ...networkProps }

          if (availableNetworks.google) {
            newNetworkProps.google = googleData || data
          }

          if (availableNetworks.twitter) {
            newNetworkProps.twitter = twitterData || data
          }

          if (availableNetworks.linkedin) {
            newNetworkProps.linkedin = linkedinData || data
          }

          if (availableNetworks.facebook) {
            newNetworkProps.facebook = facebookData || data
          }

          setNetworkProps(newNetworkProps)
          setLoading(false)
        })
      }

      if (loading === undefined) {
        loadProps()
      }
    }, [loading, setLoading])

    if (loading !== false) {
      return (
        <Flex justify="center" align="center" height="fill">
          <Spinner muted size={2} />
        </Flex>
      )
    }

    return (
      <Wrapper>
        <div className="navBar">
          {networkKeys.map((network) => {
            if (!availableNetworks[network]) return null

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
          if (!availableNetworks[network] || network !== chosenNetwork) return null

          const { component: Component } = NETWORKS[network]
          return <Component key={network} {...networkProps[network]} />
        })}
      </Wrapper>
    )
  }
}

export default SocialPreview
