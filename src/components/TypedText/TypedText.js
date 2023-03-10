import React, { useEffect} from "react";
import Typed from "typed.js";
import "./TypedText.css"


function TypedText() {

  const el = React.useRef(null);
  const typed = React.useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'CSS',
        'HTML',
        'JavaScript',
        'Bootstrap',
        'React'
      ],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.reset();
    }
  }, [])

  return (
    <p>I can code <span ref={el}></span></p>
  )

}

export default TypedText