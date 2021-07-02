/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import ProjectCard from '../ProjectCard';

import * as S from './styles';

import ImgProject1 from '../../assets/projects/residencial-athenas.png';
import ImgProject2 from '../../assets/projects/todo-list-react.png';
import ImgProject3 from '../../assets/projects/easypark.png';
import Button from '../Button';

const ProjectsDone = () => {
  const [showMore, setShowMore] = useState(false);

  const [projects, setProjects] = useState([
    {
      imgSrc: ImgProject1,
      title: 'residencial-athenas',
      description:
        'A mobile app made as final project for the Mobile Development class. It allows residents of a condo to book it’s amenities.',
      tags: ['reactnative', 'redux', 'firebase'],
      github: 'https://www.github.com/lucasalme1da/residencial-athenas',
      externalLink: '',
    },
    {
      imgSrc: ImgProject2,
      title: 'todo-list-react',
      description:
        'A clean, colorful and minimalist card-styled todo-list I built to study and learn more about React.',
      tags: ['reactjs', 'nodejs', 'mongodb'],
      github: 'https://github.com/lucasalme1da/to-do-list-react',
      externalLink: '',
    },
    {
      imgSrc: ImgProject3,
      title: 'easypark',
      description:
        'A software in C that finds the best parking lot for the user based on its destiny and a simulation made on Electron using three.js to show how it works.',
      tags: ['c', 'nodejs', 'electron'],
      github: 'https://www.github.com/lucasalme1da/residencial-athenas',
      externalLink: '',
    },
    {
      imgSrc: ImgProject1,
      title: 'residencial-athenas',
      description:
        'A mobile app made as final project for the Mobile Development class. It allows residents of a condo to book it’s amenities.',
      tags: ['reactnative', 'redux', 'firebase'],
      github: 'https://www.github.com/lucasalme1da/residencial-athenas',
      externalLink: '',
    },
    {
      imgSrc: ImgProject2,
      title: 'todo-list-react',
      description:
        'A clean, colorful and minimalist card-styled todo-list I built to study and learn more about React.',
      tags: ['reactjs', 'nodejs', 'mongodb'],
      github: 'https://github.com/lucasalme1da/to-do-list-react',
      externalLink: '',
    },
    {
      imgSrc: ImgProject3,
      title: 'easypark',
      description:
        'A software in C that finds the best parking lot for the user based on its destiny and a simulation made on Electron using three.js to show how it works.',
      tags: ['c', 'nodejs', 'electron'],
      github: 'https://www.github.com/lucasalme1da/residencial-athenas',
      externalLink: '',
    },
  ]);
  return (
    <S.SectionContainer>
      <S.Heading>
        projects<S.TextColor>.done()</S.TextColor>
      </S.Heading>
      <S.ContentContainer>
        <S.Paragraph>
          Here you can see a little bit about the projects I did. Some of them
          are personal, others were made with friends during the degree.
        </S.Paragraph>
        {projects
          .slice(0, showMore ? projects.length : 3)
          .map((project, idx) => (
            <ProjectCard key={`${idx * 10}${project.title}`} data={project} />
          ))}
        <Button
          value={showMore ? 'Show less' : 'Show more'}
          onClick={() => setShowMore(!showMore)}
        />
      </S.ContentContainer>
    </S.SectionContainer>
  );
};

export default ProjectsDone;
