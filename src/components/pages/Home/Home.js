import { useSelector } from "react-redux";
import PageTitle from "../../common/PageTitle/PageTitle";
import { getAllTables } from "../../../redux/tablesRedux";
import { Row,Col,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Home = () => {
    const tables = useSelector(getAllTables);

    return (
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
    );
};

export default Home;