import SongListItem from "./SongListItem";
import NoResults from "./NoResults";
import {Card, ButtonGroup, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import SongGridItem from "./SongGridItem";
import { useSelector, useDispatch } from 'react-redux';
import { setListView } from "../../redux/actions";

function SongList(props) {

    const listView = useSelector((state) => state.listView);
    const dispatch = useDispatch();
    const songs = useSelector((state) => state.songs);

    const renderSongs = () => {
        if(!songs.length) {
            return <NoResults title={'No results found!'}/>
        }
        return listView ? getSongListItems() : getSongGridItems();
    }

    function getSongListItems() {
        return songs.map(song => {
            return <SongListItem 
                key={song.key}
                song={song}
                >
            </SongListItem>
        })
    }

    function getSongGridItems() {
        return songs.map(song => {
            return <SongGridItem 
                key={song.key}
                song={song}
                >
            </SongGridItem>
        })
    }

    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title>Results</Card.Title>
                    <ButtonGroup aria-label="List switch">
                        <Button variant={listView ? 'primary': 'outline-primary'}
                            onClick={()=> dispatch(setListView(true))}>
                            <FontAwesomeIcon icon={faThList}/>
                        </Button>
                        <Button variant={listView ? 'outline-primary': 'primary'}
                            onClick={()=> dispatch(setListView(false))}>
                            <FontAwesomeIcon icon={faGripHorizontal}/>
                        </Button>
                    </ButtonGroup>
                </div>
                <hr/>
                <div className="row">
                    {renderSongs()}
                </div>
            </Card.Body>
        </Card>

    )
}
export default SongList;