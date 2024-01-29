export default function ButtonForAside({ icon, text, onSelected }) {
  return (
    <>
      <button
        id="button-aside"
        onClick={onSelected}
        key={text}
      >
        <span> {icon} </span>
        <div> {text} </div>
      </button>
    </>
  );
}
