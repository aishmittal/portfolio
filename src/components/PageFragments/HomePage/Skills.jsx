import React from 'react';
import SkillTile from '../../SkillTile';

const Skills = () => (
  <div>
    <h2>My Skills</h2>
    <SkillTile
      title="Programming Languages"
      text="C/C++, Python, JavaScript, MATLAB, C#, Bash Script"
    />
    <SkillTile
      title="Web Frameworks"
      text="ReactJS, AngularJS, Gatsby, Flask"
    />
    <SkillTile
      title="Data Science & Machine Learning Libraries"
      text="OpenCV, Tensorflow, NumPy, Pandas, Scikit-Learn, Matplotlib"
    />
    <SkillTile
      title="Software Packages & Tools"
      text="Visual Studio, VS Code, XCode, CMake, Perforce, GitHub, Unity 3D, Adobe Creative Cloud"
    />
    <SkillTile
      title="Operating Systems"
      text="Windows, Mac, Linux"
    />
  </div>
);

export default Skills;
