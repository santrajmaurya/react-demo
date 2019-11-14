import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import * as actions from '../actions/index';


import { fetchUser } from '../actions/actions';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        this.props.fetchUser();
    }

    incrementCount = () => {
        this.setState({count : this.state.count + 1});
    }

    decrementCount = () => {
        this.setState({count : this.state.count - 1});
    }

    render() {
        console.log(this.props);
        const { userArray } = this.props;
        return (
            <div>
               <p>Count : {this.state.count}</p>
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(actions.fetchUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
