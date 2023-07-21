import styles from "./UserView.module.css";

function UserView({ user, repos }) {
  if (!user) {
    return null;
  }
  return (
    <div className={styles.container}>
      <img src={user.avatar_url} alt={user.name} />
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <p>{user.location}</p>
      <ul>
        {repos.map((repo) => {
          return <li key={repo.id}>{repo.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default UserView;
