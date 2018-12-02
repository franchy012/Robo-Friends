import React from 'react';
import '../components/Scroll.css'

const Scroll = (props) => {
    return (
        <div style={{overflow:'scroll', height:'500px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;