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
      </form>
    );
  }

export default Form;
