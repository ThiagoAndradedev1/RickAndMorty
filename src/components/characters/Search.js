import React, { useState, useContext } from 'react';
import RickandMContext from '../../context/rickandmorty/RickandMContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
  const [text, setText] = useState('');

  const rickandMContext = useContext(RickandMContext);
  const alertContext = useContext(AlertContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Você precisa digitar algo :) !', 'light');
    } else {
      rickandMContext.getCharacters(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Pesquisar por personagens...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Pesquisar'
          className='btn btn-success btn-block'
        />
      </form>
      {rickandMContext.characters.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={rickandMContext.clearUsers}
        >
          Limpar
        </button>
      )}
    </div>
  );
};

export default Search;
