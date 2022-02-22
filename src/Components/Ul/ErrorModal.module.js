import classes from "./ErrorModal.module.css";

import Card from "./Card";
import Button from "./Button";

const ErrorModule = (props) => {
  return (
    <section>
      <section className={classes.backdrop} onClick={props.onClose} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <section className={classes.content}>
          <p>{props.massage}</p>
        </section>
        <footer className={classes.actions}>
          <Button onClick={props.onClose}>Okay</Button>
        </footer>
      </Card>
    </section>
  );
};

export default ErrorModule;
