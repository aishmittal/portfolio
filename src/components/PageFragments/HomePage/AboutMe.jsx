import React from 'react';
// import { Row, Col } from 'antd';
// import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import aboutText from '../../../data/aboutText';

import SEO from '../../Seo';

const AboutMe = () => {
  const description = `${stripTags(aboutText.paraOne)} ${stripTags(aboutText.paraTwo)} ${stripTags(aboutText.paraThree)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Aishwarya', 'Mittal', 'Adobe', 'FullStack developer', 'C++', 'Python', 'Computer Vision', 'Deep Learning', 'Javascript', 'ReactJS']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p className="bigFirstLetter" dangerouslySetInnerHTML={domHtml(aboutText.paraOne)} />
        <p dangerouslySetInnerHTML={domHtml(aboutText.paraTwo)} />
        <p dangerouslySetInnerHTML={domHtml(aboutText.paraThree)} />
      </div>
    </>
  );
};
export default AboutMe;
