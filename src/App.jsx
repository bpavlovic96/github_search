import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState, useEffect } from "react";
import UserView from "./components/UserView/UserView";
import ResetButton from "./components/ResetButton/ResetButton";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const handleSearch = () => {
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    };
    if (username) handleSearch();
  }, [username]);

  useEffect(() => {
    const handleSearch = () => {
      fetch(`https://api.github.com/users/${username}/repos`)
        .then((res) => res.json())
        .then((data) => setRepos(data));
    };
    if (username && user) handleSearch();
  }, [user, username]);

  const handleOnClick = () => {
    setUser();
    setRepos([]);
  };

  return (
    <div className="app">
      <SearchBox value={username} setValue={setUsername} />
      <UserView user={user} repos={repos} />
      <ResetButton onClick={handleOnClick} />
    </div>
  );
}

export default App;
