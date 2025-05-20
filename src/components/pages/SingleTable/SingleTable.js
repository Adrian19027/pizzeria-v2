import { Button, Form} from "react-bootstrap";
import { getTableById } from "../../../redux/tablesRedux";
import PageTitle from "../../common/PageTitle/PageTitle";
import { useSelector, useDispatch} from "react-redux";
import { useParams,useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
import { updateTableOnServer } from "../../../redux/tablesRedux";

const SingleTable = () => {
    const { id } = useParams();
    const table = useSelector(state => getTableById(state, id));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!table) {
            navigate('/');
        }
    }, [table, navigate]);


    const [status, setStatus] = useState('');
    const [peopleAmount, setPeopleAmount] = useState(0);
    const [bill, setBill] = useState(0);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(0);

    useEffect(() => {
        if (table) {
            setStatus(table.status);
            setPeopleAmount(table.peopleAmount);
            setBill(table.bill);
            setMaxPeopleAmount(table.maxPeopleAmount);
        }
    }, [table]);
    
    useEffect(() => {
        if (status === "Cleaning" || status === "Free") {
            setPeopleAmount(0);
        }
    }, [status]);


    useEffect(() => {
        if (Number(peopleAmount) > Number(maxPeopleAmount)) {
            setPeopleAmount(Number(maxPeopleAmount));
        }
    }, [maxPeopleAmount, peopleAmount]);
    
    if (!table) return null;

    const handleUpdate = () => {
        const updatedTable = {
            id: table.id,
            status: status || "Free",
            peopleAmount: peopleAmount || 0,
            maxPeopleAmount: maxPeopleAmount || 0,
            bill: bill || 0,
        };
        dispatch(updateTableOnServer(table.id, updatedTable));
    };

    return (
    <>
            <PageTitle>Table {table.id}</PageTitle>
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
                        <Form.Control className="w-auto" type="number" min={0} max={10} value={maxPeopleAmount} onChange={(e) => setMaxPeopleAmount(Number(e.target.value))}/>
                    </Form.Label>
                </Form.Group>

                {status === "Busy" && (<Form.Group controlId="formBill">
                    <Form.Label><strong>Bill: </strong> $
                        <Form.Control className="w-auto" type="number" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
                    </Form.Label>
                </Form.Group>)}
                <Button variant="primary" onClick={handleUpdate}>Update</Button>
            </Form>
    </> 
    )
}

export default SingleTable;