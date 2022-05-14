
import Form from './Compounents/Form';
import Contacts from './Compounents/Contacts';
import Filter from './Compounents/Filter';
//===========================================
import { AppWrapper, MainHead } from './AppStyle';

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
