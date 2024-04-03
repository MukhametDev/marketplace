import { useState } from 'react';
import HomePage from 'pages/HomePage/HomePage';
import { Suspense } from 'react';
import PublicRoutes from 'routes/PublicRoutes';
import { findAll } from './../node_modules/styled-components/test-utils/index';

function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <PublicRoutes />
    </Suspense>
  );
}

export default App;
