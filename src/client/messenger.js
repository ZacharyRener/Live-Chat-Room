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

  }

  componentDidMount() {

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
