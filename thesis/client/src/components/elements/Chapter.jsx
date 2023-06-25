import { useDispatch } from 'react-redux';
import Question from './Question';
import './css/chapter.css';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { projectAction } from '../../redux/projectSlice';
import ToolBar from '../UI/ToolBar.jsx';

function Chapter({ instructions, title, isLoaded, answers, id, error }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) {
      dispatch(
        projectAction.setChapterInstructions({
          instructions: instructions,
          title: title,
          answers: answers,
          id: answers._id,
        })
      );
    }
    if (error) {
      console.log(error);
      dispatch(projectAction.setError(error));
    }
  }, [instructions, error]);

  console.log(error);
  return (
    <>
      {isLoaded && (
        <Container>
          <ToolBar answers={answers} title={title} id={id} />
          <div className="chapter-controll">
            <div className="chapter-header">
              <div className="image">
                <h1>{instructions?.title}</h1>
                <div className="head-line">
                  <p>{instructions?.generalDescription}</p>
                </div>
              </div>
            </div>

            <div className="chapter-main">
              {instructions?.tasks.map((ques, index) => {
                return (
                  <Question
                    answer={answers.content[index]}
                    description={ques.description}
                    sentences={ques.sentenceBank}
                    title={instructions.title}
                    color={ques.color}
                    key={index}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default Chapter;
