import { NavLink, useNavigate } from 'react-router-dom';
import './css/navBarTop.css';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from '../../redux/userSlice';
import { projectAction } from '../../redux/projectSlice';

function NavbarTop() {
  const { userDetails } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = (e) => {
    e.preventDefault();
    dispatch(userAction.logout());
    dispatch(projectAction.initializeState());
    navigate('/login');
  };

  return (
    <nav className="navbar-control ">
      <ul>
        <li className="nav-top-user">{`${userDetails.firstName} ${userDetails.lastName}`}</li>

        {userDetails.id && (
          <>
            <li>
              <NavLink className="nav-top-link" to="chapters">
                Chapters
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-top-link" to="checkList">
                Check List
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-top-link " to="aboutUs">
                About Us
              </NavLink>
            </li>
          </>
        )}

        <li className="auth">
          {!userDetails.id && (
            <NavLink className="nav-top-link" to="login">
              Login
            </NavLink>
          )}
          {userDetails.id && (
            <button onClick={logOutHandler} className="btn-logout" to="login">
              Log Out
            </button>
          )}

          <NavLink className="nav-top-link" to="signIn">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarTop;
