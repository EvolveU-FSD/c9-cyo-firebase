import React, { useContext } from 'react'
import { FirebaseContext } from '../providers/FirebaseProvider';

export const RestOfApp = () => {
  const fbContext = useContext(FirebaseContext);
  const app = fbContext.app;     
  return (
    <div className='App'>
      Firebase app info:<br/><br/>{JSON.stringify(app)}
    </div>
  );
}
