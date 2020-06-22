import React, { Component } from 'react';
const axios = require('axios')

export default class Messenger extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      live: true,
      endpoint: '',
      getEndpoint: '',
    }

  }

  componentDidMount() {

    this.setState({ live: true })
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
        let posts = document.getElementById("posts")
        posts.scrollTop = posts.scrollHeight

      });

    }, 1000);

  }

  render() {
    return (
      <div>
        <div id="posts">
          {this.state.posts.map((d,idx)=>{
                  return (
                    <div key={idx}>
                      <p><strong>{d.name}:</strong> {d.message}</p>
                    </div>
                  )
              })}
        </div>
      </div>
    );
  }
}
