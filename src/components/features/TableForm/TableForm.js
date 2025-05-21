import { Form,Button } from "react-bootstrap";
import PropTypes from "prop-types";

const TableForm = ({
    status,setStatus,peopleAmount,setPeopleAmount,maxPeopleAmount,setMaxPeopleAmount,bill,setBill,handleUpdate
}) => {
    return (
        <Form>
            <Form.Group controlId="formStatus">
                <Form.Label><strong>Status:</strong></Form.Label>
                <Form.Control className="w-auto" as="select" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>Free</option>
                    <option>Busy</option>
                    <option>Cleaning</option>
                    <option>Reserved</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPeopleAmount">
                <Form.Label><strong>People: </strong>
                    <Form.Control className="w-auto" type="number" min={0} max={10} value={peopleAmount} onChange={(e) => setPeopleAmount(Number(e.target.value))} />
                    <span>/</span>
                    <Form.Control className="w-auto" type="number" min={0} max={10} value={maxPeopleAmount} onChange={(e) => setMaxPeopleAmount(Number(e.target.value))} />
                </Form.Label>
            </Form.Group>

            {status === "Busy" && (<Form.Group controlId="formBill">
                <Form.Label><strong>Bill: </strong> $
                    <Form.Control className="w-auto" type="number" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
                </Form.Label>
            </Form.Group>)}
            <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Form>
    );
};

TableForm.propTypes = {
    status: PropTypes.string.isRequired,
    setStatus: PropTypes.func.isRequired,
    peopleAmount: PropTypes.number.isRequired,
    setPeopleAmount: PropTypes.func.isRequired,
    maxPeopleAmount: PropTypes.number.isRequired,
    setMaxPeopleAmount: PropTypes.func.isRequired,
    bill: PropTypes.number.isRequired,
    setBill: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired,
};

export default TableForm;