import React from 'react';

//==============================================
import { SpanItem } from './contactsListItem.styled';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../../Redux/userSlice';
import {Button} from '../contacts.styled';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = e => {
    e.preventDefault();
    const deleteContact = e.currentTarget.id;
    dispatch(removeUser((deleteContact)));
  };
  return (
      <li key={id}>
        <SpanItem>{name}</SpanItem>
        <SpanItem>{number}</SpanItem>
        <Button type='button' id={id} onClick={deleteContact} >Delete</Button>
      </li>
  );
};



export default ContactListItem;
