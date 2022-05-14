import React from 'react';

//==============================================
import { SpanItem } from './ContactsListItemStyle';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../Redux/userSlice';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = e => {
    e.preventDefault();
    const deleteContact = e.currentTarget.id;
    dispatch(removeUser((deleteContact)));
  };
  return (
    <>
      <li key={id}>
        <SpanItem>{name}</SpanItem>
        <SpanItem>{number}</SpanItem>
        <button type='button' id={id} onClick={deleteContact} >Delete</button>
      </li>

    </>
  );
};



export default ContactListItem;
