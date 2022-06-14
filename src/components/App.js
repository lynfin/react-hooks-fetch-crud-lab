import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

// App
// - AdminNavBar
// - QuestionForm
// - QuestionList
// ---QuestionItem

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => setQuestions(questions));
  }, []);

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (deletedQuestion) => {
    setQuestions(
      questions.filter((question) => question.id !== deletedQuestion.id)
    );
  };
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={addQuestion} />
      ) : (
        <QuestionList questions={questions} onRemoveQuestion={removeQuestion} />
      )}
    </main>
  );
}

export default App;
