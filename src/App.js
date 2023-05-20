import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css';
import Main from '../src/components/Main'
import Post from '../src/components/table/post/post'
import Comment from '../src/components/table/comment/comment'

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Main/>} exact />
        <Route path="/users/:id/posts" element={<Post/>}  />
        <Route path="/posts/:id/comments" element={<Comment/>}  />
        </Routes>
    </Router>
  );
}

export default App;
