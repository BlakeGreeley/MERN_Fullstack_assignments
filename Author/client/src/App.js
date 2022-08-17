import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayAllAuthors from "./components/DisplayAllAuthors"
import EditAuthor from './components/EditAuthor';
import AuthorForm from './components/AuthorForm';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAllAuthors />} />
          <Route path="/new" element={<AuthorForm />} />
          <Route path="/edit/:id" element={<EditAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;