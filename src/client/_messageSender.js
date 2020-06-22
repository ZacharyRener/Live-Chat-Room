import React, { Component } from 'react';
const axios = require('axios')

export default class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
    this.handleForm = this.handleForm.bind(this);
  }

  componentDidMount() {

    this.setState({name: "Zach"})
    this.setState({ live: false })
    this.setState({ endpoint: this.state.live ? '/message' : 'http://localhost/message' })
    this.setState({ getEndpoint: this.state.live ? '/messages' : 'http://localhost/messages' })

    let send = document.getElementById("send");
    send.addEventListener('click', this.handleForm);

    const node = document.getElementById("message");
    node.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            // Do work
            send.click()
        }
    });

  }

  handleFocus(event) {

    

  }

  handleForm(event) {

    event.preventDefault(); 

    let msg = document.querySelector("#message").value
    let _name = this.state.name;

    let userResponse = '';

    axios.post(this.state.endpoint, {
        message: msg,
        name: _name
    })
    .then( response => {
        console.log(response);
        userResponse = response.data;
        this.setState({
          posts:[...this.state.posts, 
            {"message": userResponse.message,
             "name": userResponse.name }
          ]
        })
    })
    .catch( error => {
        console.log(error);
    });

    console.log("Message Sent:",msg)

    document.querySelector("#message").value = "";

  }

  render() {
    return (
        <nav className="navbar navbar-dark fixed-bottom bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Welcome, {this.state.name}</a>
            <input id="message" className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" autoFocus/>
            <a href='' id='send' className='btn btn-primary' >Send</a>
        </nav>
    );
  }
}
