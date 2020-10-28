import React, { Component } from 'react';
import ContactList from './contactList/contactList'
import SearchBox from './searchBox/searchBox'
import CreateContact from './createContact/createContact'
import * as ContactsAPI from './utils/ContactsAPI'
import { Route } from 'react-router-dom'
class App extends Component {

  state = {
    contacts: [],
    query: '',
  }

  handleRemove = contactToRemove => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactToRemove.id)
      }
    })
    ContactsAPI.remove(contactToRemove)
  }

  updateQuery = e => {
    this.setState({ query: e.target.value })
  }

  showAll = () => {
    this.setState({ query: '' })
  }

  createContact = contact => {
    ContactsAPI.create(contact)
      .then(contact => {
        this.setState(prevState => ({ contacts: [...prevState.contacts, contact] }))
      })
  }

  componentDidMount() {
    ContactsAPI.getAll().then(contacts => this.setState(prevState => ({ contacts: contacts })))
  }

  render() {
    return (

      <div>
        <Route exact path='/' render={() => (
          <div>
            <SearchBox updateQuery={this.updateQuery} query={this.state.query} />
            <ContactList contacts={this.state.contacts}
              handleRemove={this.handleRemove} query={this.state.query}
              showAll={this.showAll}
            />
          </div>
        )} />

        <Route path='/create' render = { ({history}) => (<CreateContact onCreateContact={ contact => {
          this.createContact(contact)
          history.push('/')
        }}/>)} />
      </div>
    )
  }
}

export default App
