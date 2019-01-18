import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import s from './DialogsPage.module.css'

const DialogsItem = (props) => {
  let item = props.item;
  return (
    <div className={s.group_list}>
      <ul>
        <li>
          <NavLink to={'/dialogs/' + item.id}>
            {item.name}
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default DialogsItem;