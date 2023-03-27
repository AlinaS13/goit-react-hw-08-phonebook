import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { NavBar } from './Header';
// import { logoutOperation } from '../store/auth/operations';
// import { selectAuthToken } from '../store/auth/selector';
import { Header, StyledLink } from './Navidation.steled';

export default function Navigaion() {
  // const authToken = useSelector(selectAuthToken);
  // const dispatch = useDispatch();
  // const logout = () => {
  //   dispatch(logoutOperation());
  // };

  return (
    <Header>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/registration">Sign up</StyledLink>
      <StyledLink to="/login">Sign in</StyledLink>
    </Header>
  );
}
