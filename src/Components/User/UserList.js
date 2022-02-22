import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <section className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} {user.age}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserList;
