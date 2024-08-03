// DO NOT DELETE

import { useState } from 'react';
import './App.css'
import Header from './Header';
import Description from './Description';
import DogImage from './DogImage';
import DogListContainer from './DogListContainer';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <>
    <Header />
    <Description />
    <DogListContainer />
    </>
  )
}
