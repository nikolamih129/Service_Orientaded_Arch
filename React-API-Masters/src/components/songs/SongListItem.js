import FavoriteButton from "./FavoriteButton";

const defaultPoster = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/No_music.svg/768px-No_music.svg.png';

function SongListItem({song}) {

    function getPoster() {
        return `${song.share.image || defaultPoster}`;
    }

    return (
        <>
            <div className="d-flex py-1">
                <div className="zoom"><img className="song-poster" src={getPoster()} alt=""/></div>
                <div className="px-3 flex-grow-1">
                    <div className="d-flex align-items-start justify-content-between">
                        <div>
                            <div className="fw-bold song-title">{song.title}</div>
                            <div className="fw song-title">{song.subtitle}</div>
                        </div>
                        <FavoriteButton song={song}/>
                    </div>
                </div>
            </div>
            <hr className="my-1"></hr>
        </>
    )
}
export default SongListItem;