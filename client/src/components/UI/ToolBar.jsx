import React, { useState } from 'react';
import './css/toolbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveFile } from '../../utils/chapterRequests/saveFile';
import { NavHashLink as Link } from 'react-router-hash-link';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useParams } from 'react-router-dom';

const ToolBar = ({ answers }) => {
  const [showLinks, setShowLinks] = useState(true);
  const { token, userDetails, filesController } = useSelector(
    (state) => state.user
  );
  const { section } = useParams();

  const dispatch = useDispatch();

  const saveFileHandler = () => {
    dispatch(saveFile(answers, token, userDetails.id));
  };

  const showLinkHandler = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <div className="toolbar">
        <div className="link-list">
          {showLinks && (
            <div className="arrow-btn" onClick={showLinkHandler}>
              {<IoIosArrowDown />}
            </div>
          )}
          {!showLinks && (
            <div className="arrow-btn" onClick={showLinkHandler}>
              {<IoIosArrowUp />}
            </div>
          )}
          {!showLinks && (
            <ul>
              {answers?.content.map((_, index) => {
                return (
                  <li key={index} className="ques-link">
                    <Link to={'#' + index} smooth>
                      {(index + 1).toString()}{' '}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <button
          className={`${
            filesController[section].fileIsSave ? 'btn-primary' : 'btn-danger'
          } save-btn btn btn-xs  `}
          onClick={saveFileHandler}
        >
          Save File
        </button>
      </div>
    </>
  );
};

export default ToolBar;
