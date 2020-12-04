import {React, useState} from 'react'
import ContactForm from './components/form/ContactForm'
import ContactList from './components/list/ContactList'

export default function App(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  function removePerson(index) {
    setContacts([...contacts.filter(contact => contacts.indexOf(contact) !== index)]);
  }

  return (
    <div>
      <ContactForm handleSubmit={addPerson} />
      <ContactList data={contacts} removeContact={removePerson}/>
    </div>
  );
}


