import { useState } from 'react';

import Form from './Form';

function Notice(props) {
  
  const [formVisible, setFormVisible] = useState(false);

  function toggleForm() {
    setFormVisible(!formVisible);
  }

  function handleUpdate(event, notice) {
    toggleForm();
    props.handleUpdate(event, notice);
  }

    return (
      <>
      {
        formVisible ?
        <>
          <Form notice={props.notice} handleSubmit={handleUpdate} />
          <button onClick={toggleForm}>Cancel</button>
        </>
        : <div className="notice">
            <h3>{props.notice.title}</h3>
            <p>{props.notice.author}</p>
            <small>{props.notice.phone}</small>
            <button onClick={() => props.handleDelete(props.notice)}>X</button>
            <button onClick={toggleForm}>Edit This Notice</button>
          </div>
      }
      </>
    );
}

export default Notice;
