import { Fragment } from 'react';
import classes from './Modal.module.css'
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}>{props.backdrop}</div>
}
const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div >{props.children}</div>
    </div>
  )
}
const Modal = (props) => {
  return <Fragment>
    <Backdrop onClick={props.onClick} />
    <ModalOverlays>{props.children}</ModalOverlays>
  </Fragment>
}
export default Modal;