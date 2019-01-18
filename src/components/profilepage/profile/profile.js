import React from 'react';
import s from './profile.module.css';

const Profile = (props) => {
    let config = props.store.getState().components.profile;

    return (
        <div>
            <div className={s.container}>
                <img className={s.photo} src={config.photo} alt='actress' />
                <div className={s.info}>
                    <h3>{config.name}</h3>
                    <p>Date of birth: {config.birthday}</p>
                    <p>City: {config.city}</p>
                    <p>Education: {config.education}</p>
                    <p><a href ='foo' >Web-site: {config.website}</a></p>
                </div>
            </div>

        </div>
    );
}

export default Profile;