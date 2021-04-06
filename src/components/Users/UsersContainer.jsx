import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {getUsers, toggleFollowingProgress, follow, setCurrentPage, unfollow } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';



class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) =>{
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render() {
        if(!this.props.isAuth){
            return <Redirect to="/login" />;
        }
        return <>
            {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} 
                unfollow={this.props.unfollow} follow={this.props.follow} users={this.props.users} 
                followingInProgress={this.props.followingInProgress}/>
        </> 
    }
}

let mapStateToProps = (state)=>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default compose(
    connect(mapStateToProps,{follow,unfollow,setCurrentPage,
        toggleFollowingProgress, getUsers}),
    withAuthRedirect
)(UsersContainer);