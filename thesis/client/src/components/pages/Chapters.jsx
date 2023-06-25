import { Outlet } from 'react-router-dom';
import SideBar from '../elements/SideBar';
import './css/chapters.css';
import Page from '../UI/page';
import { useSelector } from 'react-redux';

function Chapters() {
  const { userDetails } = useSelector((state) => state.user);
  return (
    <Page className="chapter-outlet">
      {!userDetails.id && <h1 className="secure-page">you must login first</h1>}
      {userDetails.id && (
        <div className="chapters-grid">
          <div>
            <SideBar />
          </div>
          <div>{<Outlet />}</div>
        </div>
      )}
    </Page>
  );
}

export default Chapters;
