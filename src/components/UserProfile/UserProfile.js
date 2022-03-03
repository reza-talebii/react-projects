import { useSelector } from "react-redux";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const { email, password } = useSelector((state) => state.login.user);

  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <h3>
        Email :<h5>{email}</h5>
      </h3>
      <h4>
        Password : <h5>{password}</h5>{" "}
      </h4>
    </main>
  );
};

export default UserProfile;
