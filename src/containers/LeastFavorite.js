import React, { Component } from 'react';
import { connect } from 'react-redux';

class Favorite extends Component {
    render() {
        return (
            <div>
                Least Favorite
            </div>
        );
    }
}

export default connect(null)(Favorite);