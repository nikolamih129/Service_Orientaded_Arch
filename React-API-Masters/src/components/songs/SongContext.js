import React, { useContext, useState } from "react";
import axios from 'axios';
import constants from '../../constants';


const SongContext = React.createContext();

export function useSong() {
    return useContext(SongContext);
}
export function SongProvider(props) {

    const [selectedSortBy, setSelectedSortBy] = useState("");
    const [listView, setListView] = useState(true);
    const [songs, setSongs] = useState([]);

    const fetchSongs = (path, params) => {
        axios.get(`${constants.baseUrl}${path}` , {
            params: {...params, api_key: constants.apiKey}
        })
        .then(response => {
            setSongs(response.data.results);
        })
    }

    return (
        <SongContext.Provider value={{
                selectedSortBy, 
                setSelectedSortBy,
                songs,
                setSongs,
                fetchSongs,
                listView,
                setListView,
            }}>
            {props.children}
        </SongContext.Provider>
    )
}