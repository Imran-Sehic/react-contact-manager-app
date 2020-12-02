import {React, useState} from 'react'
import ContactForm from './components/form/ContactForm'
import ContactList from './components/list/ContactList'

export default function App(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <ContactForm handleSubmit={addPerson} />
      <ContactList data={contacts}/>
    </div>
  );
}


