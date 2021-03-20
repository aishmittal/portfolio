import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Layout, Typography } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import projects from '../../data/projects';
import { domHtml } from '../../utils/stripTags';

const Projects = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Projects"
        description=""
        path="/Projects"
        keywords={['Aishwarya', 'Mittal', 'Adobe', 'FullStack developer', 'C++', 'Python', 'Computer Vision', 'Deep Learning', 'Javascript', 'ReactJS']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Projects</h1>
        </div>
        <ul>
          {projects.map((project) => (
            <li>
              <Typography.Title level={5}>
                {project.title}
                {project.githubLink && (
                <a href={project.githubLink} target="_blank" label="button" rel="noopener noreferrer">
                  <FontAwesomeIcon className="fa-icon github-icon" icon={faGithub} />
                </a>
                )}
                {project.reportLink && (
                <a href={project.reportLink} target="_blank" label="button" rel="noopener noreferrer">
                  <FontAwesomeIcon className="fa-icon pdf-icon" icon={faFilePdf} />
                </a>
                )}
              </Typography.Title>
              <h5>{project.duration}</h5>
              <p dangerouslySetInnerHTML={domHtml(project.description)} />
              {project.embedVideoURL && (
                <iframe title={project.title} width="730" height="410" src={project.embedVideoURL} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              )}
            </li>
          ))}
        </ul>
        {/* <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
          </Col>
        </Row> */}
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Projects;
