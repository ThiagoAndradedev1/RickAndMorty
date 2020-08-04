import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharactersItems = ({ character: { image, name, id } }) => {
  return (
    <div className='card text-center'>
      <img src={image} alt='' className='round-img' style={{ width: '90px' }} />
      <h3>{name}</h3>
      <div>
        <Link to={`/character/${id}`} className='btn btn-dark btn-sm my-1'>
          Sobre
        </Link>
      </div>
    </div>
  );
};

CharactersItems.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharactersItems;
