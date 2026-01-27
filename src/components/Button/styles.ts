import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  font-size: 12px;
  font-weight: bold;
  padding: 8px 16px;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  font-size: 12px;
  font-weight: bold;
  padding: 8px 16px;
  margin-bottom: 8px;
  margin-top: 16px;
  text-decoration: none;
  display: inline-block;
`
