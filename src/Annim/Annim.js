
import React from 'react';

class Annim extends React.Component {
    render() {
        return (
            <div>
                <div className='col-lg-3 col-md-6'>
                    <ul>
                        <li>{ this.props.id } - { this.props.title }</li>
                        <li>
                            <img width="30%" src={ this.props.image }/>
                        </li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default Annim;