import React from 'react';


class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Ch', this.props);
        return (
            <ul>
                <p>Child Component</p>
                {/* {this.props.myUser.map(user => {
                    return <li key={user.id}>{user.name}</li>
                })} */}
            </ul>
        );
    }
}

export default Child;