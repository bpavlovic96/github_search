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
    if (username) {
      Promise.all([
        fetch(`https://api.github.com/users/${username}`).then((res) =>
          res.json()
        ),
        fetch(`https://api.github.com/users/${username}/repos`).then((res) =>
          res.json()
        ),
      ]).then((data) => {
        setUser(data[0]);
        setRepos(data[1]);
      });
    }
  }, [username]);

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
