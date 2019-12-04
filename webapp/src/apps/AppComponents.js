import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Index from "./Index.js";
import Trending from "./Trending.js";
import MenuPosts from "./MenuPosts.js";
import LatestNews from "./LatestNews.js";
import PostDetail from "./PostDetail.js";
import SearchResult from "./SearchResult.js";
import SubmenuPosts from "./SubmenuPosts.js";

class AppComponent extends React.Component {
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route exact path="/news/" component={Index} />
					<Route exact path="/news/sector/" component={MenuPosts} />
					<Route exact path="/news/trending/" component={Trending} />
					<Route exact path="/news/latest/" component={LatestNews} />
					<Route exact path="/news/post-detail/" component={PostDetail} />
					<Route exact path="/news/search/" component={SearchResult} />
					<Route exact path="/news/sector/banking/" component={SubmenuPosts} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default AppComponent;