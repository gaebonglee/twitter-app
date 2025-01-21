import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Homepage</h1>} />
      <Route path="/posts" element={<h1>Posts List Page</h1>} />
      <Route path="/posts/:id" element={<h1>Post Detail Page</h1>} />
      <Route path="/posts/new" element={<h1>Post New Page</h1>} />
      <Route path="/posts/edit/:id" element={<h1>Posts Edit Page</h1>} />
      <Route path="/proflie" element={<h1>Proflie Page</h1>} />
      <Route path="/proflie/edit" element={<h1>Proflie Edit Page</h1>} />
      <Route path="/notifications" element={<h1>Notifications</h1>} />
      <Route path="/search" element={<h1>search Page</h1>} />
      <Route path="/users/login" element={<h1>Login Page</h1>} />
      <Route path="/users/signup" element={<h1>Sign Page</h1>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
