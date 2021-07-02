import React from 'react';
import Landing from './pages/Landing';

import AboutMe from './components/AboutMe';
import ProjectsDone from './components/ProjectsDone';
import ContactMe from './components/ContactMe';

import * as S from './styles';
import Footer from './components/Footer';

function App() {
  return (
    <S.Container>
      <Landing />
      <AboutMe />
      <ProjectsDone />
      <ContactMe />
      <Footer />
    </S.Container>
  );
}

export default App;
