import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../providers/FirebaseProvider';

export const HeroList = () => {
  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;
  const [heroes, setHeroes] = useState([]);
  const getHeroesData = async () => {
    try {
      let collectionRef = collection(db, 'heroes');
      let queryRef = query(collectionRef, orderBy('name'));
      let querySnap = await getDocs(queryRef);
      if (querySnap.empty) {
        console.log('No docs found');
      } else {
        let heroesData = querySnap.docs.map((doc) => ({
          ...doc.data(),
          DOC_ID: doc.id,
        }));
        setHeroes(heroesData);
      }
    } catch (ex) {
      console.log('FIRESTORE FAILURE!', ex.message);
    }
  };
  return (
    <div>
      <button onClick={() => getHeroesData()}>GET DATA</button>
      <br />
      {heroes.map((hero) => {
        return (
          <ul key={hero.DOC_ID}>
            <li>name: {hero.name}</li>
            <li>vehicle: {hero.vehicle}</li>
            <li>docId: {hero.DOC_ID}</li>
            <hr />
          </ul>
        );
      })}
    </div>
  );
};
