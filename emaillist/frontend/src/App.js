import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';
import data from './assets/json/data.json'

const App = () => {
  const [emails, setEmails] = useState(data);
  const notifyKeyWordChanged = function(keyword) {
    // keyword가 firstName or lastName or email
    const emails = data.filter(e => e.firstName.indexOf(keyword) != -1 || e.lastName.indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1);
    setEmails(emails);
  }

  return (
    <div id={'App'}>
      <RegisterForm />
      <SearchBar callback={notifyKeyWordChanged}/>
      <Emaillist emails={emails} />
    </div>
  )
}

export default App;