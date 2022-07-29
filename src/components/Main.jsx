import { useEffect, useState } from "react";
import Form from "./Form";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    console.log('answers', answers)
  }, [answers])
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* TODO: answer list, fix time spending */}
      </section>
      <section className="main__form">
        <Form answers={answers} setAnswers={setAnswers} />
      </section>
    </main>
  );
}

export default Main;
