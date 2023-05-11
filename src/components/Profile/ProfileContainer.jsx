import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {getUsersProfile} from '../../redux/profile-page-reducer';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";




class  ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId) {userId = 2}
       this.props.getUsersProfile(userId);
    }
    render() {
      return <div> <Profile {...this.props} profile={this.props.profile} /> </div> }
    }
let mapStateToProps = (state) => ({ profile: state.profilePage.profile, isAuth: state.auth.isAuth });

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}



export default connect(mapStateToProps, {getUsersProfile})(withRouter(ProfileContainer));