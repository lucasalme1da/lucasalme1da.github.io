import styled from 'styled-components';
import { Colors } from '../../utils/pallete';
import Background from '../../assets/background-decorator.svg';

export const SectionContainer = styled.section`
  background-color: ${Colors.backgroundBlack};
  background-image: url(${Background});
  background-size: auto 250%;
  background-position: right;
  background-clip: border-box;
  color: ${Colors.typeGray};

  padding: 10vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const Heading = styled.h1`
  width: 100%;
  font-size: 11vmin;
  color: ${Colors.typeGray};
  text-align: left;
  margin: 48px 0 32px 0;
`;

export const TextColor = styled.span`
  color: ${Colors.typeRed};
`;

export const ContentContainer = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.p`
  width: 100%;
  margin-bottom: 48px;
  text-align: left;
`;

export const Form = styled.form``;

export const InputSingle = styled.input`
  font-family: 'roboto slab';
  width: calc(200px - 24px);
  height: 36px;
  margin-bottom: 32px;
  background-color: #2e2e2e;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 2px 12px;
`;

export const InputMulti = styled.textarea`
  font-family: 'roboto slab';
  width: calc(100% - 24px);
  height: 108px;
  margin-bottom: 64px;
  background-color: #2e2e2e;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 12px;
`;
