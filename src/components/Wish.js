import Form from './Form.js';

function Wish(props) {
    return (
      <aside>
        <h1>Make A Wish</h1>
        <Form handleSubmit={props.handleSubmit}/>
      </aside>
    );
}

export default Wish;