import React, { Component } from 'react';


import Header from '../components/header';


class Layout extends Component {
  render() {

    return (
      <>
        <div className="wrapper" >
          <Header />
          <div className="main-content">
            {this.props.children}
          </div>
        </div >
      </>
    )
  }
}

export default Layout;