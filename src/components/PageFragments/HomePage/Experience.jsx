import React from 'react';
import { Steps } from 'antd';
import experience from '../../../data/experience';

const { Step } = Steps;

const Experience = () => (
  <>
    <div>
      <h2>My Experience</h2>
      <Steps progressDot current={0} direction="vertical">
        {experience.map((exp) => <Step status="finish" title={exp.title} subTitle={exp.duration} description={exp.description} />)}
      </Steps>
    </div>
  </>

);

export default Experience;
