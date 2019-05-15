import React from 'react'

function NewCity(props){
  return (
    <div>
     <div className="splash">
       <img className="image" src="https://s.newsweek.com/sites/www.newsweek.com/files/styles/full/public/2019/04/04/universe-big-bang.jpg" alt="splash"/>
      </div>
      <div className="centered panel">
        <h1 className="form-header">Add a city</h1>
        <form className="form">
          <input placeholder="Name" /><br/>
          <input placeholder="Series" /><br/>
          <input placeholder="Image" /><br/>
          <input id="city-create-button" type="submit"/>
        </form>
      </div>
    </div>
  )
}

export default NewCity