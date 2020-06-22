import React, { Component } from 'react';
const axios = require('axios')

export default class Messenger extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      live: false,
      endpoint: '',
      getEndpoint: '',
    }

    this.handleForm = this.handleForm.bind(this);

  }

  componentDidMount() {

    var form = document.getElementById("sendMessage");
    form.addEventListener('submit', this.handleForm);

    this.setState({ live: false })
    this.setState({ endpoint: this.state.live ? '/message' : 'http://localhost/message' })
    this.setState({ getEndpoint: this.state.live ? '/messages' : 'http://localhost/messages' })

    this.checkForPosts()

  }

  checkForPosts() {

    setInterval( () => {

      fetch(this.state.getEndpoint) 
      .then(response => response.json())
      .then(data => {

        this.setState({posts: data})

      });

    }, 100);

  }

  handleForm(event) { 

    event.preventDefault(); 

    let msg = document.querySelector("#message").value
    let _name = document.querySelector('#name').value

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

  } 

  render() {
    return (
      <div>
          <form id="sendMessage">
              <label>Name:</label>
              <input name="name" id="name" type="text"></input><br/>
              <label>Message:</label>
              <input name="message" id="message" type="text"></input><br/>
              <input type="submit" value="Send Message"></input>
          </form>   
          <div id="posts">
            {this.state.posts.map((d,idx)=>{
                    return (
                      <div key={idx}>
                        <p>{d.name}: {d.message}</p>
                      </div>
                    )
                })}
          </div>
      </div>
    );
  }
}
