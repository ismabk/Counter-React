import React from "react";
import ReactDOM from "react-dom";

import "../styles/Index.scss";

import Counter from "./component/Counter.jsx";

let counter = 0;

let renderCounter = () => {
	// Calculates a module to obtain every digit
	const fourth = Math.floor(counter / 1000) % 10;
	const third = Math.floor(counter / 100) % 10;
	const second = Math.floor(counter / 10) % 10;
	const first = counter % 10;
	counter++;
	ReactDOM.render(
		<Counter
			firstDigit={first}
			secondDigit={second}
			thirdDigit={third}
			fourthDigit={fourth}
		/>,
		document.querySelector("#app")
	);
};

// SetInterval to render the component every one second
setInterval(renderCounter, 1000);
