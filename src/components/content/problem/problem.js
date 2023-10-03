import "./problem.css";

function Problem(props) {
  return (
    <div class="problem">
      <h3>Name: {props.name}</h3>
      <h5>Difficulty: {props.level}</h5>
      <button>Solve it!</button>
    </div>
  );
}

export default Problem;
