import React from 'react';

const Profile = (props) => {
    let config = props.store.state.components.profile;

    return (
        <div>
            <div className='container'>
                <img className='photo' src={config.photo} alt='actress' />
                <div className='info'>
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