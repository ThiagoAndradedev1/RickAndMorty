import React, { useReducer } from 'react';
import RickandMContext from './RickandMContext';
import axios from 'axios';
import RickandMReducer from './RickandMReducer';
import {
  SEARCH_CHARACTERS,
  SINGLE_CHARACTER,
  CLEAR_USERS,
  SET_LOADING,
} from '../types';

const RickandMorty = (props) => {
  const initialState = {
    characters: [],
    character: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(RickandMReducer, initialState);

  const getCharacters = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${text}`
    );

    dispatch({
      type: SEARCH_CHARACTERS,
      payload: res.data.results,
    });
  };

  const getSingleCharacters = async (id) => {
    setLoading();

    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    // console.log(res.data);

    dispatch({
      type: SINGLE_CHARACTER,
      payload: res.data,
    });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <RickandMContext.Provider
      value={{
        characters: state.characters,
        character: state.character,
        loading: state.loading,
        getSingleCharacters,
        getCharacters,
        clearUsers,
      }}
    >
      {props.children};
    </RickandMContext.Provider>
  );
};

export default RickandMorty;
