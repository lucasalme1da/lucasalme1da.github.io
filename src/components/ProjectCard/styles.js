import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Colors } from '../../utils/pallete';

export const CardContainer = styled.div`
  max-width: 320px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 48px;
`;

export const Image = styled.img`
  width: 256px;
  height: 152px;
  object-fit: cover;
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: normal;
`;

export const DescriptionContainer = styled.div`
  width: calc(100% - 48px);
  height: fit-content;
  background-color: ${Colors.typeRed};
  padding: 0 12px;
`;

export const Description = styled.p`
  font-size: 12px;
  text-align: center;
`;

export const TagsContainer = styled.div`
  width: 100%;
  max-width: 320px;
  text-align: center;
`;

export const Tags = styled.p`
  font-size: 12px;
`;

export const Github = styled(FaGithub)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const ExternalLink = styled(FaExternalLinkAlt)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
