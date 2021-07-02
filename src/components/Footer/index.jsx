import React from 'react';

import * as S from './styles';

const Footer = () => (
  <S.Footer>
    <S.Wave />
    <S.FooterContent>
      <S.SocialIconContainer>
        <S.Facebook
          onClick={() =>
            window.open('https://www.facebook.com/lucasdealmeida.ss/')
          }
        />
        <S.LinkedIn
          onClick={() =>
            window.open('https://www.linkedin.com/in/lucasalme1da/')
          }
        />
        <S.Github
          onClick={() => window.open('https://www.github.com/lucasalme1da/')}
        />
      </S.SocialIconContainer>
      <S.Paragraph>
        Made with 🤍 <br /> by <u>Lucas Almeida</u>
      </S.Paragraph>{' '}
    </S.FooterContent>
  </S.Footer>
);

export default Footer;
