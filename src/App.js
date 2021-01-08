import { useState, useEffect } from 'react';
import Aside from './components/Wish';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Story';

function App() {
    const [noticesState, setNoticesState] = useState({ notices: [] });
    
    useEffect(() => {
      getNotices();
    }, []);

    function getNotices() {
      fetch('/notices')
      .then(res => res.json())
      .then(data => setNoticesState({ notices: data }))
      .catch(error => console.log(error));
    }


    function handleAdd(event, formInputs) {
      event.preventDefault()
      fetch('/notices', {
        body: JSON.stringify(formInputs),
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => { 
        setNoticesState(prevState => ({  
          notices: [data, ...prevState.notices] 
        }))
      })
      .catch(error => console.log(error))
    }

    function handleDelete(deletedNotice) {
      fetch(`/notices/${deletedNotice.id}`, {
        method: 'DELETE',
      }).then(() => {
        getNotices();
      })
      .catch(error => console.log(error));
    }

    function handleUpdate(event, formInputs) {
      event.preventDefault();
      fetch(`/notices/${formInputs.id}`, {
        method: 'PUT',
        body: JSON.stringify(formInputs),
        headers: {
          'Content-Type': 'Application/json'
        }
      })
      .then(() => {
        getNotices()
      })
      .catch(error => console.log(error))
    }

    return (
      <div className="App">
        <div className='container'>
          <Header />
          <Aside handleSubmit={handleAdd} />
          <Main 
            notices={noticesState.notices}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
          <Nav />
          <Footer />
        </div>
      </div>
    );
}

export default App;