import React from 'react';
import Layout from "./components/Layout/Layout";
import Blog from "./containers/Blog/Blog";

class App extends React.Component {
	render() {
		return <Layout>
			<Blog/>
		</Layout>;
	}
}

export default App;
