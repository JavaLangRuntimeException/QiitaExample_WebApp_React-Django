// App.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UsersList from './UsersList';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Hello World!</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </div>
    </Router>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
