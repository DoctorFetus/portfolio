import styleContainer from '../../common/styles/Container.module.css'
import style from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>Contacts</h2>
                <form action="" className={style.formContainer}>
                    <input/>
                    <input/>
                    <textarea></textarea>
                </form>
                <button className={style.submitBtn}>Submit</button>
            </div>
        </div>
    );
};

export default Contacts;