import FavoriteButton from "./FavoriteButton";

const defaultPoster = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/No_music.svg/768px-No_music.svg.png';

function SongGridItem({song}) {

    function getPoster() {
        return `${song.share.image || defaultPoster}`;
    }
    return (
        <>
            <div className="col-md-4">
                <div className="grid-song-container img-thumbnail mb-3">
                    <div className="d-flex">
                        <img className="song-poster w-50" src={getPoster()} alt=""/>
                        <div className="px-2">
                            <FavoriteButton song={song}/>
                            <div className="fw-bold song-title py-1">{song.title}</div>
                            <div className="fw song-title py-1">{song.subtitle}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SongGridItem;