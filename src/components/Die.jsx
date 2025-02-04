export default function Die(props) {

  return (
    <main>
      <button
        style={{ backgroundColor: props.isHeld ? "#59E391" : "" }}
        onClick={props.hold}
      >
        {props.value}
      </button>
    </main>
  );
}
