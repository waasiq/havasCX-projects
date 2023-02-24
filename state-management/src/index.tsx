import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PlayListProvider } from './context/context';
import { PostProvider } from './context/postsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <PlayListProvider>
    <PostProvider>
      <App />
    </PostProvider>
  </PlayListProvider>
);
