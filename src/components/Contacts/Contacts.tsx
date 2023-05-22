import React from 'react';
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
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
                <button className={style.submitBtn}>Submit</button>
            </div>
        </div>
    );
};

export default Contacts;