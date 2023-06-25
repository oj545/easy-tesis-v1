import React from 'react';
// import Loading from '../UI/Loading';
import Page from '../UI/page';
// import Help from '../UI/Help';
import './css/help.css';
function HelpPage() {
  return (
    <Page>
      <div className="help-controller">
        <h2>HOW IT IS WORK</h2>

        <div className="help-explenation">
          <p>1. Got to files on the bottom fo the page</p>
          <p>
            2. click on the button{' '}
            <button disabled={true} className="btn btn-lg  btn-primary">
              Generat File
            </button>{' '}
            for the section you want to start work on
            <br />
            <span className="text-success">
              if you got a green message it means that the file created
              Successfuly
            </span>
          </p>
          <p>
            3. go to the Side Bar and click on the button 8. now go to files and
            you will see red butoon{' '}
            <button disabled={true} className="btn btn-lg  btn-danger">
              Save Changes
            </button>{' '}
            section you created
            <br />
            <span>
              if you didnt create file for the specific section you will get an
              Error <strong className="text-danger">File Not found</strong>
            </span>
          </p>
          <p>4. next read the general discription</p>
          <p>
            5. start to work on the tasks Each task has a{' '}
            <strong>Sentence Bank </strong> Button click on this button will
            open a List of Sentence that will Help You to wirt you answers
          </p>
          <p>
            6. After wirting your answer the <strong>save chainges</strong>{' '}
            Button on the left side will turn red{' '}
            <span className="text-danger">
              it means thet your changes are not saved
            </span>{' '}
            After cicking this button he will turn bue agine{' '}
            <span className="text-success">now your chenges are saved</span>
          </p>
          <p>7. now meke sure that all your Answers are saved</p>
          <h3 className="text-danger">very importent!</h3>{' '}
          <p>
            8.click on the button{' '}
            <button disabled={true} className="btn btn-lg  btn-danger">
              save File
            </button>{' '}
            on the top right of the page or go to files and you will see red
            butoon{' '}
            <button disabled={true} className="btn btn-lg  btn-danger">
              save File
            </button>{' '}
            <br />
            <span className="text-success">
              now your file save in ore Data Base
            </span>{' '}
          </p>
        </div>
      </div>
    </Page>
  );
}

export default HelpPage;
