

export default function MainHome() {
  return (
    <>
      <div id="main-home">
        <img src={imgProfile} alt="img-main" className="img-main" />
        <h1>Liron Tzarfati</h1>
        <nav>QA Engineer || Programming Teacher</nav>
        <div className="link-btn">
          <button>
            <a href={instagram}>{instagramImg}</a>
          </button>
          <button>
            <a href={linkedin}>{linkedinImg}</a>
          </button>
          <button>
            <a href={github}>{githubImg}</a>
          </button>
        </div>
      </div>
    </>
  );
}
