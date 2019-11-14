import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import * as actions from '../actions/index';


import { fetchUser } from '../actions/actions';


class App extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchUser();
    }

    incrementCount = () => {
        this.props.incCount();
    }

    decrementCount = () => {
        this.props.decCount();
    }

    render() {
        console.log(this.props);
        const { userArray, counter } = this.props;
        return (
            <div>
               <p>Count : {counter}</p>
               <button className="btn btn-primary" onClick={this.incrementCount}>Increment</button>
               <button className="btn btn-primary" onClick={this.decrementCount}>Decrement</button>
               <ul>
                {userArray.map(user => {
                    return <li key={user.id}>{user.name}</li>
                })}
               </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userArray: state.userReducer,
        counter : state.counterReducer.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(actions.fetchUser()),
        incCount: () => dispatch(actions.incCount()),
        decCount: () => dispatch(actions.decCount()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
