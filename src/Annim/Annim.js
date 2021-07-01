
import React, { Component } from 'react';

class Annim extends Component {
    render() {
        return (
            <div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <li>{ this.props.key } - { this.props.title }</li>
                    
                </div>
            </div>
            
        );
    }
}

export default Annim;