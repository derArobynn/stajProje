import Header from '../Components/header';
import Sidebar from '../Components/sidebar';
function Home(){

    return (
        
        <body >

		{/*<!-- Wrapper -->*/}
			<div id="wrapper">

				{/*<!-- Main -->*/}
					<div id="main">
                        
						<div className="inner">

							{/*<!-- Header -->*/}
								<Header/>


						</div>
					</div>
            <Sidebar/>
				

			</div>

		{/*<!-- Scripts -->*/}
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
    );
  };
  
  export default Home;
  