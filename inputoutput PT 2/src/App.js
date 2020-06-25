import React from 'react';
import './App.css';
import Graph from "./graph";
import raw from 'raw.macro'

//Must npm install chart.js and raw.macro



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value1: '', value2: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fileInput = React.createRef()
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
    }

    handleSubmit = event =>  {
        const info = {dataset_name: this.state.value1, dataset_id: this.state.value2}
        const data = [...this.state.data, info]
        this.setState({data:data})
        JSON.stringify(this.state.data)

        event.preventDefault();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                    <input type= "text"
                           name = "value1"
                           value= {this.state.value1}
                           onChange= {this.handleChange}
                           className= "custom_box"
                           placeholder= "Value #1"
                    />

                    <input type= "text"
                           name = "value2"
                           value= {this.state.value2}
                           onChange= {this.handleChange}
                           className= "custom_box"
                           placeholder= "Value #2"
                    />
                    <input type = "file" className= "custom_upload" ref={this.fileInput}/>
                    <input type = "file" className= "custom_upload"/>
                    <input type = "file" className= "custom_upload"/>
                    <input type = "file" className= "custom_upload"/>
                    <input type= "submit"
                       value= "Submit"
                       className= "custom_box"
                    />


            </form>
            </div>
        );
    }
}

export default App;
