import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="navbar">
            <ul>
                <button><li><FontAwesomeIcon icon={icon({name: 'house'})}/> Home</li></button>
                <button><li><FontAwesomeIcon icon={icon({name: 'folder-open'})}/> Projects</li></button>
                <button><li><FontAwesomeIcon icon={icon({name: 'file-lines'})}/> Resumé</li></button>
                <button><li><FontAwesomeIcon icon={icon({name: 'envelope'})}/> Contact</li></button>
            </ul>
        </div>
    );
};

export default NavBar;