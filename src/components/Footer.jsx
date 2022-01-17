import React, { Fragment } from 'react';

// class Footer extends React.Component {
//     render() {
//         const customStyle = {
//             backgroundColor: "red",
//             padding: "10px",
//             fontFamily: "Arial",
//             color: "white",
//             fontSize: "22px"
//         }

//         return(
//             <Fragment>
//                 <h1>hoola</h1>
//                 <div style={customStyle}>Hola soy el footer</div>            
//             </Fragment>

//         )
//     }
// }

const Footer = (props) => {
        const customStyle = {
            backgroundColor: "red",
            padding: "10px",
            fontFamily: "Arial",
            color: "white",
            fontSize: "22px"
        }
        return <Fragment>
            <div className="customList">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </div>
            <div style={customStyle}>{props.mensaje}</div>
        </Fragment>
}

export default Footer;