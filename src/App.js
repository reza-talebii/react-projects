import classes from "./App.module.css";

import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";

const App = () => {
  return (
    <>
      <section className={classes.container}>
        <Header />
        <Main />
      </section>
      <Footer />
    </>
  );
};

export default App;
