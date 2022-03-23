import classes from "./App.module.css";

import Header from "./Layout/Header";
import Main from "./Layout/Main";

const App = () => {
  return (
    <section className={classes.container}>
      <Header />
      <Main />
    </section>
  );
};

export default App;
