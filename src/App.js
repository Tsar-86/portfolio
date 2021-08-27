import Header from "./Header/Header";
import Home from "./Content/Home/Home";
import About from "./Content/About/About";
import Footer from "./Footer/Footer";
import Contact from "./Content/Contact/Contact";
import './App.css';
import { HashRouter, Route } from "react-router-dom";
import Projects from "./Content/Projects/Projects";
import { createBrowserHistory } from 'history';


function App(props) {

  const currentHistory = createBrowserHistory();

  return (

    <HashRouter history={currentHistory} >
      
        <div className="homePage">
          <Header />

          <div>
            <Route path='/Home' render={() => <Home home={props.state.home} />} />
            <Route path='/About'
              render={() => <About
                about={props.state.about}
                skills={props.state.skills}
                education={props.state.education}
                experience={props.state.experience} />} />
            <Route path='/Projects'
              render={() => <Projects
                anniversary={props.state.anniversary}
                anniversaryDescription={props.state.anniversaryDescription}
                blogLanding={props.state.blogLanding}
                blogLandingDescription={props.state.blogLandingDescription} />} />
            <Route path='/Contact' component={Contact} />
            <Route path='/blog' component={() => {
              window.location.href = 'https://tsar-86.github.io/blog-landing-page/'
            }} />
            <Route path='/anniversary' component={() => {
              window.location.href = 'https://tsar-86.github.io/Anniversary-project/'
            }} />
          </div>
          <Footer />
          <Route path='/git' component={() => {
            window.location.href = 'https://github.com/Tsar-86'
          }} />
          <Route path='/WhatsApp' component={() => {
            window.location.href = 'https://api.whatsapp.com/send/?phone=79112649250'
          }} />

        </div>
    </HashRouter>
  );
}

export default App;
