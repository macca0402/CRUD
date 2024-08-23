import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Delete({showDelete, setShowDelete, studentDelete, removeStudent}) {
    const closeDelete = () => setShowDelete(false);
    return (
        <Modal show={showDelete} onHide={closeDelete}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {studentDelete ? (
                    <>
                        Are you sure about removing <b>{studentDelete.nameStudent}</b>?
                    </>
                ) : (
                    <p>No student selected for deletion.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeDelete}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={removeStudent} disabled={!studentDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Delete;
