import style from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Skill from "./Skill/Skill";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"TypeScript"} description={"Lorem ipsum dolor sit amet" +
                        ", in maxime modi nam nulla officiis placeat quam quidem, sed sit ut voluptates"}/>
                    <Skill title={"CSS/HTML"}  description={"Lorem ipsum dolor sit amet" +
                        ", in maxime modi nam nulla officiis placeat quam quidem, sed sit ut voluptates"}/>
                    <Skill title={"React"}  description={"Lorem ipsum dolor sit amet" +
                        ", in maxime modi nam nulla officiis placeat quam quidem, sed sit ut voluptates"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;