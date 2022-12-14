import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { AddHeroForm } from './AddHeroForm';
import { HeroesCount } from './HeroesCount';
import { HeroList } from './HeroList';
import { LoginForm } from './LoginForm';

export const RestOfApp = () => {
  const authContext = useContext(AuthContext);
  const user = authContext.user;

  return (
    <div className='App'>
      {user ? 'you are logged in!' : 'not logged in 😔!!!'}
      <LoginForm />
      <HeroList />
      <AddHeroForm />
      <HeroesCount />
    </div>
  );
};
