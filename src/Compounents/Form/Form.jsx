import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import {addUser } from 'Redux/userSlice';

//==========================================================
function Form(){
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const userSelector = useSelector(state => state.items.items);
  const dispatch = useDispatch();

  const formSubmitHandler = (name, number) => {

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if(
      !userSelector.find(
        user =>
          user.name.toLowerCase() === newContact.name.toLowerCase())) {
      dispatch(addUser(newContact)
      );
    } else {
      alert(`${newContact.name} is already in contacts`);
    }
    reset();
  };


  const handleChange = e => {
    const { name, value } = e.target;
    switch (name){
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name=e.currentTarget.elements.name.value
    const number=e.currentTarget.elements.number.value
    formSubmitHandler(name, number);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type='text'
                 name='name'
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
                 onChange={handleChange}
                 value={name}

          />
        </label>
        <label>
          Number
          <input type='tel'
                 name='number'
                 pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
                 title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
                 required
                 onChange={handleChange}
                 value={number}
          />
        </label>
        <button type='submit'>Add contact</button>
      </form>

    </>

  );


}

export default Form;
