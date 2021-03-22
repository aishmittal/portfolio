import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ProjectCard from '../../components/ProjectCard';
import SEO from '../../components/Seo';
import projects from '../../data/projects';

const Projects = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Projects"
        description="I like to learn different aspects of software engineering. I worked on various projects to enhance
        my learning experience. The major technologies that I have worked are Web Develpment, Image Processing, Computer Vision,
         Deep Lernng, Embedded Systems and Game Development."
        path="/Projects"
        keywords={['Aishwarya', 'Mittal', 'Adobe', 'FullStack developer', 'C++', 'Python', 'Computer Vision', 'Deep Learning', 'Javascript', 'ReactJS']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Projects</h1>
        </div>
        <Row gutter={[20, 20]}>
          {projects.map((project) => (
            <Col xs={24} sm={24} md={12} lg={8}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Projects;
