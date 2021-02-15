import { useState, useEffect } from "react";

const CONSTANTS = {
  DELETING_SPEED: 30,
  TYPING_SPEED: 50,
}

const Typewriter = ({ messages, heading }) => {
  const [state, setState] = useState({
    text: "",
    message: "",
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      setState(cs => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs)
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (state.text.includes(state.message) && state.loopNum !== messages.length) {
        setTimeout(() => {
                setState(cs => ({
                  ...cs,
                  loopNum: cs.loopNum + 1,
                  message: getMessage(cs, messages)
                }))
              }, 700);
    }
  }, [state.text, state.message, messages]);

  function getCurrentText(currentState) {
    return currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState, data) {
    return currentState.text + data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState) {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  }

  return (
  <div className="content-about">
    <h1 className="content-header">{ heading }&nbsp;
    </h1>
    <span className="content-typewriter">{state.text}
        <span id="cursor" />
    </span>

  </div>
  );
}

export default Typewriter;