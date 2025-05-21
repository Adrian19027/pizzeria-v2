import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../common/PageTitle/PageTitle";
import { fetchTables, getAllTables } from "../../../redux/tablesRedux";
import { Spinner,Row,Col,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Home = () => {
    const tables = useSelector(getAllTables);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchTables()).finally(() => setLoading(false));
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <div className="d-flex align-items-center gap-2 my-4">
                    <Spinner animation="border" role="status" />
                    <span>Ładowanie danych…</span>
                </div>
            ) : (
                <>
                    <PageTitle>All tables</PageTitle>
                    {tables.map(table => (
                        <Row key={table.id} className="align-items-center mb-3 border-bottom pb-1">
                            <Col xs={3}>
                                <strong>Table {table.id}</strong>
                            </Col>
                            <Col xs={5}>
                                <strong>Status:</strong> {table.status}
                            </Col>
                            <Col xs={4}>
                                <Button as={Link} to={`/table/${table.id}`} variant="primary">
                                    Show more
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </>
            )}
        </>
    )
};

export default Home;