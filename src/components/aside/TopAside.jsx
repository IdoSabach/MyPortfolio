import img from "../../assets/imgLiron.jpeg"

export default function TopAside(){
  return (
    <>
      <section id="top-aside">
        <img src={img} alt="imgLiron" className="img-liron"/>
        <nav>
          <div>Liron Tzarfati</div>
          {/* <div>QA Engineer & Programming Teacher</div> */}
        </nav>
      </section>
    </>
  )
}