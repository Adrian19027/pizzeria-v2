import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
    return (
        <div className="d-flex align-items-center gap-2 my-4">
            <Spinner animation="border" role="status" />
            <span>Ładowanie danych…</span>
        </div>
    );
};

export default LoadingSpinner;