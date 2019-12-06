import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";

import * as actions from '../actions/index';

class Main extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     users: [],
        //     count: 0
        // }
    }

    componentDidMount() {
        console.log('componentDidMount called');
    }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate called');
    // }
    
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate called');
    //     alert(this.state.count == nextState.count);
    //     return this.state.count == nextState.count;
    // }
    
    // componentWillUnmount() {
    //     console.log('componentWillUnmount called');
    // }
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => {
    //         let userData = res.data;
    //         this.setState({users : userData });
    //         console.log('userData', userData);
    //     })
    // }
    // incCount = () => {
    //     this.setState({ count: this.state.count + 1 });
    // }

    // decCount = () => {
    //     this.setState({ count: this.state.count - 1 });
    // }

    // showUsers = () => {
    //     debugger
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(res => {
    //             let userData = res.data;
    //             this.setState({ users: userData });
    //         })
    // }

    render() {
        console.log('render called');
        // const { users } = this.state;

        return (
            <div className="container">
                <div className="row">
                    {/* <h1>{this.state.count}</h1> */}
                </div>
                <div className="row">
                    <button className="col-sm-1 btn btn-success">Increment</button>
                    <button className="col-sm-1 btn btn-success">Decrement</button>
                </div>
                <div className="row">
                    <button className="btn btn-primary">Show Users</button>
                </div>
                <h1>Users Name</h1>
            </div>
        );
    };
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
// export default Main;