import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavbarTop from '../elements/NavbarTop';
import ErrorMessage from '../UI/ErrorMessage';
import { useDispatch } from 'react-redux';
import { userAction } from '../../redux/userSlice';
import { getUser } from '../../utils/userRequest/getUser';
import { GetCookie } from '../../hooks/cookies';

function RootLayoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = GetCookie('jwt');
    dispatch(userAction.setToken(token));
    dispatch(getUser(token));
    navigate('/chapters');
    if (!token) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="root">
      <ErrorMessage />
      <header>
        <NavbarTop />

        <div className="home">asdf</div>
      </header>
      <main>{<Outlet />}</main>
    </div>
  );
}

export default RootLayoutPage;
