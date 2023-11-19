
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import store from './components/utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
import Layout from './components/Layout';
import SearchResults from './components/SearchResults';

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>, 
    children : [
      {
        path : "/",
        element : <Body/>,
        children : [
          {
            path : "/",
            element : <MainContainer/>
          },
          {
            path : "watch",
            element : <WatchPage/>
          },
          {
            path : "demo",
            element : (<>
                <Demo/>
                <Demo2/>
            </> )
          },
          {
            path : "results",
            element : <SearchResults/>
          }
        ]
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
