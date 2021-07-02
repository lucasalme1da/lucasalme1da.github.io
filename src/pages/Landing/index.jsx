import React from 'react';
import * as S from './styles';

import Button from '../../components/Button';

import Photo from '../../assets/avatar.jpg';

const Landing = () => (
  <S.SectionContainer>
    <S.ContentContainer>
      <S.PhotoContainer>
        <S.Photo src={Photo} alt="Lucas Almeida" />
      </S.PhotoContainer>
      <S.TitleContainer>
        <S.Introduction>Hey there!</S.Introduction>
        <S.Title>I&apos;m Lucas Almeida</S.Title>
        <S.Description>Computer Engineer Student & Web Developer</S.Description>
      </S.TitleContainer>
      <S.ButtonContainer>
        <Button value="Contact me!" />
        <S.ChevronDown />
      </S.ButtonContainer>
    </S.ContentContainer>
  </S.SectionContainer>
);

export default Landing;
