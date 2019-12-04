import React from 'react';
import logo from '../logo.png';
import { SectionTitle, Menu, SliderItem, SideBox, TabItem, JumboBox } from 'newscout';

import 'newscout/assets/Menu.css'
import 'newscout/assets/SliderItem.css'
import 'newscout/assets/SideBox.css'
import 'newscout/assets/TabItem.css'
import 'newscout/assets/JumboBox.css'
import 'newscout/assets/SectionTitle.css'

import config_data from '../config.json';

class App extends React.Component {
	render() {

		return (
			<React.Fragment>
				<Menu logo={logo} navitems={config_data[0].menuitems} />
				<div className="pt-70">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-12 mb-4">
								<SliderItem slides={config_data[2].posts} />
							</div>
							<div className="col-lg-4 col-12 mb-4">
								<div className="side-box">
									<SectionTitle title="Latest News" />
									<SideBox posts={config_data[2].posts} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="pt-70">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-12 mb-4">
								<div className="tab-box">
									<TabItem tabnav={config_data[1].tabnav} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="pt-70 bg-gray">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-12 mb-4">
								<div className="side-box">
									<SectionTitle title="Finance" />
									<SideBox posts={config_data[2].posts} />
								</div>
							</div>
							<div className="col-lg-6 col-12 mb-4">
								<div className="side-box">
									<SectionTitle title="Economics" />
									<SideBox posts={config_data[2].posts} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="pt-70">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-12 mb-4">
								<div className="side-box">
									<SectionTitle title="Misc" />
									<JumboBox posts={config_data[2].posts} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
//const wrapper = document.getElementById("index");
//wrapper ? ReactDOM.render(<App />, wrapper) : null;
