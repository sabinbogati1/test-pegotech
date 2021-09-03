import { Button, Modal } from 'react-bootstrap';

const DetailModal = ({ showModal, handleClose, registerObj }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">Name: {registerObj.name}</div>
        <div className="mb-3">Email: {registerObj.email}</div>
        <div className="mb-3">Address: {registerObj.address}</div>
        <div className="mb-3">DOB: {registerObj.dob}</div>
        <div className="mb-3">Country: {registerObj.country}</div>
        <div className="mb-3">About You: {registerObj.aboutYou}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailModal;
