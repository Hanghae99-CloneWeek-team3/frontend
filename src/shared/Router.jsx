import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Detail from '../pages/Detail';
import Main from '../pages/Main';
import Profile from '../pages/Profile';
import TotalList from '../pages/TotalList';
import Write from '../pages/Write';

export default function Router() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/totallist' element={<TotalList />}/>
      <Route path='/write' element={<Write />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/profile/:uniqueName' element={<Profile />}/>
      <Route path='/detail' element={<Detail />}/>
      <Route path='/detail/:postId' element={<Detail />}/>
    </Routes>
  </BrowserRouter>
  )

}