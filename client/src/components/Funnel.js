import React, { Fragment, Component } from 'react';

import { GiFamilyHouse, GiHouse, GiMoneyStack } from 'react-icons/gi';
import { connect } from 'react-redux';
import { setPropertyAddress } from '../stateTree/actions'




class Funnel extends Component {
    state = {
        address: ""
    };

    handleChange = e => {
        this.setState({
            address: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.setPropertyAddress(this.state.address);
        this.props.history.push('/signup')
    };

    render() {
        return (
        <Fragment>
            <section className='home-page'>
                <h1>My House</h1>


                <button className='btn-primary' ><GiHouse /></button>
                <button className='btn-primary' ><GiFamilyHouse /></button>
                <button className='btn-primary' ><GiMoneyStack /></button>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.address} onChange={this.handleChange} placeholder='Enter Address...' />
                </form>
                <div className='home-tagline'>
                <div className='tagline'>My House provides the most accurate home valuation available on the internet</div>
                </div>

            </section>



        </Fragment>
        );
    }
}



export default connect(
    ({ targetProperty }) => ({ targetProperty }), 
    { setPropertyAddress }    // Bring in action here. Remember to import it
)(Funnel);

