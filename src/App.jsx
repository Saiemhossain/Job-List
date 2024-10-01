/* eslint-disable no-unused-vars */
import { ThemeProvider } from '@/components/theme-provider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
   
    element: <Root/>,
    children: [
      {
      path: "/",
      element: <AllJobs />
      },
      {
      path: "/about",
      element: <About />
      }
    ]
  },
 
 
]);



import './App.css';
import Home from './pages/Home';
import AllJobs from './pages/AllJobs';
import About from './pages/About';
import Root from './layouts/Root';


function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
       
      </ThemeProvider>
    </>
  );
}

export default App;
