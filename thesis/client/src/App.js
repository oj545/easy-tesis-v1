import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayoutPage from './components/pages/RootLayoutPage';
import Login from './components/pages/Login';
import AboutUs from './components/pages/AboutUs';
import CheckList from './components/pages/CheckList';
import Chapters from './components/pages/Chapters';
import HelpPage from './components/pages/HelpPage';
import SignUp from './components/pages/SignUp';
import './index.css';
import Files from './components/pages/Files';
import Section from './components/elements/Section';

function App() {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayoutPage />}>
          <Route path="checkList" element={<CheckList />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="signIn" element={<SignUp />} />
          <Route path="chapters" element={<Chapters />}>
            <Route path=":section" element={<Section />} />
            <Route path="files" element={<Files />} />
            <Route path="help" element={<HelpPage />} />
          </Route>
        </Route>
      </>
    )
  );

  return (
    <div className="root">
      <RouterProvider router={routers} />;
    </div>
  );
}

export default App;
