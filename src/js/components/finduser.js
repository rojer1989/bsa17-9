import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions/actions';

class FindUser extends Component {
    constructor() {
        super();
        this.findUser = this.findUser.bind(this);
    }

    findUser() {
        this.props.onFindUser(this.refs.search.value);
    }

    render() {
        return (
            <div id="search-form">
                <input type="text" ref="search" onChange={this.findUser} placeholder="Find user" />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state.addUser.filter(user => user.name.includes(state.filteruser))
    };
}

const FindUserConnected = connect(mapStateToProps, mapDispatchToProps)(FindUser);
export default FindUserConnected;
