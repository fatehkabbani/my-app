import './../style/cursor.css';
import React from 'react';
// import useMousePosition from './../scripts/useMousePosition';
function Cursor (){

    const transform = `translate3d(0px, 0px , 0px)`;
    return(
        <div
        className="cursor"
        style={{
         transform,
        }}
      ></div>
    );
}
export default Cursor;

