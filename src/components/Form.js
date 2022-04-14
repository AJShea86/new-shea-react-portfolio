import React from "react";


const Form = ()=>{

    return (

        <form className="card id">
    <div className="col card-body">
      <input type="text" className="form-control " placeholder="Name"></input>
    </div>
  <div className="form-group card-body">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
  </div>
  <div className="form-group card-body">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary subButt">Submit</button>
</form>
    )
}



export default Form;