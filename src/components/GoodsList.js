import React from 'react';
import {connect} from 'react-redux';

import {show} from '../actions';
import GoodsItem from './GoodsItem';
import ModalPopup from './ModalPopup';
import '../styles/GoodsList.css';

class GoodsList extends React.Component {
    renderGoods = () => {
        return this.props.images.map(({src, alt, description, time}, index) => {
            return (
                <GoodsItem
                    src={src}
                    alt={alt}
                    description={description}
                    time={time}
                    key={index}
                    index={index}
                />
            );
        });
    }

    showPopup = () => {
        this.props.show()
    };

    render() {
        return (
            <div className="GoodsList">
                <h1>Choose a restaurant!</h1>
                <div className="ui three doubling cards">
                    {this.renderGoods()}
                </div>
                <button onClick={this.showPopup} className="ui primary button">Add restaurant</button>
                <ModalPopup />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {images: state.images.imagesList}
};

export default connect(mapStateToProps, {show})(GoodsList);