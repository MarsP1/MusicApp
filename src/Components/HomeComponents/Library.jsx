import { Link } from "react-router-dom"

import LibraryWindow from "../../assets/LibraryWindow.svg";

function Library() {

    return (
        <div className="Window-Library">
            <img className="Panel-Library" src={LibraryWindow}/>

            <div className="PlaylistGrid">

                <Link className="PlaylistLink" to="/playlist/1">
                    <img className="Playlist" src="https://media.discordapp.net/attachments/710615755254661250/1503870692008001788/maxresdefault.png?ex=6a04ec39&is=6a039ab9&hm=942e88eba97237372c142e3958afba38610eee80a6a71428a8c86ad23065f4d4&=&format=webp&quality=lossless" />
                </Link>

                <Link className="PlaylistLink" to="/playlist/2">
                    <img className="Playlist" src="https://i.pinimg.com/1200x/21/1c/35/211c354548a872dc63622437075c772b.jpg" />
                </Link>

                <Link className="PlaylistLink" to="/playlist/3">
                    <img className="Playlist" src="https://i.pinimg.com/1200x/60/f7/81/60f781946aa41b1c22d755da984f3fa4.jpg" />
                </Link>

                <Link className="PlaylistLink" to="/playlist/4">
                    <img className="Playlist" src="https://i.pinimg.com/736x/81/db/76/81db76f4fed6412ffd5982e15fcad036.jpg" />
                </Link>

            </div>

        </div>
    )
}
export default Library