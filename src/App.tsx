import { HeaderSimple } from "./components";
import { PostsPage } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <HeaderSimple />
      <div className="flex">
        <PostsPage />
        <PostsPage />
        <PostsPage />
        <PostsPage />
        <PostsPage />
        <PostsPage />
        <PostsPage />
        <PostsPage />
        <PostsPage />
        <PostsPage />
      </div>
    </>
  );
}

export default App;
