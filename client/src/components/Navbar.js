import React, { Fragment, Component } from 'react';

import { connect } from 'react-redux';




class Navbar extends Component {

  render() {
    return (
      <Fragment>
          <h3>This is the navbar</h3>
      </Fragment>
    );
  }
}



const mapStateToProps = state => ({
  ...state  // This brings in all of state store. you can be explicit as well.
})

export default connect(
    mapStateToProps, 
    {  }    // Bring in action here. Remember to import it
)(Navbar);
