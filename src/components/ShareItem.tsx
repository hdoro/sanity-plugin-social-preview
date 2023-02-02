import styled from 'styled-components'
import React, { PropsWithChildren } from 'react'
import { Heading } from '@sanity/ui'

const Section = styled.section`
  padding: 35px 45px;
  overflow: hidden;

  > * {
    margin-left: auto;
    margin-right: auto;
  }

  > h2 {
    text-align: center;
    padding-bottom: 1.5em;
    text-transform: capitalize;
  }
`

export function ShareItem(
  props: PropsWithChildren<{ title: string; style?: React.CSSProperties }>,
) {
  return (
    <Section style={props.style}>
      <Heading as="h2" size={2} justify-self="center">
        {props.title}
      </Heading>
      {props.children}
    </Section>
  )
}
