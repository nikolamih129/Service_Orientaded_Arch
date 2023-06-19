import { Card, Form, Button } from "react-bootstrap";
import SortBy from "./SortBy";
import {useSong} from "../songs/SongContext";
import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { getSongs } from "../../redux/actions";

function Filters(props) {
    
    const dispatch = useDispatch();

    const {
        selectedSortBy,
    } = useSong();

    useEffect(() => {
        fetchSongs();
    },);

    function filtersOnSubmit(e) {
        e.preventDefault();
        fetchSongs();
    }

    function fetchSongs() {
        dispatch(getSongs('charts/track', {
            "sort_by": selectedSortBy,
        }))
    }

    return (
        <Card className="mt-2 mt-md-0">
            <Card.Body>
                <Card.Title className="mb-3">Sort by Artist</Card.Title>
                <Form onSubmit={filtersOnSubmit}>
                    <SortBy/>
                    <Button 
                        variant="primary" 
                        type="submit">
                        Seacrh
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default Filters;