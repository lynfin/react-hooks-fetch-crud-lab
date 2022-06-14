import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onRemoveQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onRemoveQuestion={onRemoveQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
