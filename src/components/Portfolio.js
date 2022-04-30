import React from 'react';


const Portfolio = ()=>{
    return(
        <section className="card" id="portfolio" >
        <h3  className="card-title">Portfolio</h3>
        <div >
        <div className="card" >
            <img src={require('../images/Fetch-screenshot.png')} alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Fetch!</h5>
              <p className="card-text">Make new puppy pals with Fetch. Search through profiles to make matches with other local users.</p>
            </div>
            <div className="card-body">
              <a type="button" className="btn btn-outline-dark card-link" href="https://github.com/AJShea86/Project-3-DU" >View the Repo</a>
              <a type="button" className="btn btn-outline-dark card-link" href="https://fetchdu.herokuapp.com/" >Launch</a>
            </div>
          </div>

          <div className="card" >
            <img src={require('../images/weather-app-screenshot.png')} alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">Search the weather by city with this app that uses the Open Weather API.</p>
            </div>
            <div className="card-body">
              <a type="button" className="btn btn-outline-dark card-link" href="https://github.com/AJShea86/shea-weatherApp" >View the Repo</a>
              <a type="button" className="btn btn-outline-dark card-link" href="https://ajshea86.github.io/shea-weatherApp/" >Launch</a>
            </div>
          </div>
          <div className="card" >
            {/* <img className="card-img-top" src="./Images/new-dayplanner-screenshot.png" alt="Card image cap"> */}
            <img src={require('../images/new-dayplanner-screenshot.png')} alt="Card image cap"></img>

            <div className="card-body">
              <h5 className="card-title">Day Planner</h5>
              <p className="card-text">Easily create and view tasks with this simple day planner application.</p>
            </div>
            <div className="card-body">
              <a type="button" className="btn btn-outline-dark card-link" href="https://github.com/AJShea86/shea-dayPlanner" >View the Repo</a>
              <a type="button" className="btn btn-outline-dark card-link" href="https://ajshea86.github.io/shea-dayPlanner/" >Launch</a>
            </div>
          </div>
          <div className="card" >
            {/* <img className="card-img-top" src="./Images/stumble-screenshot.png" alt="Card image cap"> */}
            <img src={require('../images/stumble-screenshot.png')} alt="Card image cap"></img>

            <div className="card-body">
              <h5 className="card-title">Stumble Upon the Force!</h5>
              <p className="card-text">Generate random Star Wars trivia facts and movie quotes with this application using SWAPI and the Star Wars Qoutes API.</p>
            </div>
            <div className="card-body">
              <a type="button" className="btn btn-outline-dark card-link" href="https://github.com/Par92/group-6" >View the Repo</a>
              <a type="button" className="btn btn-outline-dark card-link" href="https://par92.github.io/group-6/" >Launch</a>
            </div>
          </div>
          <div className="card" >
            {/* <img className="card-img-top" src="./Images/CRM-unitID.png" alt="Card image cap"> */}
            <img src={require('../images/CRM-unitID.png')} alt="Card image cap"></img>

            <div className="card-body">
              <h5 className="card-title">Storage Customer Relations Manager</h5>
              <p className="card-text">This is a customer relations manager for a storage unit company designed to track customers, units, and employees.</p>
            </div>
            <div className="card-body">
              <a type="button" className="btn btn-outline-dark card-link" href="https://github.com/Capricious150/Storage-Company-CRM" >View the Repo</a>
              <a type="button" className="btn btn-outline-dark card-link" href="https://obscure-fortress-36199.herokuapp.com/" >Launch</a>
            </div>
          </div>
          <div className="card" >
            {/* <img className="card-img-top" src="./Images/note-taker-screenshot.png" alt="Card image cap"> */}
            <img src={require('../images/note-taker-screenshot.png')} alt="Card image cap"></img>

            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">Create and save notes easily with this note taker application that uses node.js and express.js</p>
            </div>
            <div className="card-body">
              <a type="button" className="btn btn-outline-dark card-link" href="https://github.com/AJShea86/shea-note-taker" >View the Repo</a>
              <a type="button" className="btn btn-outline-dark card-link" href="https://ajshea-note-taker.herokuapp.com/" >Launch</a>
            </div>
          </div>
          <div className="card" >
            {/* <img className="card-img-top" src="./Images/README-screenshot.png" alt="Card image cap"> */}
            <img src={require('../images/README-screenshot.png')} alt="Card image cap"></img>

            <div className="card-body">
              <h5 className="card-title">FeedME a ReadME</h5>
              <p className="card-text">Generate a readME file using this command line application created with the Inquirer npm.</p>
            </div>
            <div className="card-body">
              <a type="button" className="btn btn-outline-dark card-link" href="https://github.com/AJShea86/shea-feedme-a-readme" >View the Repo</a>
            </div>
          </div>
        </div>
      </section>    


    )
}


export default Portfolio;