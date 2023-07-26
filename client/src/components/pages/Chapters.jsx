import { Outlet } from 'react-router-dom';
import SideBar from '../elements/SideBar';
import './css/chapters.css';

import { useSelector } from 'react-redux';

function Chapters() {
  const { userDetails } = useSelector((state) => state.user);
  return (
    <>
      {userDetails.id && (
        <div className="chapters-grid">
          <div>
            <SideBar />
          </div>
          <div>{<Outlet />}</div>
        </div>
      )}
    </>
  );
}

export default Chapters;
