import React from "react";

function Link(props) {
  return (
    <div>
      <a href={props.href} className="text-m hover:text-orange-500">{props.text}</a>
    </div>
  );
}

export default Link;