import React from 'react';

import AddUser from './AddUser';


class UsersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPopUpOpen : false
        }
    }

    toggleModal = () => {
        this.setState({isPopUpOpen : !this.state.isPopUpOpen})
    }

    render() {
        console.log(this.state.isPopUpOpen);
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                    <h1 className="navbar-brand">Users List</h1>
                    <div className="float-right">
                        <form className="form-inline my-2 my-lg-0" style={{marginLeft:'912px'}}>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className   ="btn btn-success" type="submit">Search</button>
                    </form>
                    </div>
                </nav>
                
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>23</td>
                            <td><button className="btn btn-danger">Delete</button></td>
                            <td><button className="btn btn-info">Edit</button></td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td>30</td>
                            <td><button className="btn btn-danger">Delete</button></td>
                            <td><button className="btn btn-info">Edit</button></td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                            <td>35</td>
                            <td><button className="btn btn-danger">Delete</button></td>
                            <td><button className="btn btn-info">Edit</button></td>
                        </tr>
                    </tbody>
                </table> 
                {this.state.isPopUpOpen ? <AddUser toggleModal={this.toggleModal} /> : null}
                <button className="btn btn-primary" onClick={this.toggleModal}>Add User</button>
            </div>
        )
    }
}

export default UsersList;