import { useState, useEffect } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
      content:'',
      name:''
    });

    useEffect(() => {
      if(props.wish) {
        setFormState({ 
          content: props.wish.content,
          name: props.wish.name,
          id: props.wish.id
        }) 
      }
    }, [props.wish]);

  function handleChange(event) {
    setFormState(prevState => ({
      ...prevState,
      [event.target.id] : event.target.value
    }));
  }

  function handleSubmit(event){
    event.preventDefault();
    if(props.wish) formState.id = props.wish.id
    props.handleSubmit(event, formState);
  }
    return (
      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          name="content"
          placeholder="Your Wish"
          type="text"
          value={formState.content}
          id="content"
         />
         <Input
           handleChange={handleChange}
           name="name"
           placeholder="Name"
           type="text"
           value={formState.name}
           id="name"
        />
       <input type="submit" value={props.wish ? 'Edit' : 'Add'}/>
      </form>
    );
  }

export default Form;
