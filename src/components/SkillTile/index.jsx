import React from 'react';
import style from './skill.module.less';

const SkillsTile = (props) => {
  const {
    img, text,
  } = props;
  return (
    <div className={style.skillTile}>
      <div
        className={style.skillBlock}
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <div className={`textCenter ${style.mrTp26PX}`}>
        <h4>{ text || ''}</h4>
      </div>
    </div>
  );
};

export default SkillsTile;
