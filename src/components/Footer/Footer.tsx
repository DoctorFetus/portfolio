import styleContainer from '../../common/styles/Container.module.css'
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Palkin Mikhail</h2>
                <div className={style.networks}>
                    <div className={style.network}></div>
                    <div className={style.network}></div>
                    <div className={style.network}></div>
                    <div className={style.network}></div>
                </div>
                <div>© 2023 all rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;