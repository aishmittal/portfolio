import React from 'react';
import { Link } from 'gatsby';
import { Tag } from 'antd';
import style from './projectCard.module.less';

const ProjectCard = (props) => {
  const { project } = props;

  return (
    <div className={style.postCard}>
      <Link to={project.link} target="_blank">
        <div
          className={style.postCardImg}
          style={{
            backgroundImage: `url(${project.cover ? project.cover : ''})`,
          }}
        />
        <div className={style.mrTp20}>
          <h3>{project ? project.title : ''}</h3>
          {/* <p>
            <span className={style.dateHolder}>{project ? project.duration : ''}</span>
          </p> */}
          {project.tags.map((tag) => (<Tag color="gold">{tag}</Tag>))}
          <p>{project ? project.summary : ''}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
