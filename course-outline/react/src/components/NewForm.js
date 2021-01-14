import CourseInfo from './CourseInfo';
import LearnOutcome from './LearnOutcome';
import Grade from './Grade';
import GPA from './GPA';
import Notes from './Notes';
import GraduateAttributesTable from "./GraduateAttributes";
import CEABGuidelines from "./CEABGuidelines";
import { useRef, useState } from 'react';
import { COURSEINFO_URL, STYLE_BUTTONS, LEARNINGOUTCOME_URL } from '../constants/index'
import axios from 'axios'

function NewForm() {

  const [state, setState] = useState({ courseNum: "", learningOutcomes: "" })

  const onCourseNumberChange = (number) => {
    setState({ ...state, courseNum: number });
    // console.log("Course Num from parent: " + state.courseNum)
  }

  const onLearningOutcomeChange = (data) => {
    setState({ ...state, learningOutcomes: data });
  }

  const saveAll = () => {
    for (let i = 0; i < state.learningOutcomes.length; i++) {
      let thisData = state.learningOutcomes[i];
      thisData.courseNum = state.courseNum;
      axios.post(LEARNINGOUTCOME_URL, thisData);
    }
    alert("saved successfully");
  }

  console.log("Learning Outcome state from parent: ");
  for (let i = 0; i < state.learningOutcomes.length; i++) {
    console.log(state.learningOutcomes[i]);
  }

  return (

    <div className="new-form">
      <h1>1. Course Information</h1>
      <CourseInfo onCourseNumberChange={onCourseNumberChange} />
      <h1>2. Learning Outcomes</h1>
      <p>At the end of this course, you will be able to:</p>
      <LearnOutcome courseNum={state.courseNum} newOutline={true} onChange={onLearningOutcomeChange} />
      <br></br>
      <p style={{ wordBreak: 'break-all', whiteSpace: "normal" }}>Graduate Attributes are generic characteristics specified by the CEAB (Canadian Engineering Accreditation Board), expected to be exhibited by graduates of Canadian engineering schools. This table summarizes how the Learning Outcomes relate to key Graduate Attributes addressed in this course.</p>
      <br></br>
      <GraduateAttributesTable />
      <br></br>
      <CEABGuidelines />
      <h1>3. Final Grade Determination</h1>
      <p>The final grade in this course will be based on the following components:</p>
      <Grade />
      <Notes />
      <GPA />
      <div style={STYLE_BUTTONS}>
        {/* <button className="button"
          onClick={(e) => clearFields(courseInfo)}
        >Clear All</button> */}
        <button className="button"
          onClick={(e) => saveAll()}
        >Save</button>
      </div>
    </div>



  );
}

export default NewForm;
