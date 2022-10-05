import { Component } from 'react';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { ContactContainer } from './App.styled';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

const LS_KEY = 'phonebook_contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    inProgress: false,
  };

  // ++++++
  componentDidMount() {
    console.log('Create');

    const contacts = localStorage.getItem(LS_KEY);
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }
  // \\\\\\\\\\
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contact) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
    console.log('Upd')
  }
  // -----------
  componentWillUnmount() {
    // console.log('Delete');
  }

  // handl......

  addToContact = values => {
    const { contacts } = this.state;
    const { name, number } = values;

    if (contacts.some(contact => contact.name === name)) {
      return Notiflix.Notify.info(`${name} is already in contacts!`);
    }

    this.setState(() => ({
      contacts: [...contacts, { name: name, id: nanoid(), number: number }],
    }));
  };

  deleteFromContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filtring = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase().trim() });
  };

  render() {
    const { contacts } = this.state;
    const filtringContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

    return (
      <ContactContainer>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addToContact}></ContactForm>

        <h2>Contacts</h2>
        <Filter filtring={this.filtring} />
        <ContactList
          filtringContacts={filtringContacts}
          onDelete={this.deleteFromContact}
        ></ContactList>
      </ContactContainer>
    );
  }
}
