import { useState, useEffect } from 'react';
import MakeWish from './components/MakeWish';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import GrantedWishes from './components/GrantedWishes';

function App() {
    const [wishesState, setWishesState] = useState({ wishes: [] });
    
    useEffect(() => {
      getWishes();
    }, []);

    function getWishes() {
      fetch('/wishes')
      .then(res => res.json())
      .then(data => setWishesState({ wishes: data }))
      .catch(error => console.log(error));
    }


    function handleAdd(event, formInputs) {
      event.preventDefault()
      fetch('/wishes', {
        body: JSON.stringify(formInputs),
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => { 
        setWishesState(prevState => ({  
          wishes: [data, ...prevState.wishes] 
        }))
      })
      .catch(error => console.log(error))
    }

    function handleDelete(deletedWish) {
      fetch(`/wishes/${deletedWish.id}`, {
        method: 'DELETE',
      }).then(() => {
        getWishes();
      })
      .catch(error => console.log(error));
    }

    function handleUpdate(event, formInputs) {
      event.preventDefault();
      fetch(`/wishes/${formInputs.id}`, {
        method: 'PUT',
        body: JSON.stringify(formInputs),
        headers: {
          'Content-Type': 'Application/json'
        }
      })
      .then(() => {
        getWishes()
      })
      .catch(error => console.log(error))
    }

    return (
      <div className="App">
        <div className='container'>
          <Header />
          <MakeWish handleSubmit={handleAdd} />
          <Main 
            wishes={wishesState.wishes}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
          <GrantedWishes />
          <Footer />
        </div>
      </div>
    );
}

export default App;