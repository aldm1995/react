import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (<section id="listings">
			Search here
		<section className="search-area">
			<input type="text" name="search" />	
		</section>
		 <section className="sortby-area">
			<div className="results">390 results found</div>
			<div className="sort-options">
				<select name="sortby" className="sortby">
					<option value="price-asc">Highest Price</option>
					<option value="price-dsc">Lowest Price</option>
				</select>
				<div className="view">
					<i className="fas fa-th-list"></i>
					<i className="fas fa-th"></i>
				</div>
			</div>
		</section>

		<section className="listings-results">
			<div className="listing">
				<div className="listing-img">
					<span className="address">Beverly Hills, CA</span>
					<div className="details">
						<div className="col-md-3">
							<div className="user-img"> </div>
						</div>
			
						<div className="col-md-9">
							<div className="user-details">
								<span className="user-name">Andrew Mukhtar</span>
								<span className="post-date">05/05/2018</span>
							</div>
							<div className="listing-details">
								<div className="floor-space">
									<i className="far fa-square"></i>
									<span>1000 ft&sup2;</span>
								</div>

								<div className="bedrooms">
									<i className="fas fa-bed"></i>
									<span>3 bedrooms</span>
								</div>
							</div>
			
							<div className="view-btn">
								View Listing
							</div>
						</div>
					</div>
				</div>
				<div className="bottom-info">
					<span>$1000/ month </span>
					<span><i className="fas fa-map-marker"></i> San Leandro, CA </span>
				</div>
			
			</div>
			
		</section>

		<section className="pagination">
			<ul className="pagination-nums">
				<li>Prev</li>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
				<li>Next</li>
			</ul>
		</section>
			
	</section>)
  }
}

