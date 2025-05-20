import { Button, Form } from "react-bootstrap";
import { getAllTables, getTableById } from "../../../redux/tablesRedux";
import PageTitle from "../../common/PageTitle/PageTitle";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";

const SingleTable = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const table = useSelector(state => getTableById(state, id));

    const [status, setStatus] = useState(table.status);
    const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
    const [bill, setBill] = useState(table.bill);

    if (!table) {
        return <PageTitle>Table not found</PageTitle>;
    }

    return (
    <>
            <PageTitle>Table {table.id}</PageTitle>
            <Form>
                <Form.Group controlId="formStatus">
                    <Form.Label><strong>Status:</strong></Form.Label>
                    <Form.Control as="select" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option>Free</option>
                        <option>Busy</option>
                        <option>Cleaning</option>
                        <option>Reserved</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formPeopleAmount">
                    <Form.Label><strong>People: </strong>
                        <Form.Control type="number" value={peopleAmount} onChange={(e) => setPeopleAmount(e.target.value)}/>
                    </Form.Label>
                </Form.Group>
                <Form.Group controlId="formBill">
                    <Form.Label><strong>Bill: </strong> $
                        <Form.Control type="number" value={bill} onChange={(e) => setBill(e.target.value)}/>
                    </Form.Label>
                </Form.Group>
                <Button variant="primary">Update</Button>
            </Form>
    </> 
    )
}

export default SingleTable;