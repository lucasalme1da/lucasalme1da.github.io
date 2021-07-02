import React from 'react';
import * as S from './styles';

const ProjectCard = ({ data }) => (
  <S.CardContainer>
    <S.Image src={data.imgSrc} />
    <S.Title>{data.title}</S.Title>
    <S.DescriptionContainer>
      <S.Description>{data.description}</S.Description>
    </S.DescriptionContainer>
    <S.TagsContainer>
      <S.Tags>{data.tags.map((t) => `#${t}`).join(', ')}</S.Tags>
    </S.TagsContainer>
    {data.github.trim() !== '' && (
      <S.Github onClick={() => window.open(data.github)} />
    )}
    {data.externalLink.trim() !== '' && (
      <S.ExternalLink onClick={() => window.open(data.externalLink)} />
    )}
  </S.CardContainer>
);

export default ProjectCard;
