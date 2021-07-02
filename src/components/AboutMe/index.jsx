import React from 'react';
import * as S from './styles';

import Button from '../Button';

const Landing = () => (
  <S.SectionContainer>
    <S.Heading>
      about<S.TextColor>.me()</S.TextColor>
    </S.Heading>
    <S.ContentContainer>
      <S.Paragraph>
        In summer 2017, right after I got my{' '}
        <S.TextColor>technical degree in computer networking</S.TextColor>, I
        started a{' '}
        <S.TextColor>bachelor’s degree in computer engineering</S.TextColor> at
        the Federal Technological University of Paraná.
      </S.Paragraph>
      <S.Paragraph>
        Modules studied during my degree includes{' '}
        <S.TextColor>object-oriented programming</S.TextColor>,{' '}
        <S.TextColor>systems & architecture</S.TextColor>,{' '}
        <S.TextColor>software engineering management</S.TextColor>,{' '}
        <S.TextColor>operating systems</S.TextColor> and{' '}
        <S.TextColor>robotics</S.TextColor>.
      </S.Paragraph>
      <S.Paragraph>
        I&apos;m currently working with front-end development using{' '}
        <S.TextColor>React</S.TextColor> and
        <S.TextColor> React Native</S.TextColor>, but also studying and learning
        more about <S.TextColor>web development</S.TextColor>.
      </S.Paragraph>
    </S.ContentContainer>
    <Button value="Resume" icon={<S.PDFIcon />} />
  </S.SectionContainer>
);

export default Landing;
