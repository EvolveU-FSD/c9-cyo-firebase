import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../providers/FirebaseProvider';
import { UploadImage } from './UploadImage';

export const HeroList = () => {
  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    let collectionRef = collection(db, 'heroes');
    let queryRef = query(collectionRef, orderBy('name'));
    const unsubscribe = onSnapshot(queryRef, (querySnap) => {
      if (querySnap.empty) {
        console.log('No docs found');
      } else {
        let heroesData = querySnap.docs.map((doc) => ({
          ...doc.data(),
          DOC_ID: doc.id,
        }));
        setHeroes(heroesData);
      }
    });

    return () => unsubscribe();
  }, [db]);
  return (
    <div>
      {/* <button onClick={() => getHeroesData()}>GET DATA</button> */}
      {/* <br /> */}
      {heroes.map((hero) => {
        return (
          <ul key={hero.DOC_ID}>
            <li>name: {hero.name}</li>
            <li>vehicle: {hero.vehicle}</li>
            <li>docId: {hero.DOC_ID}</li>
            <li>
              image:{' '}
              {hero.imageUrl ? (
                <img src={hero.imageUrl} alt='hero' />
              ) : (
                <UploadImage docId={hero.DOC_ID} />
              )}
            </li>
            <hr />
          </ul>
        );
      })}
    </div>
  );
};

// const getHeroesData = async () => {
//   try {
//     let collectionRef = collection(db, 'heroes');
//     let queryRef = query(collectionRef, orderBy('name'));
//     let querySnap = await getDocs(queryRef);
//     if (querySnap.empty) {
//       console.log('No docs found');
//     } else {
//       let heroesData = querySnap.docs.map((doc) => ({
//         ...doc.data(),
//         DOC_ID: doc.id,
//       }));
//       setHeroes(heroesData);
//     }
//   } catch (ex) {
//     console.log('FIRESTORE FAILURE!', ex.message);
//   }
// };
