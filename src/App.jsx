import { RouterProvider } from 'react-router-dom';
import { router } from './route';
import GoToTop from './component/GoToTop/GoToTop';
// import { Provider } from 'react-redux'; // Ensure this is uncommented
// import { store } from './redux/store';  // Ensure this is uncommented

function App() {
  return (
    // <Provider store={store}> {/* Wrap your app in the Provider */}
      <>
        <RouterProvider router={router} />
        <GoToTop />
      </>
    // </Provider>
  );
}

export default App;
