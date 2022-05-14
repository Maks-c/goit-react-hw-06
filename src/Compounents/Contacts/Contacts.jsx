import React from 'react';
import ContactListItem from '../ContactListItem';

import { List } from './ContactsStyle';
import { useSelector } from 'react-redux';


const Contacts = () => {
  const contacts = useSelector(state => state.items.items);
  const filters = useSelector(state => state.items.filter);
  const getVisibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );



  return (
    <List>
      {getVisibleContacts.map((contacts) => (
        <ContactListItem key={contacts.id} id={contacts.id}  name={contacts.name} number={contacts.number} />
      ))}
    </List>);
};


export default Contacts;
