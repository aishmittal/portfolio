import React from 'react';
import style from './skill.module.less';

const SkillsTile = (props) => {
  const {
    text, title,
  } = props;
  return (
    <div className={`${style.mrTp26PX}`}>
      <h4>{ title || ''}</h4>
      { text || ''}
    </div>
  );
};

export default SkillsTile;
