import { useState, useEffect } from 'react';


function Form(props) {
    const [formState, setFormState] = useState({
      title:'',
      author:'',
      phone:''
    });

  useEffect(() => {
    if(props.notice) {
      setFormState({
        title: props.notice.title,
        author: props.notice.author,
        phone: props.notice.phone,
        id: props.notice.id,
      });
    }
  }, [props.notice]);

  // function handleChange(event) {
  //   setFormState(prevState => ({
  //     ...prevState,
  //     [event.target.id] : event.target.value
  //   }));
  // }

  function handleSubmit(event){
    event.preventDefault();
    if(props.notice) formState.id = props.notice.id
=======
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

        <button>
          Post Your Wish
        </button>
        
        <button>
           Wish Come True
        </button>
        
        <button>
          Donate
        </button>
       
        <input type="submit" value={props.notice ? 'Edit Notice' : ''}/>
=======
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
=======
export default Form;

