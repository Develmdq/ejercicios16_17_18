import { useRef } from "react";

const Child = ({ name, send, update }) => {
  const messageRef = useRef("");
  const nameRef = useRef("");

  const pressButton = () => {
    const text = messageRef.current.value;
    alert(`Text in Input : ${text}`);
  };
  const submitName = (e) => {
    e.preventDefault();
    update(nameRef.current.value);
  };
  const pressButtonParams = (text) => alert(`Text: ${text}`);

  return (
    <div style={{ background: "cyan", padding: "30px" }}>
      <p onMouseOver={() => console.log("On Mouse Over")}>Hello, {name}</p>
      <button onClick={() => console.log("On Click Button")}>Button 1</button>
      <button onClick={pressButton}>Button 2</button>
      <button onClick={() => pressButtonParams("Hello")}>Button 3</button>
      <input
        type="text"
        onFocus={() => console.log("Input Focused")}
        onChange={(e) => console.log("Input Changed", e.target.value)}
        onCopy={() => console.log("Copied text from Input Text")}
        placeholder="Send a text to your Father"
        ref={messageRef}
      />
      <button onClick={() => send(messageRef.current.value)}>
        Send Message
      </button>
      <div style={{ marginTop: "20px" }}>
        <form action="/" onSubmit={submitName}>
          <input type="text" placeholder="New Name" ref={nameRef} />
          <button type="submit">Update Name</button>
        </form>
      </div>
    </div>
  );
};

export default Child;
