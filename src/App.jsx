import { useState } from "react";
import Aside from "./components/Aside";
import Main from "./components/Main";
import MainHome from "./components/main/MainHome.jsx";
import text from "./data.js";
import imgProfile from './assets/WhatsApp Image 2023-12-28 at 08.22.59.jpeg'

const instagram = "https://www.instagram.com/lirontzarfati1?igsh=MTM0MmgwdDM1NDE2ZA%3D%3D&utm_source=qr"

const instagramImg = <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1" className="icon"/>

const linkedin = "https://www.linkedin.com/in/liron-tzarfati/"

const linkedinImg = <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/30/linkedin.png" alt="linkedin" className="icon"/>

const github = "https://github.com/LironTzarafti"

const githubImg = <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/github.png" alt="github" className="icon"/>


let main;


function App() {
  const [currTitle, setCurrTitle] = useState("");
  const [currMain, setCurrMain] = useState(main);

  main = (
    <div id="main-home">
      <img src={imgProfile} alt="img-main" className="img-main"/>
      <h1>Liron Tzarfati</h1>
      <nav>QA Engineer || Programming Teacher</nav>
      <div className="link-btn">
        <button><a href={instagram}>{instagramImg}</a></button>
        <button><a href={linkedin}>{linkedinImg}</a></button>
        <button><a href={github}>{githubImg}</a></button>
      </div>
    </div>
  );;

  

  function handleClick(title) {
    setCurrMain(main)
    console.log(title);

    if (title === "about") {
      main = (
        <p>about</p>
      );
    }else if(title === "services"){
      main = (
        <p>services</p>
      );

    }else if(title === "portfolio"){
      main = (
        <p>portfolio</p>
      );
      
    }else if(title === "contact"){
      main = (
        <p>contact</p>
      );

    }

    setCurrMain(main);
    if(title === 'home'){
      setCurrTitle("")
    }else{
      setCurrTitle(title);
    }
    
  }

  return (
    <>
      <main id="app">
        <Aside onSelected={handleClick} />
        {/* <Aside onSelected={(text) => handleClick(text)} /> */}
        <Main title={currTitle} main={currMain} />
      </main>
    </>
  );
}

export default App;
