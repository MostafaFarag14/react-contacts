import React from 'react'
import PropTypes from 'prop-types'
import ContactListItem from '../contactListItem/contactListItem'
import ShowingList from '../showingList/showingList'

const ContactList = ({ contacts, handleRemove, query, showAll }) => {
  const filteredContacts = query === '' ? contacts
    : contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase()))
  return (
    <div>
      {contacts.length !== filteredContacts.length && <ShowingList filteredCount={filteredContacts.length}
        totalCount={contacts.length}
        showAll={showAll}
      />}
      <ul className='contact-list'>
        {
          filteredContacts.map(contact =>
            <ContactListItem contact={contact} key={contact.id} handleRemove={handleRemove} />
          )
        }
      </ul>
    </div>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired
}
export default ContactList