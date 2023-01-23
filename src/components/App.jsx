import React, { Component } from 'react';
import css from './App.module.css';
import Form from './form/Form';
import Contacts from './contacts/Contacts';
import Filter from './filter/Filter';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onDelete = id => {
    const contacts = [...this.state.contacts];
    const personToFind = id;
    const ourPerson = contacts.findIndex(({ id }) => id === personToFind);
    contacts.splice(ourPerson, 1);
    this.setState({
      contacts: contacts,
    });
  };
  submitCathcer = ({ name, number }) => {
    const contacts = [...this.state.contacts];
    const nameToAdd = name;
    const person = {
      name: `${name}`,
      id: `${nanoid()}`,
      number: `${number}`,
    };
    const addCheck = contacts.find(({ name }) => name.includes(nameToAdd));
    if (!addCheck) {
      contacts.push(person);
      this.setState({
        contacts: contacts,
      });
    } else {
      alert(`${nameToAdd} is already in contacts`);
    }
  };
  filteredNames() {
    const contacts = [...this.state.contacts];
    const filter = this.state.filter;
    const filtered = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtered;
  }
  onFilter = e => {
    const nameIs = e.target.value;
    this.setState({ filter: nameIs });
  };

  render() {
    return (
      <div className={css.App}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.submitCathcer} />

        <h2>Contacts</h2>
        <Filter onFilter={this.onFilter} />
        <Contacts contacts={this.filteredNames()} onDelete={this.onDelete} />
      </div>
    );
  }
}
export default App;
