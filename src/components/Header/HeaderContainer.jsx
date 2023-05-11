import React from 'react';
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import Header from "./Header";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
    return <Header {...this.props} login={this.props.login}/> }
}

let mapStateToProps = (state) => {
    return {
    email: state.auth.email,
    login: state.auth.login,
    id: state.auth.id,
    isAuth: state.auth.isAuth,
    }
}

export default connect (mapStateToProps, {getAuthUserData})(HeaderContainer);