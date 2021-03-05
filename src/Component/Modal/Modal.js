import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    title,
    buttonColor,
    cta_primary,
    cta_sec,
    handleFormSubmit,
    children,
    isModalOpen,
    setModelOpen
  } = props;

//   const [modal, setModal] = useState(false);

  const toggle = () => setModelOpen(!isModalOpen);

  return (
    <div>
      <Button color={buttonColor} onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={isModalOpen} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
           {children}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleFormSubmit}>{cta_primary}</Button>{' '}
          <Button color="secondary" onClick={toggle}>{cta_sec}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;

ModalExample.defaultProps={
  buttonColor: 'primary',
    cta_primary:"Ok",
    cta_sec:"Cancel"
}

ModalExample.protoTypes = {
    title:PropTypes.string.isRequired,
    buttonColor: PropTypes.string
}