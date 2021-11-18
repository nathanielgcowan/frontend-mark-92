import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeastFavorite extends Component {
    render() {
        return (
            <div>
                Favorite
            </div>
        );
    }
}

export default connect(null)(LeastFavorite);