import { useState } from "react";

const Survey = () => {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");

  const survey = {
    _id: {
      $oid: "60c4b413b65a5fdac87a23ba"
    },
    title: "React Technologies",
    description:
      "Sequi harum inventore esse. Inventore non id id repudiandae est voluptatum. Repellendus laudantium incidunt ratione sint. Qui corrupti sint. Nobis hic ut culpa sit sint excepturi esse doloribus aliquam.",
    questions: [
      {
        type: "option",
        question: "What is your favorite programming language?",
        options: ["JAVA", "C++", "C#", "C"]
      },
      {
        type: "option",
        question: "What is your favorite animal?",
        options: ["cat", "dog", "elephant"]
      },
      {
        type: "option",
        question: "What is your favorite animal?",
        options: ["cat", "dog", "elephant"]
      },
      {
        type: "textinput",
        question: "What is your name?"
      }
    ]
  };

  const handleSubmit = async e => {
    e.preventDefault();

    console.log(`Submiting survey.`);
    const survey = { q1, q2, q3, q4 };
    console.log(survey);
  };

  const handleRadioOnChange = e => {
    console.log("Radio");
    switch (e.target.name) {
      case "q1":
        setQ1(e.target.value);
        break;
      case "q2":
        setQ2(e.target.value);
        break;
      case "q3":
        setQ3(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="contents">
      <h1 className="display-2">Survey : {survey.title}</h1>
      <p className="lead">{survey.description}</p>

      <form onSubmit={handleSubmit}>
        {survey.questions.map((question, surveyQIdx) => (
          <div className="question" key={surveyQIdx}>
            <h1 className="display-6">
              <strong>Q{surveyQIdx + 1}: </strong>
              {question.question}{" "}
            </h1>
            {question.type === "option" ? (
              <div>
                {question.options.map((option, idx) => (
                  <div className="form-check" key={idx}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`q${surveyQIdx + 1}`}
                      value={option}
                      id="flexRadioDefault1"
                      onChange={handleRadioOnChange}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <textarea
                  className="form-control mt-1"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  onChange={e => setQ4(e.target.value)}
                ></textarea>
              </div>
            )}
          </div>
        ))}
        <button className="btn btn-outline-success btn-lg mt-5">Save</button>
      </form>
    </div>
  );
};

export default Survey;
