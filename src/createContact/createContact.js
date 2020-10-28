import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from '../ImageInput'
import serialize from 'form-serialize'

export default class CreateContact extends Component {

  handleSubmit = e => {
    e.preventDefault();
    const values = serialize(e.target, { hash: true })
    console.log(values)
    this.props.onCreateContact(values)
  }

  render() {
    return (
      <div>
        <Link to='/' className='close-create-contact'>
          Close
        </Link>
        <form onSubmit={this.handleSubmit} className='create-contact-form'>
          <ImageInput className='create-contact-avatar-input' name='avatarURL' maxHeight={64} />
          <div className='create-contact-details'>
            <input type='text' name='name' placeholder='name' />
            <input type='text' name='handle' placeholder='handle' />
            <button>ADD Contact</button>
          </div>
        </form>
      </div>
    )
  }
}
