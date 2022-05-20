import React, { useState } from 'react';


const Contact = () => {







  const [name, setName] = useState('')

  const [email, setEmail] = useState('')

  const [message, setMessage] = useState('')

  function handleChangeName(event) {

    setName(event.target.value)
  }

  function handleFormSubmit() {
    setName("")
    setEmail('')
    setMessage('')
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value)

  }

  function handleMessages(event) {
    setMessage(event.target.value)
  }




  return (
    <section className="card1" >
      <div id="contactme" className="card" >
        <div className="card-img-top" src="./Images/headshot2.jpeg" alt="Card image cap">  </div>
        <div className="card-body">
          <h3 className="card-title">Contact Me</h3>
        </div>
        <img style={{ width: "300px" }} src={require('../images/headshot2.jpeg')} alt="Card image cap"></img>

        <form className="card id">
          <div className="col card-body">
            <input onChange={handleChangeName} value={name} type="text" className="form-control " placeholder="Name"></input>
          </div>
          <div className="form-group card-body">
            <label for="exampleFormControlInput1">Email Address</label>
            <input
              onChange={handleChangeEmail}
              value={email}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            ></input>
          </div>
          <div className="form-group card-body">
            <label for="exampleFormControlTextarea1">Leave a Message</label>
            <textarea
              onChange={handleMessages}
              value={message}

              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Message"
              rows="3"
            ></textarea>
          </div>
          <button onClick={handleFormSubmit} style={{ display: "flex", justifyContent: "center", alignItems: "center" }} class="btn btn-primary">
            Submit
          </button>
        </form>



      </div>

    </section>

  )

}


export default Contact;