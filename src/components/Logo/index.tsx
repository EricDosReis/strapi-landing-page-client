import React from 'react'

import { getImageUrl } from 'utils/getImageUrl'
import { LogoProps } from 'types/api'
import * as S from './styles'

const Logo = ({ url, alternativeText }: LogoProps) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
