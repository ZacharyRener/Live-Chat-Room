import React, { Component } from 'react';
import './app.css';
import Messenger from './messenger.js';
import Navbar from './_navbar.js';
import MessageSender from './_messageSender.js';
import './Webpack-Toolkit/dist/app.bundle.js';

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    let title = document.querySelector('title')
    title.innerHTML = window.location.hostname;

  }

  render() {
    return (
      <div>
        <section>

            <Navbar />
        
            <div className="container-fluid">
                <div className="row">

                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
            
                        
                        </div>
                    </nav>
            
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">

                        <Messenger />

                    </main>

                </div>
            </div>

            <MessageSender />

        </section>
      </div>
    );
  }
}
