import React, { useState } from 'react';
import { SearchAnimal } from './SearchAnimal';
import styled from 'styled-components';

const animals = [
  'rhino',
  'bunny',
  'lion',
  'sheepy',
  'doggy',
  'ape',
  'giraffe',
  'bearo',
  'fox',
  'koala',
];

const Page = styled.div`
  position: absolute;
  top: 0;
  min-height: 100vh;
  background-color: burlywood;
  font-family: Arial, serif;

  text-align: center;
  flex-direction: column;
  padding: 2em;

  ul {
    list-style-type: none;
  }

  li {
    text-align: center;
  }
`;

const Title = styled.h1`
  color: crimson;
  text-align: center;
`;

export const App = () => {
  const [foundAnimals, setFoundAnimals] = useState({});

  return (
    <Page>
      <Title>Hospital Scavenger Hunt</Title>
      <ul>
        {animals.map(x => (
          <li
            key={x}
            style={{
              textDecoration: foundAnimals[x] ? 'line-through' : 'none',
            }}
          >
            {x}
          </li>
        ))}
      </ul>
      <SearchAnimal
        onResult={x => setFoundAnimals({ ...foundAnimals, [x]: true })}
      />
    </Page>
  );
};
