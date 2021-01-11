import React, {Component} from 'react'; // import from a module, not a file or folder
import startlinkLogo from '../assets/images/Starlink_Logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={startlinkLogo} className="App-logo" alt="logo" />
                <p className="title">
                    StartLink Tracker
                </p>
            </header>
        );
    }
}

export default Header;