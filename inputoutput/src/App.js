import React from 'react';
import './App.css';
import Graph from "./graph";
import raw from 'raw.macro'

//Must npm install chart.js and raw.macro



class App extends React.Component{
constructor() {
    super();
    this.state ={in: true,
    out: false}
    this.handleSubmit= this.handleSubmit.bind(this)

}


    handleSubmit(event) {

    return(
        <h1>
            This is my output
        </h1>
    )

}

  render() {
    const markdown = raw('./data.txt')
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

            <Graph/>
            <h1>{markdown}</h1>
        </div>
    )
  }
}

export default App;
