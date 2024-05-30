import React from 'react'
import ContactForm from '../components/ContactForm'
import LinkAvatars from '../components/LinkAvatars'

const ContactPage = () => {
  return (
    <section className='contactPage'>
        <h2 className='sectionHead'>Contact</h2>
        <ContactForm />
        <LinkAvatars />
    </section>
  )
}

export default ContactPage