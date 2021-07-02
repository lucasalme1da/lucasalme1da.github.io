import styled from 'styled-components';
import { VscFilePdf } from 'react-icons/vsc';
import { Colors } from '../../utils/pallete';
import Background from '../../assets/background-decorator.svg';

export const SectionContainer = styled.section`
  min-height: 80vh;
  background-color: ${Colors.backgroundBlack};
  background-image: url(${Background});
  background-size: auto 300%;
  background-position: 100px 130px;
  background-clip: border-box;
  color: ${Colors.typeGray};

  padding: 0 10vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Heading = styled.h1`
  width: 100%;
  font-size: 11vmin;
  color: ${Colors.typeGray};
  text-align: left;
  margin: 0 0 32px 0;
`;

export const TextColor = styled.span`
  color: ${Colors.typeRed};
`;

export const ContentContainer = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 32px;
`;

export const Paragraph = styled.p``;

export const PDFIcon = styled(VscFilePdf)`
  width: 18px;
  fill: ${Colors.typeGray};
  stroke: 2px;
  padding-left: 8px;
  stroke-width: 0.5;
`;
