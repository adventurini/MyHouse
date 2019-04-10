import React, { Fragment, Component } from 'react';

// import { GiBeerStein } from 'react-icons/gi';
import { connect } from 'react-redux';

import { GiFamilyHouse, GiHouse, GiMoneyStack } from 'react-icons/gi';




class Navbar extends Component {

    render() {
        return (
        <Fragment>
            <section className='navbar'>
                <div className='nav-logo'>My House</div>
                <div className='nav-buttons'>
                    <GiHouse />
                    <GiFamilyHouse />
                    <GiMoneyStack />
                </div>
            </section>
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

