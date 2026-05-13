import { useParams } from "react-router-dom"

import Library from "../Components/HomeComponents/Library";





function Player() {

    const { id } = useParams();

    return (

        <>
            <Library playerid={id} />

        </>
    )
}
export default Player