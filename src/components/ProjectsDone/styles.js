import styled from 'styled-components';
import { Colors } from '../../utils/pallete';
import Background from '../../assets/background-decorator.svg';

export const SectionContainer = styled.section`
  min-height: 100vh;
  background-color: ${Colors.backgroundBlack};
  background-image: url(${Background});
  background-size: auto 200%;
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

  margin-bottom: 32px;
`;

export const Paragraph = styled.p`
  margin-bottom: 48px;
`;
