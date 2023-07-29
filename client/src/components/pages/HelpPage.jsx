import React from 'react';
// import Loading from '../UI/Loading';
import Page from '../UI/page';
// import Help from '../UI/Help';
import './css/help.css';
function HelpPage() {
  return (
    <Page>
      <div className="help-controller">
        <h2>How it Works</h2>

        <div className="help-explenation">
          <p>
            1. Accessing Files: - After logging in, go to the general menu and
            click "Files."
          </p>
          <p>
            2. Creating Sections: - Choose the sections you want to work on and
            click on them. - A green message confirms the successful creation of
            the section. - If you encounter an "Error: File Not Found," it means
            you haven't created a file for that specific section yet.
          </p>
          <p>
            3. Reading Section Descriptions: - Before writing the paragraphs,
            carefully read the description provided for each section.
          </p>
          <p>
            4. Using the "Sentence Bank": - Each paragraph includes a helpful
            "Sentence Bank" button. - Clicking on this button will open a list
            of sentences to assist you in composing your answers.
          </p>
          <p>
            5. Saving Your Progress: - After writing your answers, note that the
            "Save Changes" button on the left will turn red, indicating unsaved
            changes. - Click the "Save Changes" button to save your progress; it
            will turn blue again, confirming successful saving. - Ensure all
            your answers are saved before proceeding.
          </p>

          <p>
            6. Finalizing and Saving Your File: - To complete and save your file
            in our database, click the "Save File" button at the top right of
            the page. - Alternatively, the red "Save File" button is in the
            "Files" section.
          </p>
          <p>
            7. Seeking assistance: - If you have further questions or need
            assistance, don't hesitate to contact us. We believe this
            step-by-step guide will enhance your experience with our program.
            Thank you for choosing our service; we're here to support you
            throughout the process!
          </p>
        </div>
      </div>
    </Page>
  );
}

export default HelpPage;
