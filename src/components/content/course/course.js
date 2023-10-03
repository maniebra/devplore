import "./course.css";

function Course(props) {
  return (
    <div className="course">
      <img src={props.image} alt="Course icon" />
      <div class="course-metadata">
        <h3>{props.name}</h3>
        <p>{props.desription}</p>
      </div>
      <button>Go to course!</button>
    </div>
  );
}

export default Course;
