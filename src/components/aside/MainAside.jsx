import ButtonForAside from "./ButtonForAside";

export default function MainAside({ onSelected }) {
  const home = <span className="material-symbols-outlined">home</span>;
  const about = <span className="material-symbols-outlined">person</span>;
  const services = <span className="material-symbols-outlined">list</span>;
  const portfolio = <span className="material-symbols-outlined">package</span>;
  const contact = <span className="material-symbols-outlined">sms</span>;

  let handleClick = (title) => {
    onSelected(title);
  };

  return (
    <>
      <main id="main-aside">
        <ButtonForAside
          icon={home}
          text={"Home"}
          onSelected={() => handleClick("home")}
        />
        <ButtonForAside
          icon={about}
          text={"About"}
          onSelected={() => handleClick("about")}
        />
        <ButtonForAside
          icon={services}
          text={"Services"}
          onSelected={() => handleClick("services")}
        />
        <ButtonForAside
          icon={portfolio}
          text={"Portfolio"}
          onSelected={() => handleClick("portfolio")}
        />
        <ButtonForAside
          icon={contact}
          text={"Contact"}
          onSelected={() => handleClick("contact")}
        />
      </main>
    </>
  );
}
