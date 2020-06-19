import React from "react";
import "./App.styles.scss";
import { Route } from "react-router-dom";
import PostPage from "./components/postPage/PostPage.component";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Route path="/" component={PostPage} />
			</div>
		);
	}
}

export default App;
