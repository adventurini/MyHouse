import React, { Fragment, Component } from 'react';

import { GiFamilyHouse, GiHouse, GiMoneyStack } from 'react-icons/gi';
import { connect } from 'react-redux';





class Funnel extends Component {

    render() {
        return (
        <Fragment>
            <section className='home-page'>
                <h1>My House</h1>


                <button className='btn-primary' ><GiHouse /></button>
                <button className='btn-primary' ><GiFamilyHouse /></button>
                <button className='btn-primary' ><GiMoneyStack /></button>
                <form>
                    <input placeholder='Enter Address...' />
                </form>
                <div className='home-tagline'>
                <div className='tagline'>My House provides the most accurate home valuation available on the internet</div>
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
)(Funnel);

