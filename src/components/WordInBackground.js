import "../style/style.css";

function WordInBackground(props) {
  console.log(props);
  return (
    <div
      className="absolute w-full overflow-hidden h-96  flex justify-center items-center caveatFont font-bold"
      style={{
        backgroundColor: "transparent",
        backgroundImage: props.background
          ? "linear-gradient(0deg, #FFFFFF 0%, #F0EBE3 100%)"
          : "none",
        left: props.left + "%",
        top: props.top + "%",
        transform: `translate(-50%, -50%)`,
      }}
    >
      <p className={`text-18xl tracking-widest text-nowrap pointer-events-none select-none`} style={
        {
          color: props.moreLighter ?  "rgba(0, 0, 0, 0.006)" : "rgba(0, 0, 0, 0.03)",
        }
      }>
        {props.word}
      </p>
    </div>
  );
}
export default WordInBackground;
