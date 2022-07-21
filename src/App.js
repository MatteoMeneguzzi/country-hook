import { useState } from 'react';
import axios from 'axios';

import Country from './components/Country';

import { useCountry, useField } from './hooks/index';

const App = () => {
  const nameInput = useField('text');

  const [name, setName] = useState('');
  const country = useCountry(name);

  const getCountry = async (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={getCountry}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  );
};

export default App;
