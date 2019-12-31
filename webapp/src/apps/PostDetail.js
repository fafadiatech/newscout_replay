import React from 'react';
import moment from 'moment';
import logo from '../logo.png';
import { CardItem, Menu, SectionTitle, SideBox } from 'newscout';

import { MENUS, ARTICLE_DETAIL_URL } from '../utils/Constants';
import { getRequest } from '../utils/Utils';

import 'newscout/assets/Menu.css'
import 'newscout/assets/CardItem.css'
import 'newscout/assets/SectionTitle.css'
import 'newscout/assets/SideBox.css'

const DOMAIN = "domain=newscout";
const URL = "/news/search/";

class PostDetail extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			menus: [],
			article: {},
			article_id: this.props.match.params.articleid
		};
	}

	getArticleDetail = (data) => {
		var state = this.state;
		state.article.src = "http://images.newscout.in/unsafe/1080x610/smart/"+decodeURIComponent(data.body.article.cover_image);
		state.article.altText = data.body.article.title;
		state.article.header = data.body.article.title;
		state.article.caption = data.body.article.blurb;
		state.article.source = data.body.article.source;
		state.article.url = data.body.article.source_url;
		state.article.date = moment(data.body.article.published_on).format('YYYY-MM-DD');
		this.setState(state)
	}

	getMenu = (data) => {
		var menus_array = []
		data.body.results.forEach((item, index) => {
			if(item.heading){
				var heading_dict = {}
				heading_dict['itemtext'] = item.heading.name
				heading_dict['itemurl'] = item.heading.name.replace(" ", "-").toLowerCase()
				heading_dict['item_id'] = item.heading.category_id
				menus_array.push(heading_dict)
			}
		})
		this.setState({
			menus: menus_array
		})
	}

	componentDidMount() {
		getRequest(MENUS+"?"+DOMAIN, this.getMenu);
		getRequest(ARTICLE_DETAIL_URL+this.state.article_id, this.getArticleDetail);
	}

	render() {
		var { menus, article } = this.state;
		return(
			<React.Fragment>
				<Menu logo={logo} navitems={menus} url={URL} />
				<div className="pt-70">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-7 offset-lg-1 col-12 mb-4">
								<div className="card-container-detail">
									<CardItem 
										image={article.src}
										title={article.header}
										description={article.caption}
										uploaded_on={article.date}
										uploaded_by={article.source}
										posturl={article.url} />
								</div>
							</div>
							<div className="col-lg-3 col-12 mb-4">
								<div className="side-box">
									<SectionTitle title="More News" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default PostDetail
// const wrapper = document.getElementById("post-detail");
// wrapper ? ReactDOM.render(<PostDetail />, wrapper) : null;