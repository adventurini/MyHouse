import React, { Fragment, Component } from 'react';

// import { GiFamilyHouse, GiHouse, GiMoneyStack } from 'react-icons/gi';
import { connect } from 'react-redux';

import video from '../assets/red-drops_360p.mp4'



class Funnel extends Component {
    state={
        heightLeft:`100%`,
        height:`100%`,
        heightRight:`100%`,
        width:`33.33%`,
        left:`33.33%`,
        zIndex:`10`,
        videoURL: '../assets/blue-drops_360p.mp4',
    }
    
    slide = (direction) => {
        if (direction === 'up-left') {
            let newHeightLeft = this.state.heightLeft === '100%' ? '10%' : '100%';
            this.setState({
                ...this.state,
                heightLeft: newHeightLeft,
            })
        }
        if (direction === 'down') {
            let newHeight = this.state.height === '100%' ? '10%' : '100%';
            let newWidth = this.state.width === '33.33%' ? '100%' : '33.33%';
            let newLeft = this.state.left === '33.33%' ? '0' : '33.33%';
            let newZ = this.state.zIndex === '10' ? '11' : '10';
            this.setState({
                ...this.state,
                height: newHeight,
                width: newWidth,
                left: newLeft,
                zIndex: newZ,
            })
        }
        if (direction === 'up-right') {
            let newHeightRight = this.state.heightRight === '100%' ? '10%' : '100%';
            this.setState({
                ...this.state,
                heightRight: newHeightRight,
            })
        }
        
    }

    render() {
        
        return (
        <Fragment>
            <div
                className='background-video--page'>
                <video 
                    className='background-video' 
                    poster='../assets/red-drops-poster.png'
                    autoPlay muted playsInline loop
                >
                    <source src={video} type='video/mp4' />
                    <source src={video} type='video/ogg' />

                </video>

            </div>
            

            <div className='big-panel-1' onClick={() => this.slide('up-left')} style={{
                height:this.state.heightLeft,
            }}>
                <div className='big-panel-text'>owners</div>
            </div>
            <div className='big-panel-2' onClick={() => this.slide('down')} style={{
                height:this.state.height,
                width:this.state.width,
                left:this.state.left,
                zIndex:this.state.zIndex,
            }}>,
            
                <div className='big-panel-text'>investors</div>
            </div>
            <div className='big-panel-3' onClick={() => this.slide('up-right')} style={{
                height:this.state.heightRight
            }}>
                <div className='big-panel-text'>buyers</div>
            </div>

            <section className='home-page'>
            
                <div className='page-fade'></div>

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

