import React from 'react';
import './App.css';



class App extends React.Component{
constructor() {
    super();
    this.state ={in: true,
    out: false}
    this.handleSubmit= this.handleSubmit.bind(this)
}


handleSubmit(event) {
    event.preventDefault()
    return(
        <h1>
            This is my output
        </h1>
    )
}
  render() {
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <textarea className="custom_box" placeholder="Textbox #1"/>
                <textarea className="custom_box" placeholder="Textbox #2"/>
                <select>
                    <option>Choose</option>
                    <option>#1</option>
                    <option>#2</option>
                    <option>#3</option>
                </select>
                <button>Submit</button>
            </form>

        </div>
    )
  }
}

export default App;
