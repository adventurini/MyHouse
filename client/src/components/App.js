import React, { Fragment, Component } from 'react';
import Amplify from 'aws-amplify';
import awsmobile from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

Amplify.configure(awsmobile);

// import { connect } from 'react-redux';
// import { BrowserRouter, Route } from 'react-router-dom';

// import Navbar from './Navbar';
// import Login from './Login';



class App extends Component {

  render() {
    return (
      <Fragment>
        <h3>Login</h3>
        {/* <BrowserRouter>
          <section className='App'>
            
            <Navbar />
  
            <Route
              exact
              path='/'
              render={() => (
                <Login />
              )}
            />
  
          </section>
        </BrowserRouter> */}
      </Fragment>
    );
  }
}



// const mapStateToProps = state => ({
//   ...state  // This brings in all of state store. you can be explicit as well.
// })

// export default connect(
//     mapStateToProps, 
//     {  }    // Bring in action here. Remember to import it
// )(App);

export default withAuthenticator(App, true)