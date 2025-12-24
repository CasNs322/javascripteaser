import { HeaderSimple } from './components';
import { PostsPage } from './pages';
import './App.css';

function App() {
  return (
    <>
      <HeaderSimple />
      <div className="flex">
        <PostsPage />
      </div>
    </>
  );
}

export default App;
