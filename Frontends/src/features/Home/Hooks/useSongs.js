import { getSong, getSongsList } from "../service/song.api";
import { useCallback, useContext } from "react";
import { SongContext } from "../songContext";


export const useSong = () => {
    const context = useContext(SongContext)

    const { loading, setLoading, song, setSong, library, setLibrary } = context

    const handleGetSong = useCallback(async ({ mood }) => {
        setLoading(true)
        try {
            const data = await getSong({ mood })
            if (data?.song?.url) {
                setSong(data.song)
            }
        } catch (error) {
            console.error("Failed to load song:", error)
        } finally {
            setLoading(false)
        }
    }, [setLoading, setSong])

    const handleGetLibrary = useCallback(async () => {
        try {
            const data = await getSongsList()
            setLibrary(Array.isArray(data?.songs) ? data.songs : [])
        } catch (error) {
            console.error("Failed to load library:", error)
        }
    }, [setLibrary])

    const handlePlaySong = useCallback((selectedSong) => {
        if (selectedSong?.url) {
            setSong(selectedSong)
        }
    }, [setSong])

    return ({ loading, song, library, handleGetSong, handleGetLibrary, handlePlaySong })

}