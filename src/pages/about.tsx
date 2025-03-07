import Header from "../Components/header";
import Sidebar from "../Components/sidebar";

function About() {
  return (
    <div id="wrapper">
      {/*<!-- Main -->*/}
      <div id="main">
        <div className="inner">
          {/*<!-- Header -->*/}
          <Header />
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Scripts (opsiyonel olarak public/index.html içinde de bulunabilir) */}
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  );
}

export default About;
