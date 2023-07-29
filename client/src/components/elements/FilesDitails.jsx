import React from 'react';
import { getKeyAndValue } from '../../helperFanctions/getKeyAndValue';
import { useDispatch, useSelector } from 'react-redux';
import './css/files.css';
import { ProgressBar } from 'react-bootstrap';
import { createNewFile } from '../../utils/chapterRequests/creatNewFile';
import { saveFile } from '../../utils/chapterRequests/saveFile';
import { ImCheckmark } from 'react-icons/im';

function FilesDitails() {
  const { filesController, userDetails, token } = useSelector(
    (state) => state.user
  );
  const { project } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const createFileHandler = async (e) => {
    e.preventDefault();
    const title = e.target.value;
    dispatch(
      createNewFile(project[title].answers, title, token, userDetails.id)
    );
  };

  const saveFileHandler = (e) => {
    e.preventDefault();
    dispatch(saveFile(project[e.target.value].answers, token, userDetails.id));
  };

  return (
    <>
      {filesController && (
        <div className="files">
          <table className=" files-table">
            <thead>
              <tr>
                <th>Chapter</th>
                <th>Created</th>
                <th>Flie Status</th>
                <th>Completed</th>
              </tr>
            </thead>

            <tbody>
              {getKeyAndValue(filesController).map((el, index) => (
                <tr key={index}>
                  <td className="table-title">{el.title.toUpperCase()}</td>
                  <td className="table-created">
                    {!el.value.created && (
                      <button
                        value={el.title}
                        onClick={createFileHandler}
                        className="btn btn-create-file btn-outline-primary"
                      >
                        Create section
                      </button>
                    )}
                    {el.value.created && (
                      <span className="file-active">
                        Created <ImCheckmark />
                      </span>
                    )}
                  </td>
                  <td className="table-created file-status">
                    {el.value.fileIsSave ? (
                      <small>
                        Save <ImCheckmark />
                      </small>
                    ) : (
                      <button
                        className="btn  btn-outline-danger "
                        value={el.title}
                        onClick={saveFileHandler}
                      >
                        Save file
                      </button>
                    )}
                  </td>
                  <td className="complitions">
                    <ProgressBar
                      className="ProgressBar"
                      now={el.value.complited}
                      label={`${el.value.complited}%`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default FilesDitails;
