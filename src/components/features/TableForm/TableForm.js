import { Form,Button } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from './TableForm.module.scss'

const TableForm = ({
    status,setStatus,peopleAmount,setPeopleAmount,maxPeopleAmount,setMaxPeopleAmount,bill,setBill,handleUpdate
}) => {
    return (
        <Form>
            <Form.Group className={styles.formGroup} controlId="formStatus">
            <div className={styles.inlineGroup}>
                <Form.Label className={styles.label}><strong>Status:</strong></Form.Label>
                <Form.Control className={styles.select} as="select" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>Free</option>
                    <option>Busy</option>
                    <option>Cleaning</option>
                    <option>Reserved</option>
                </Form.Control>
            </div>
            </Form.Group>
            <Form.Group className={styles.formGroup} controlId="formPeopleAmount">
                <div className="d-flex align-items-center gap-2 mb-2">
                    <Form.Label className={styles.label}><strong>People: </strong></Form.Label>
                        <Form.Control size="sm" className={`w-auto ${styles.noArrows} ${styles.input}`} type="number" min={0} max={10} value={peopleAmount} onChange={(e) => setPeopleAmount(Number(e.target.value))} />
                        <span>/</span>
                        <Form.Control size="sm" className={`w-auto ${styles.noArrows} ${styles.input}`} type="number" min={0} max={10} value={maxPeopleAmount} onChange={(e) => setMaxPeopleAmount(Number(e.target.value))} />
                </div>
            </Form.Group>

            {status === "Busy" && (<Form.Group className={styles.formGroup} controlId="formBill">
                <div className="d-flex align-items-center gap-2 mb-2">
                    <Form.Label className={styles.label}><strong>Bill: </strong></Form.Label>
                    <span>$</span>
                    <Form.Control className={`w-auto ${styles.noArrows} ${styles.input}`} type="number" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
                </div>
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