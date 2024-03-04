import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import './theme.css';
import { RootLayout } from './routes/rootLayout';
import { ItemSetHighlight } from './layout/itemSetHighlight';
import { Main } from './layout/main';
import { NewItemSet } from './layout/newItemSet';

const route = createBrowserRouter([
  { path: '/', element: <RootLayout/>, children: [
    { path: '/', element: <Main/>},
    { path: '/set/*', element: <ItemSetHighlight/>},
    { path: '/new_Set', element: <NewItemSet/>}
  ]}
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
