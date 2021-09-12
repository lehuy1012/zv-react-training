import './Home.css';
import Topbar from '../../../components/Topbar/Topbar';
import Banner from '../../../components/Banner/Banner';
import Content from '../../../components/Content/Content';
import Footer from '../../../components/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Topbar />
      <Banner />
      <div class="content">
        <Content/>
        <Footer />
      </div>
    </div>
  );
}

export default App;