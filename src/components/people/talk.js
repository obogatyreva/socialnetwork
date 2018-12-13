import React, { Component } from 'react';

const Dialogs = () => {
    return (
        <div>
            <span><h3>Dialogs</h3></span>
            <ul className='items'>
                <li>Andrew</li>
                <li>Dmitry</li>
                <li>Sasha</li>
                <li>Sveta</li>
                <li>Valera</li>
                <li>Victor</li>
                <li>This is a list item</li>
                <li>Another list-item</li>
                <li>This is a list item</li>
                <li>Yup, another list item</li>
            </ul>
            <div className='people_connect'>
                <div>
                    <img className='avka' src='http://www.avatar-mix.ru/avatars_64x64/440.jpg' alt='avatar' />
                </div>

                <div>
                    Dmitry
            </div>
                <div>
                    <img className='avka' src='http://www.avatar-mix.ru/avatars_64x64/440.jpg' alt='avatar' />
                </div>
                <div>
                    Me
            </div>
                <div>
                    <img className='avka' src='http://www.avatar-mix.ru/avatars_64x64/440.jpg' alt='avatar' />
                </div>

                <div>
                    Me
            </div>
                <div>
                    <img className='avka' src='http://www.avatar-mix.ru/avatars_64x64/440.jpg' alt='avatar' />
                </div>

                <div>
                    Dmitry
                </div>

                <div className='chat'>
                    <textarea name='text'>Hello my friend</textarea>
                    <textarea name='text'>Hello my friend</textarea>
                    <textarea name='text'>Hello my friend</textarea>
                    <textarea name='text'>Hello my friend</textarea>
                    <textarea name='text'>Hello my friend</textarea>
                    <textarea name='text'>Hello my friend</textarea>
                    <textarea name='text'>Hello my friend</textarea>
                    <textarea name='text'>Hello my friend</textarea>

                </div>
            </div>
        </div>
    );

}


export default Dialogs;