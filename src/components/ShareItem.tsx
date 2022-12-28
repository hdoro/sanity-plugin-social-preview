import styled from 'styled-components'
import React, { PropsWithChildren } from 'react'

const Section = styled.section`
  padding: 35px 45px;
  overflow: hidden;

  > * {
    margin-left: auto;
    margin-right: auto;
  }

  > h2 {
    text-align: center;
  }
`

export function ShareItem(
  props: PropsWithChildren<{ title: string; style?: React.CSSProperties }>,
) {
  return (
    <Section style={props.style}>
      <h2>{props.title}</h2>
      {props.children}
    </Section>
  )
}
