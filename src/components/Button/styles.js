import styled from 'styled-components';
import { Colors } from '../../utils/pallete';

export const Button = styled.button`
  font-family: 'roboto slab';
  width: 100%;
  max-width: 350px;
  height: 46px;
  color: ${Colors.typeGray};
  background-color: ${Colors.typeRed};

  font-size: 20px;
  font-weight: bold;
  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.4s ease;

  &:active {
    filter: brightness(1.1);
  }
`;
