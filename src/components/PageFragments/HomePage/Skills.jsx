import React from 'react';
import { Row, Col } from 'antd';
import SkillTile from '../../SkillTile';

const Skills = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12} lg={8}>
        <SkillTile
          img="Deep-Learning.jpg"
          text="CNNs, GANs, RNNs"
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <SkillTile
          img="Web-Development.jpg"
          text="HTML/CSS, JavaScript, ReactJS, AngularJS"
        />
      </Col>
    </Row>
  </div>
);

export default Skills;
