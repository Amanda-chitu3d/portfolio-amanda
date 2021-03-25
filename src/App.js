import{ BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
// import Post from './components/Post';
import Project from './components/Project';
import SinglePost from './components/SinglePost';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FeedForm from './components/FeedForm';
import FAQs from './components/FAQs';
import TermOfService from './components/TermOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Docs from './components/Docs';
import Feature from './components/Feature';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about"  />
        <Route component={SinglePost} path="/post/:slug" />
        {/* <Route component={Post} path="/post" /> */}
        <Route component={Project} path="/project" />
        <Route component={FAQs} path="/static/faq" />
        <Route component={TermOfService} path="/static/term-of-service" />
        <Route component={PrivacyPolicy} path="/static/policy" />
        <Route component={FeedForm} path="/static/feedform" />
        <Route component={Docs} path="/docs" />
        <Route component={Feature} path="/feature" />
        
      </Route>
    </Switch>
    <Footer />
    </BrowserRouter>

  )
}

export default App;
