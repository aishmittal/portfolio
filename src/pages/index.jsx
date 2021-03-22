import React from 'react';
import { Layout, Divider } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Skills from '../components/PageFragments/HomePage/Skills';
import Experience from '../components/PageFragments/HomePage/Experience';
import Education from '../components/PageFragments/HomePage/Education';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <Divider />
          <Skills />
          <Divider />
          <Experience />
          <Divider />
          <Education />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
