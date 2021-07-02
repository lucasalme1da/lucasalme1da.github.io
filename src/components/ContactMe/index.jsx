/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import * as S from './styles';

import Button from '../Button';

const ContactMe = () => (
  <S.SectionContainer>
    <S.Heading>
      contact<S.TextColor>.me()</S.TextColor>
    </S.Heading>
    <S.ContentContainer>
      <S.Paragraph>Feel free to send me a message!</S.Paragraph>
      <S.Form>
        <S.InputSingle placeholder="name*" />
        <S.InputSingle placeholder="email*" />
        <S.InputMulti placeholder="your message :D*" />
      </S.Form>
      <Button value="Submit" />
    </S.ContentContainer>
  </S.SectionContainer>
);

export default ContactMe;
