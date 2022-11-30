import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer style={{color : "white"}}>

     <div className="row">
        <div className="twelve columns">
            Made with <span role="img" aria-label="heart emoji">❤️</span>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
