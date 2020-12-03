import React from 'react';

function Footer() {
return (
	<div>
      <div className="row">
	<div className="col-md-12">
	<div className="footer p-3 mt-4 text-center bg-dark text-light">
	Developed By:
	<span className="text-warning font-weight-normal">
	Keziah Ghartey
	</span>
	, Using <i className="fab fa-react" /> React JS &amp; Redux JS
	integrated with external movies data API

	<a
	href="http://www.omdbapi.com/?i=tt3896198&apikey=8ca4532a"
	target="_blank"
	>
	OMDB
	</a>


	</div>
	</div>
	</div>
	</div>


)

}




	export default Footer;