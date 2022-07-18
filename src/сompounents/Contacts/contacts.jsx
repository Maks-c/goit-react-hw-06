import React from 'react';
import { useSelector } from 'react-redux';
import {getVisibleContacts} from '../../Redux/selectors';

import ContactListItem from './contactListItem';
import { List } from './contacts.styled';

const Contacts = () => {
  const visibleContacts=useSelector(getVisibleContacts)
  // const contacts = useSelector(state => state.items.items);
  // const filters = useSelector(state => state.items.filter);
  // const getVisibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filters.toLowerCase())
  // );



  return (
    <List>
      {visibleContacts.map((contacts) => (
        <ContactListItem
          key={contacts.id}
          id={contacts.id}
          name={contacts.name}
          number={contacts.number} />
      ))}
    </List>);
};


export default Contacts;
