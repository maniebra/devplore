import "./body.css";
import Course from "../../content/course/course";
import Problem from "../../content/problem/problem";
import dsaImage from "../../../icons/courses/dsa.svg";
import pyImage from "../../../icons/courses/python.svg";
import cppImage from "../../../icons/courses/cpp.svg";
import jsImage from "../../../icons/courses/js.svg";
import pandasImage from "../../../icons/courses/pandas.svg";
import reactImage from "../../../icons/courses/react.svg";
import sqlImage from "../../../icons/courses/sql.svg";
import androidImage from "../../../icons/courses/android.svg";
function IndexBody() {
  return (
    <div className="content">
      <div className="welcome">
        <h2>Welcome to DevPlore!</h2>
        <p>
          You can take online programming courses and solve many algorithmic and
          technical problems on our platform; Start your journey today!
        </p>
        <button>Sign Up!</button>
      </div>
      <hr />
      <div className="courses-container">
        <div className="courses">
          <h2>Take a look at our courses!</h2>
          <div className="courses-box">
            <Course
              image={dsaImage}
              name="Data Structures and Algorithms"
              desription="Learn the concepts of data structres and algorithms in no time!"
            />
            <Course
              image={pyImage}
              name="Python Course"
              desription="Learn the fundamentals of programming in one of the most popular languages!"
            />
            <Course
              image={cppImage}
              name="C++ Course"
              desription="Learn the fundamentals of C++ and create useful terminal-based applications!"
            />
            <Course
              image={jsImage}
              name="Javascript Course"
              desription="Learn how to make your websites more interactive using Javascript!"
            />
            <Course
              image={pandasImage}
              name="Pandas Course"
              desription="Organize and analyze your data using a very powerful tool in Python!"
            />
            <Course
              image={reactImage}
              name="React Course"
              desription="Create visually stunning web applications using a popular Javascript tool!"
            />
            <Course
              image={sqlImage}
              name="SQL Course"
              desription="Create and manage your databases using one of the most famous database management tools!"
            />
            <Course
              image={androidImage}
              name="Android Programming Course"
              desription="Make creative and useful applications for Android using Android Studio!"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="problems">
        <h2>Or take a look at our problemset!</h2>
        <div className="problems-container">
          <Problem name="Find the minimum" level="easy" />
          <Problem name="Sum of numbers" level="easy" />
          <Problem name="Ways up the stairs" level="medium" />
          <Problem name="Graph is connected" level="medium" />
          <Problem name="Shortest Path" level="hard" />
          <Problem name="Randomizer" level="hard" />
        </div>
      </div>
    </div>
  );
}

export default IndexBody;
