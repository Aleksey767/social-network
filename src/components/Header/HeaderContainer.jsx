import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} profile={this.props.profile}/>

    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {getUserProfile, logout}),
    withRouter
)(HeaderContainer);