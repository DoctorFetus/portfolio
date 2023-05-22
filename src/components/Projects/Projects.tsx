import React from 'react';
import styleContainer from '../../common/styles/Container.module.css'
import style from './Projects.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return <div className={style.projectsWrapper}>
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
            <h2 className={style.title}>Projects</h2>
            <div className={style.projects}>
                <Project title={"Social Network"}
                         description={"Lorem ipsum dolor sit amet, consectetur adipisicingelit. Earum mollitia sed sit? Alias asperiores consequatur cumque doloremque eum"}/>
                <Project title={"Todolist"}
                         description={"Lorem ipsum dolor sit amet, consectetur adipisicingelit. Earum mollitia sed sit? Alias asperiores consequatur cumque doloremque eum"}/>
            </div>
        </div>
    </div>
};

export default Projects;