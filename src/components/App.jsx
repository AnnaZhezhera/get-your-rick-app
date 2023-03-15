import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { lazy, useState } from 'react';
import { Layout } from './Layout/Layout';
import { AppWrapp } from './App.styled';
import { ProtectedRoute } from './ProtectedRoute';

const Home = lazy(() => import('pages/Home/Home'));
const HeroDetails = lazy(() => import('pages/HeroDetails/HeroDetails'));
const PageNotFound = lazy(() => import('pages/NotFound/PageNotFound'));
const LoginFB = lazy(() => import('pages/LoginFB/LoginFB'));

export const App = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const setAuth = value => {
    setUser(value);
    navigate('/home');
  };

  return (
    <AppWrapp>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<LoginFB loginCallback={setAuth} />} />
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="home" element={<Home user={user} />} />
            <Route path="character/:id" element={<HeroDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route />
        </Route>
      </Routes>
    </AppWrapp>
  );
};
