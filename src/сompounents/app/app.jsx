
import Form from '../form';
import Contacts from '../Contacts';
import Filter from '../filter';

import { AppWrapper, MainHead } from './app.styled';

const App = () => {

  return (
    <AppWrapper>
      <MainHead>Phonebook</MainHead>
      <Form />
      <h2>Contacts</h2>
      <Contacts />
      <Filter/>
    </AppWrapper>
  );


};

export default App;
