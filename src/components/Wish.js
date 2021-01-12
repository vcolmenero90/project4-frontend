import { useState } from 'react';

import Form from './Form';

export default function Wish(props) {
  
  const [formVisible, setFormVisible] = useState(false);

  function toggleForm() {
    setFormVisible(!formVisible);
  }

  function handleUpdate(event, wish) {
    toggleForm();
    props.handleUpdate(event, wish);
  }

    return (
      <>
      {
        formVisible ?
        <>
          <Form wish={props.wish} handleSubmit={handleUpdate} />
          <button onClick={toggleForm}>Cancel</button>
        </>
        : <div className="wish">
            <h3>{props.wish.content}</h3>
            <p>{props.wish.name}</p>

            <button className='wish-x' onClick={() => props.handleDelete(props.wish)}>X</button>
            <button className='wish-edit' onClick={toggleForm}>Edit This Wish</button>
            <button className='wish-grant' >Grant This Wish</button>
            <hr/>
          </div>
      } 
      </>
    );
}