import React, { Component } from 'react';
const axios = require('axios')

export default class Messenger extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
    this.handleForm = this.handleForm.bind(this);
  }

  componentDidMount() {

    var form = document.getElementById("sendMessage");
    form.addEventListener('submit', this.handleForm);

  }

  handleForm(event) { 

    event.preventDefault(); 

    let msg = document.querySelector("#message").value

    let userResponse = '';

    let live = false;
    let endpoint = live ? '/message' : 'http://localhost/message'

    axios.post(endpoint, {
        message: msg
    })
    .then( response => {
        console.log(response);
        userResponse = response.data;
        this.setState({
          posts:[...this.state.posts, 
            {"message": userResponse}
          ]
        })
    })
    .catch( error => {
        console.log(error);
    });

    console.log("Message Sent:",msg)

  } 

  render() {
    return (
      <div>
          <form id="sendMessage">
              <label>Message:</label>
              <input name="message" id="message" type="text"></input>
              <input type="submit"></input>
          </form>   
          <div id="posts">
            {this.state.posts.map((d,idx)=>{
                    return (
                    <p>{d.message}</p>
                    )
                })}
          </div>
      </div>
    );
  }
}
