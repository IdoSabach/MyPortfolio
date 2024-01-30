import { useState } from "react";
import Aside from "./components/Aside";
import Main from "./components/Main";
import text from './data.js'



function App() {
  const [currTitle , setCurrTitle] = useState(text.home.title)
  const [currMain , setCurrMain] = useState(text.home.main)

  
  function handleClick(title){
    console.log(title)
    setCurrMain(text[title].main)
    setCurrTitle(text[title].title)
  }

  return (
    <>
      <main id="app">
        <Aside onSelected={handleClick} />
        {/* <Aside onSelected={(text) => handleClick(text)} /> */}
        <Main title={currTitle} main={currMain}/>
      </main>
    </>
  );
}

export default App;
