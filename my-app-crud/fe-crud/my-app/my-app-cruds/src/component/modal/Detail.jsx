import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Detail({ showDetail, setShowDetail, studentDetail, academicPerformance }) {
    const handleCloseDetail = () => setShowDetail(false);

    return (
        <Modal show={showDetail} onHide={handleCloseDetail}>
            <Modal.Header closeButton>
                <Modal.Title>STUDENT DETAILS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={studentDetail?.nameStudent || ''}
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            value={studentDetail?.address || ''}
                            readOnly
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mark</Form.Label>
                        <Form.Control
                            type="text"
                            value={studentDetail?.mark || ''}
                            readOnly
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Academic Performance</Form.Label>
                        <Form.Control
                            type="text"
                            value={
                                studentDetail?.nameAcademicPerformance || ''
                            }
                            readOnly
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDetail}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Detail;
