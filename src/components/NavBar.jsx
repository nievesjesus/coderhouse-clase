import React, {Fragment} from 'react';


const NavBar = ({logo }) => {
    return (
    <Fragment>
        <img src={logo} className="App-logo" alt="logo" />
    </Fragment>
    )
}

export default NavBar;