import Container from 'react-bootstrap/Container';
import TextEditor from './TextEditor';
import './css/questionn.css';

function Question({ description, index, title, sentences, answer }) {
  return (
    <Container className="ques">
      <div id={`${index}`} className="ques-index">
        {+index + 1}
      </div>
      <div className=" question-controll" id={`${index}`}>
        <br />
        <div className="discription">{description}</div>
        <hr />
        <Container>
          <TextEditor
            theme="snow"
            answer={answer}
            index={index}
            title={title}
            sentences={sentences}
          />
        </Container>
      </div>
    </Container>
  );
}

export default Question;
