import {Form} from "react-bootstrap";
import {useSong} from "../songs/SongContext";

function SortBy(props) {
    const {selectedSortBy, setSelectedSortBy} = useSong();
    const options = [
        {
            value: "",
            title: "Farruko",
        },
        {
            value: "",
            title: "Elton John",
        },
        {
            value: "",
            title: "Dua Lipa",
        },
    ]

    function getOptions() {
        return options.map(option => {
            return <option 
                    key={option.value}
                    value={option.value}>
                {option.title}
            </option>
        })
    }

    return (
        <Form.Group 
            className="mb-3" 
            controlId="filterForm.ControlSelect1">
            <Form.Label>Choose artist</Form.Label>
            <Form.Select
                value={selectedSortBy}
                onChange={e => setSelectedSortBy(e.target.value)}>
                {getOptions()}
            </Form.Select>
        </Form.Group>
    )
}
export default SortBy;