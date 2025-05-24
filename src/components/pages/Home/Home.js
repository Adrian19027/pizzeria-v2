import { useDispatch, useSelector } from "react-redux";
import { fetchTables, getAllTables } from "../../../redux/tablesRedux";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import TableList from "../../views/TableList/TableList";

const Home = () => {
    const tables = useSelector(getAllTables);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchTables()).finally(() => setLoading(false));
    }, [dispatch]);

    return (
        <>
            {loading ? <LoadingSpinner />
            : <TableList tables={tables} />}
        </>
    )
};

export default Home;