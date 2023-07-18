import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{new Date().getFullYear()}</p>
			</header>
		</div>
	);
	return createElement(
		"div",
		{ className: "App" },
		createElement(
			"header",
			{ className: "App-header" },
			createElement("img", {
				src: logo,
				className: "App-logo",
				alt: "logo",
			}),
			createElement(
				"p",
				null,
				"Edit ",
				createElement("code", null, "src/App.js"),
				" and save to reload."
			),
			createElement(
				"a",
				{
					className: "App-link",
					href: "<https://reactjs.org>",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React"
			),
			createElement("p", null, new Date().getFullYear())
		)
	);
};

/*
Это декларативный стиль, так как с помощью кода описано, что должно быть отображено, а не как это должно быть сделано.
*/
