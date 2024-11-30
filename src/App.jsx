import { RouterProvider } from 'react-router-dom';
import { router } from './route';
import GoToTop from './component/GoToTop/GoToTop';
import { Provider } from 'react-redux'; 
import { store } from './redux/store';  
function App() {
  return (
    <Provider store={store}> {/* Wrap your app in the Provider */}
      <>
        <RouterProvider router={router} />
        <GoToTop />
      </>
    </Provider>
  );
}

export default App;
