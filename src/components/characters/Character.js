import React, { useContext } from 'react';
import CharactersItems from './CharactersItems';
import RickandMContext from '../../context/rickandmorty/RickandMContext';
import Spinner from '../layout/Spinner';

const Character = () => {
  const rickandMcontext = useContext(RickandMContext);
  const { characters, loading } = rickandMcontext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {characters.map((character) => (
          <CharactersItems key={character.id} character={character} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Character;
