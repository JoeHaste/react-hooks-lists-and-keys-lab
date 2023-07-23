import React from "react";

function LInkComponent(props){
  return <a key={props.index} href={props.link}>{props.link}</a>
}

function NavBar() {
  const links = ["home", "about", "projects"];
  const listlinks = links.map((link, index) => {
    return <LInkComponent key={index} href={link} link={link}/>
  })

  return <nav>{listlinks}</nav>;
}

export default NavBar;
