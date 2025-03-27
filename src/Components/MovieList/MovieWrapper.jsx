import React from 'react';
import { Outlet } from 'react-router-dom';

function MovieWrapper() {
  return (
    <div>
      {/* 자식 컴포넌트를 보여주기 위함(oulet 위치에 자식 컴포넌트가 들어가는거임) 중첩된 자식 라우트 */}
      <Outlet />
    </div>
  );
}

export default MovieWrapper;
