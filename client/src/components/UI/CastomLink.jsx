import { NavLink, useParams } from 'react-router-dom';
import './css/costomLink.css';

function CstumLink({ name, path }) {
  const { section } = useParams();

  return (
    <li className={section === path ? 'active-item' : 'nav-item'}>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : 'pending ')}
        to={path}
      >
        {name}
      </NavLink>
    </li>
  );
}

export default CstumLink;
