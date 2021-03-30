import{ BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import About2 from './page/About2';
// import Post from './components/Post';
import Project from './components/Project';
import SinglePost from './components/SinglePost';
import NavBar2 from './components/NavBar2';
import Footer from './components/Footer';
import FeedForm from './components/FeedForm';
import FAQs from './components/FAQs';
import TermOfService from './components/TermOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Docs from './components/Docs';
import Feature from './components/Feature';
import Services from './page/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/utilities.css";
import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
    <NavBar2 />
    <Switch>
      <Route>
        <Route component={Home} path="/" exact />
        <Route component={About2} path="/about"  />
        <Route component={SinglePost} path="/post/:slug" />
        {/* <Route component={Post} path="/post" /> */}
        <Route component={Project} path="/project" />
        <Route component={FAQs} path="/static/faq" />
        <Route component={TermOfService} path="/static/term-of-service" />
        <Route component={PrivacyPolicy} path="/static/policy" />
        <Route component={FeedForm} path="/static/feedform" />
        <Route component={Docs} path="/docs" />
        <Route component={Feature} path="/feature" />
        <Route path="/services"><Services/></Route>
      </Route>
    </Switch>
    <Footer />
    </BrowserRouter>

  )
}

export default App;
