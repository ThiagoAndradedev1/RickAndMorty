import React, { Fragment } from 'react';
import Search from '../characters/Search';
import Character from '../characters/Character';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Character />
    </Fragment>
  );
};

export default Home;
