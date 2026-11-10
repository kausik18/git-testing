import { useState, type FormEvent } from 'react'
import Seo from '../components/Seo.tsx'
import { business, contactContent, pages } from '../data.ts'

export default function Contact() {
  const [sent, setSent] = useState(false)
  // Non-functional demo form: nothing is submitted anywhere.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <Seo {...pages.contact} path="/contact" />
      <h1>Contact PixelForge</h1>
      <p className="lead">{contactContent.intro}</p>
      <div className="two-col">
        <form className="contact-form" onSubmit={onSubmit}>
          <h2>Tell us about your project</h2>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" autoComplete="organization" />
          <label htmlFor="budget">Approximate budget</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="" disabled>
              Choose a range
            </option>
            <option>$15,000 - $30,000</option>
            <option>$30,000 - $60,000</option>
            <option>More than $60,000</option>
          </select>
          <label htmlFor="message">Project details</label>
          <textarea id="message" name="message" rows={6} required />
          <button type="submit" className="button">
            Send enquiry
          </button>
          {sent && (
            <p role="status" className="notice">
              Thanks! This is a demo form, so nothing was sent.
            </p>
          )}
        </form>
        <div>
          <h2>Studio details</h2>
          <address>
            {business.name}
            <br />
            {business.street}
            <br />
            {business.city}, {business.region} {business.postalCode}
          </address>
          <p>
            Email: <a href={`mailto:${business.email}`}>{business.email}</a>
            <br />
            Phone: <a href={`tel:${business.phone}`}>{business.phone}</a>
          </p>
          <p>Office hours: {contactContent.hours}</p>
          <h3>Visiting the studio</h3>
          <p>{contactContent.visitText}</p>
          <h3>{contactContent.expectHeading}</h3>
          <p>{contactContent.expect}</p>
        </div>
      </div>
    </>
  )
}
