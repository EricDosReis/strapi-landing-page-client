import React from 'react'
import { AuthorProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const ProfileCard: React.FC<AuthorProps> = ({
  name,
  role,
  photo,
  description
}) => (
  <S.Card key={name}>
    <S.Image src={getImageUrl(photo.url)} alt={name} loading="lazy" />

    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
