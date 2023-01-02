import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {

//   const enterHandler = (event) => {
//     if (event.keyCode === 13) {
//      // props.onConfirm();
//       console.log(event)
//     }
//   };

  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
