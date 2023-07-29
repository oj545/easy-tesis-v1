import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from '../../data/EditorToolBar';
import './css/textEditor.css';
import { useDispatch } from 'react-redux';

import Sentence from './SentenceBank';
import { projectAction } from '../../redux/projectSlice';
import { userAction } from '../../redux/userSlice';

function TextEditor({ index, title, answer, sentences }) {
  const [showSentences, toggole] = useState(false);
  const [content, setContent] = useState();
  const dispatch = useDispatch();
  console.log(sentences);
  useEffect(() => {
    setContent(answer);
  }, [answer]);

  const saveContentHandler = (e) => {
    e.preventDefault();
    dispatch(projectAction.saveContent({ index, content, title: title }));
    dispatch(userAction.updateUserFiles({ title, status: 'fail' }));
  };

  const showSentencesHandler = (e) => {
    e.preventDefault();
    toggole(!showSentences);
  };

  const copyHandler = (copy) => {
    setContent(`<div>${content}</div>` + copy);
    toggole(false);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={content}
        modules={modules}
        formats={formats}
        onChange={setContent}
      />
      <div className="textEditor-btn">
        <button
          type="button"
          className={`${
            content === answer ? 'btn-primary' : 'btn-danger'
          }  btn  btn-lg  `}
          onClick={saveContentHandler}
        >
          Save Changes
        </button>
        <button
          className=" answer-btn btn btn-lg  btn-outline-primary "
          onClick={showSentencesHandler}
        >
          Sentences Bank
        </button>
      </div>
      {showSentences && sentences && (
        <Sentence
          sentences={sentences}
          index={index}
          title={title}
          copyHandler={copyHandler}
        />
      )}
    </div>
  );
}
export default TextEditor;
