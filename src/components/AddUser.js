import React from 'react';


class AddUser extends React.Component {
    constructor(props) {
        super(props);
    }

    closeModal = () => {
        this.props.toggleModal();
    }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <form className="col-4">
                        <div className="form-row">
                            <label className="col-sm-4 col-form-label" for="firstName">First Name :</label>
                            <input type="text" className="form-control col-sm-8" name="firstName" id="firstName" />
                        </div>
                        <div className="form-row mt-2">
                            <label className="col-sm-4 col-form-label" for="lastName">Last Name :</label>
                            <input type="text" className="form-control col-sm-8" name="lastName" id="lastName" />
                        </div>
                        <div className="form-row mt-2">
                            <label className="col-sm-4 col-form-label" for="email">Email :</label>
                            <input type="email" className="form-control col-sm-8" name="email" id="email" />
                        </div>
                        <div className="form-row mt-2">
                            <label className="col-sm-4 col-form-label" for="age">Age :</label>
                            <input type="email" className="form-control col-sm-8" name="age" id="age" required />
                        </div>
                    </form>
                </div>
                <div className="row col-sm-6 mt-3" style={{marginLeft:'36px'}}>
                    <button className="col-sm-2 btn btn-success">Save</button>
                    <button className="col-sm-2 btn btn-danger ml-3" onClick={this.closeModal}>Cancel</button>
                </div>

            </div>
        );
    }
}

export default AddUser;