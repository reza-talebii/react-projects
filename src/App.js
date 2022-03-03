import { useSelector } from "react-redux";

import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  const isLogin = useSelector((state) => state.login.isLogin);

  return (
    <>
      <Header />
      {!isLogin && <Auth />}
      {isLogin && <UserProfile />}
      {isLogin && <Counter />}
    </>
  );
}

export default App;
