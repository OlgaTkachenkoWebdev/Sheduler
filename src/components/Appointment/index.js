import React from 'react';
import "./styles.scss";
import Header from "./Header.js";
import Show from "./Show.js";
import Empty from "./Empty.js";


export default function Appointment(props) {
  const interview = props.interview;

  return (
  <article className="appointment">
    <Header time={props.time}/>
    {props.interview ? <Show student={interview.student} interviewer={interview.interviewer}/> : <Empty />}
  </article>
  )
}