import Form from './Form.js';

function MakeWish(props) {
    return (
      <aside>
        <h1>Make A Wish</h1>
        <Form handleSubmit={props.handleSubmit}/>
      </aside>
    );
}

export default MakeWish; 