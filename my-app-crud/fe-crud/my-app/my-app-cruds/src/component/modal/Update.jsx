import React, {useEffect} from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useForm} from "react-hook-form";

function Update({
                    showUpdate,
                    setShowUpdate,
                    onSubmitUpdate,
                    studentUpdate,
                    academicPerformance,
                    setStudentUpdate
                }) {
    const {register, reset, handleSubmit, formState: {errors}} = useForm();

    useEffect(() => {
        reset(studentUpdate);
    }, [studentUpdate, reset]);

    const closeUpdate = () => setShowUpdate(false);

    const handleUpdateChange = (e) => {
        const {name, value} = e.target;
        setStudentUpdate(prev => ({
            ...prev, [name]: value
        }));
    };

    return (
        <>
            <Modal show={showUpdate} onHide={closeUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>UPDATE STUDENT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmitUpdate)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={handleUpdateChange} type="text" {...register("nameStudent", {
                                required: true,
                                maxLength: 100
                            })} />
                            {errors.nameStudent && <span className="text-red-600">This field is required</span>}<br/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={handleUpdateChange}
                                          type="text" {...register("addressStudent", {required: true})}/>
                            {errors.addressStudent && <span className="text-red-600">This field is required</span>}<br/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mark</Form.Label>
                            <Form.Control onChange={handleUpdateChange}
                                          type="text" {...register("mark", {required: true})}/>
                            {errors.mark && <span className="text-red-600">This field is required</span>}<br/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Academic performance</Form.Label>
                            <Form.Select onChange={handleUpdateChange}
                                         {...register("idAcademicPerformance", {required: true})}>
                                {academicPerformance.map((academicPerformance) => (
                                    <option key={academicPerformance.idAcademicPerformance}
                                            value={academicPerformance.idAcademicPerformance}>
                                        {academicPerformance.nameAcademicPerformance}
                                    </option>
                                ))}
                            </Form.Select>
                            {errors.idAcademicPerformance &&
                                <span className="text-red-600">This field is required</span>}<br/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeUpdate}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Update;
