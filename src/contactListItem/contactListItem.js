import React from 'react'

const ContactListItem = ({ contact, handleRemove }) => {

  return (
    <li className='contact-list-item'>
      <div className='contact-avatar' style={{ backgroundImage: `url(${contact.avatarURL})` }} />
      <div className='contact-details'>
        <p>{contact.name}</p>
        <p>{contact.handle}</p>
      </div>
      <button className='contact-remove' onClick={ () => handleRemove(contact)}>
        Remove
      </button>
    </li>
  )
}

export default ContactListItem;