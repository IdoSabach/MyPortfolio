import TopAside from "./aside/TopAside"
import MainAside from "./aside/MainAside"
import Footer from "./aside/Footer"

export default function Aside({onSelected}){

  function print(title){
    onSelected(title)
  }

  return (
    <>
      <section id="aside">
        <TopAside />
        <MainAside onSelected={(text) => print(text)} />
        <Footer />
      </section>
    </>
  )
}