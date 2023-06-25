import './css/sidbar.css';
import '../UI/css/costomLink.css';
import { sections } from '../../data/links';
import CastomLink from '../UI/CastomLink';
import { Link, NavLink } from 'react-router-dom';

function SideBar({ hideHelp }) {
  return (
    <nav className="sidbar-controll">
      <div>
        <ul className="nav-list">
          {sections.map((chapter, index) => {
            return (
              <CastomLink
                key={index}
                path={chapter.path}
                name={chapter.name}
                hideHelp={hideHelp}
              />
            );
          })}
        </ul>
        <div className="other-pages">
          <NavLink
            to={'help'}
            name={'Help'}
            className={({ isActive }) =>
              isActive ? 'active-link' : 'pending '
            }
          >
            Help
          </NavLink>

          <NavLink
            to={'files'}
            name={'Files'}
            className={({ isActive }) =>
              isActive ? 'active-link' : 'pending '
            }
          >
            Flies
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
