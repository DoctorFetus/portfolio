import React from 'react';
import styleContainer from '../../common/styles/Container.module.css'
import style from './RemoteWork.module.css'

const RemoteWork = () => {
    return (
        <div className={style.remoteWork}>
            <div className={styleContainer.container + " " + style.container}>
                <h2 className={style.title}>I am considering options for remote work</h2>
                <button className={style.hire}>Hire me</button>
            </div>
        </div>
    );
};

export default RemoteWork;