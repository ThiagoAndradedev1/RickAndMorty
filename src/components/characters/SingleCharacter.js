import React, { useContext, useEffect, Fragment } from 'react';
import RickandMContext from '../../context/rickandmorty/RickandMContext';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

const SingleCharacter = ({ match }) => {
  useEffect(() => {
    getSingleCharacters(match.params.id);
  }, [match]);

  const rickandMContext = useContext(RickandMContext);
  const { getSingleCharacters, character, loading } = rickandMContext;

  const {
    name,
    status,
    species,
    gender,
    image,
    episode,
    origin,
    location,
  } = character;

  console.log(character);

  if (loading) return <Spinner />;

  // return <Fragment>{origin && <h1>{origin.name}</h1>}</Fragment>;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Voltar
      </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={image}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <strong>{species} </strong>
        </div>
        <ul>
          <li>
            <Fragment>
              <strong>Gênero: </strong> {gender}
            </Fragment>
          </li>
          <li>
            <Fragment>
              <strong>Status: </strong> {status}
            </Fragment>
          </li>
          <li>
            <Fragment>
              <strong>Origem: </strong> {origin && origin.name}
            </Fragment>
          </li>
          <li>
            <Fragment>
              <strong>Localização: </strong> {location && location.name}
            </Fragment>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default SingleCharacter;
