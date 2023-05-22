import React from 'react';
import style from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.wrapper}>
            <div className={style.image}>
                <a className={style.watchMore}>Watch</a>
            </div>
            <div className={style.text}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.projectDescr}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;