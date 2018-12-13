import React, { Component } from 'react';

const Profile = () => {
            return (
        <div>
            <div className='main-photo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Swansea_Wikivoyage_banner_2.jpg/1400px-Swansea_Wikivoyage_banner_2.jpg' alt='photo' />
            </div>

            <div className='container'>
                <img className='photo' src="https://i.pinimg.com/236x/58/d6/cd/58d6cd60d27862bd6d78757251e34330--music-shakira-expecting-baby.jpg" alt='actress' />
                <div className='info'>
                    <h3>Shakira</h3>
                    <p>Date of birth: the second of February, 1977</p>
                    <p>City: Columbia</p>
                    <p>Education: ESU 04</p>
                    <p><a href='#'>Web-site: http://www.shakira.com/</a></p>
                </div>
            </div>

            <div className='notes'>
                <span><h3>My notes</h3></span>
                <input type='text' className='field-input' name='notes' placeholder='What is new...'></input>
                <button className='submit-btn'>Submit</button>
            </div>

        </div>
    );

}




export default Profile;