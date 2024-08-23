import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useForm} from "react-hook-form";
function Create({showCreate,setShowCreate,register,errors,handleSubmit,onSubmitCreate,academicPerformance}){
    const handleCloseCreate = () => setShowCreate(false);
    return(
        <>
            <Modal show={showCreate} onHide={handleCloseCreate}>
                <Modal.Header closeButton>
                    <Modal.Title>CREATE NEW STUDENT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmitCreate)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" {...register("nameStudent", {required: true, maxLength: 100})} />
                            {errors.name && <span className="text-red-600">This field is required</span>}<br/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" {...register("addressStudent", {required: true})}/>
                            {errors.address && <span className="text-red-600">This field is required</span>}<br/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mark</Form.Label>
                            <Form.Control type="text" {...register("mark", {required: true})}/>
                            {errors.mark && <span className="text-red-600">This field is required</span>}<br/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Academic performance</Form.Label>
                            <Form.Select type="password"
                                         placeholder="Password" {...register("idAcademicPerformance", {required: true})}>
                                {academicPerformance.map((academicPerformance) => (
                                    <option key={academicPerformance.idAcademicPerformance} value={academicPerformance.idAcademicPerformance}>{academicPerformance.nameAcademicPerformance}</option>
                                ))
                                }
                            </Form.Select>
                            {errors.academicPerformance && <span className="text-red-600">This field is required</span>}<br/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCreate}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Create;