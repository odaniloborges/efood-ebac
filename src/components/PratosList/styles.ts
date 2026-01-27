import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'restaurante'>>`
  padding: 32px 0;
  background-color: ${cores.bege};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  margin-top: 40px;
  margin-bottom: 120px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
