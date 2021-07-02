import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { Colors } from '../../utils/pallete';

import Background from '../../assets/background-code.png';

export const SectionContainer = styled.section`
  background-image: url(${Background});
  background-size: auto 100%;
  background-position: center;

  color: ${Colors.typeGray};

  padding: 0 10vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  box-shadow: inset 0px -50px 33px -10px rgba(15, 15, 15);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${`${Colors.backgroundBlack}f1`};
    opacity: 1;
    z-index: 2;
  }
`;

export const ContentContainer = styled.div`
  z-index: 2;
`;

export const PhotoContainer = styled.div`
  width: 100%;
  min-height: calc(40vh);

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Photo = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: calc(30vh);

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 25vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Introduction = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin: 12px 0;
`;

export const Description = styled.p`
  font-size: 24px;
  font-size: 6vmin;
  max-width: 520px;
  font-weight: bold;
  margin: 12px 0;
`;

export const Title = styled.p`
  font-size: 9vmin;
  font-weight: bold;
  color: ${Colors.typeRed};
  line-height: 36px;
  margin: 0;
`;

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

  &:active {
    background-color: ${`${Colors.typeRed}90`};
  }
`;

export const ChevronDown = styled(FaChevronDown)`
  color: ${Colors.typeRed};
  margin: 36px 0 12px 0;
  animation: move 1s ease-in-out infinite;

  @keyframes move {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(6px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
