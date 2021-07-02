import styled, { css } from 'styled-components';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Colors } from '../../utils/pallete';

import { ReactComponent as SvgWave } from '../../assets/wave.svg';

const Social = css`
  width: 42px;
  height: 42px;
  fill: ${Colors.typeGray};
`;

export const Footer = styled.footer`
  height: fit-content;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  overflow: hidden;

  position: relative;

  background-color: ${Colors.backgroundBlack};
`;

export const Wave = styled(SvgWave)`
  min-width: 700px;
  width: 100vw;
  height: 300px;
  fill: ${Colors.typeRed};
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const SocialIconContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 12px;
`;

export const Facebook = styled(FaFacebook)`
  ${Social}
`;

export const LinkedIn = styled(FaLinkedin)`
  ${Social}
`;

export const Github = styled(FaGithub)`
  ${Social}
`;

export const Paragraph = styled.p`
  width: 150px;
  text-align: center;
  color: ${Colors.typeGray};
  margin-bottom: 36px;
`;
