import React from 'react';
import {connect} from 'react-redux';

import {deleteItem} from '../actions';

class GoodsItem extends React.Component {
    state = {showDetails: false}

    removeItem = () => {
        const {deleteItem, index} = this.props;

        deleteItem(index);
    };

    showDetails = () => {
        this.setState({showDetails: !this.state.showDetails});
    };


    render() {
        const {src, alt, description, time} = this.props;              // add LOGIC for CLICK on oneCARD
        const display = this.state.showDetails ? 'block' : 'none';

        return (
            <div className="ui card">
                <div onClick={this.showDetails} className="image">
                    <img src={src} alt={alt} />
                </div>
                <h4 className="header">{alt}</h4>
                <div style={{display:display}} className="content">
                    <div className="description">
                        {description}
                    </div>
                </div>
                <div style={{display:display}} className="extra content">
                    <i className="clock outline icon"></i>
                    {time}
                </div>
                <button onClick={this.removeItem} className="ui red button">Delete</button>
            </div>
        );
    };
};

export default connect(null, {deleteItem})(GoodsItem);