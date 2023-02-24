import Navbar from './components/Navbar';
import Async from './pages/Async';
import Sync from './pages/Sync';
import {
  BrowserRouter ,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Sync />}> 
          </Route>
          <Route path="/async" element={ <Async />}> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
