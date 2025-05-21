import { getTableById } from "../../../redux/tablesRedux";
import PageTitle from "../../common/PageTitle/PageTitle";
import { useSelector, useDispatch} from "react-redux";
import { useParams,useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
import { updateTableOnServer } from "../../../redux/tablesRedux";
import TableForm from "../../features/TableForm/TableForm";
import PropTypes from "prop-types";

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
            setBill(0);
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
        dispatch(updateTableOnServer(table.id, updatedTable))
            .then(() => {
                navigate('/');
            });
    };

    return (
        <>
            <PageTitle>Table {table.id}</PageTitle>
            <TableForm
                status={status}
                setStatus={setStatus}
                peopleAmount={peopleAmount}
                setPeopleAmount={setPeopleAmount}
                maxPeopleAmount={maxPeopleAmount}
                setMaxPeopleAmount={setMaxPeopleAmount}
                bill={bill}
                setBill={setBill}
                handleUpdate={handleUpdate}
            />
        </>
    );
};

SingleTable.propTypes = {
    table: PropTypes.shape({
        id: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        peopleAmount: PropTypes.number.isRequired,
        maxPeopleAmount: PropTypes.number.isRequired,
        bill: PropTypes.number.isRequired
    }),
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default SingleTable;