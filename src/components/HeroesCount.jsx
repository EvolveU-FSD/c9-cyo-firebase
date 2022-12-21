import { httpsCallable } from 'firebase/functions';
import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../providers/FirebaseProvider';

export const HeroesCount = () => {
  const fbContext = useContext(FirebaseContext);
  const cloudFuncs = fbContext.cloudFuncs;
  const [count, setCount] = useState('n/a');

  const getHeroesCount = async () => {
    const getNumberOfHeroes = httpsCallable(cloudFuncs, 'getNumberOfHeroes');
    const result = await getNumberOfHeroes();
    const data = result.data;
    setCount(data.numHeroes);
  };

  return (
    <div>
      <span>Num of Heroes: {count}</span>
      <button onClick={getHeroesCount}>Fetch Count</button>
      <br />
    </div>
  );
};
