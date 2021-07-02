import React from 'react';

import * as S from './styles';

const Button = ({ value, onClick, icon = null }) => (
  <S.Button onClick={onClick}>
    {value}
    {icon}
  </S.Button>
);

export default Button;
