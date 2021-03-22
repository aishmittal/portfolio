import React from 'react';
import { Typography, Timeline } from 'antd';
import { domHtml } from '../../../utils/stripTags';
import education from '../../../data/education';

// const { Step } = Steps;

const Education = () => (
  <>
    <Timeline>
      <h2>My Education</h2>
      {education.map((edu) => (
        <Timeline.Item color="green">
          <Typography.Title level={5}>
            {edu.title}
            <span className="yearText">
              {edu.year}
            </span>
          </Typography.Title>
          <span dangerouslySetInnerHTML={domHtml(edu.description)} />
        </Timeline.Item>
      ))}
    </Timeline>
  </>

);

export default Education;
