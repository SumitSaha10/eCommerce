import React, { useState } from "react"
import './Contact.css'
export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`http://localhost:6000/api/senddata/data`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',

      },
      body: JSON.stringify({ name: name, email: email, password: message, message: message })
    });
    const json = await response.json()
    if (json.success) {
      alert("Your Data has been Send")
      setName("")
      setEmail("")
      setMessage("")
    }
    else {
      alert("Failed to send your data")
    }


  }
  return (
    <div className="contact">
      <p id="heading">Contact Us</p>
      <form id="form" onSubmit={handleSubmit}>
        <div className="row">
          <label className="label">Name</label>
          <input type="text" placeholder="Your Name" value={name} onChange={(event) => {
            setName(event.target.value)
          }} />
        </div>
        <div className="row">
          <label className="label">Email</label>
          <input type="email" placeholder="example@gmail.com" value={email} onChange={(event) => {
            setEmail(event.target.value)
          }} />
        </div>
        <div className="row">
          <label className="label">Message</label>
          <textarea placeholder="Your Message" value={message} onChange={(event) => {
            setMessage(event.target.value)
          }} />
        </div>
        <div className="row">
          <button id="btn" type="submit" disabled={name.length < 3 && email.length < 5 && message.length < 5}>Submit</button>
        </div>
      </form>
    </div>
  )
}
