import React, { Component } from 'react';
import DefaultTemplate from '../../templates/default';
import Gap from '../../gap/gap';
import './search.scss';

export default class Search extends Component {
	onSearch(event){
		if(event.keyCode === 13){
			if(document.getElementById('search').value === ''){
				alert('Please input search string.');
			}else {
				window.location.href = "/post-list?type=search-filter&search=" + document.getElementById('search').value;
			}
		}
	}

	render () {
		return (
			<DefaultTemplate pageType="search">
				<div className="page-container page-search" align="left">
					<Gap hei="3" />
					<div className="content">
						<span>search</span><br/>
						<input type="text" onKeyUp={this.onSearch.bind(this)} id="search"/>
					</div>
				</div>
			</DefaultTemplate>
		);
	}
}