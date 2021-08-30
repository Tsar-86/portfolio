import Header from "./Header/Header";
import Home from "./Content/Home/Home";
import About from "./Content/About/About";
import Footer from "./Footer/Footer";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Content/Projects/Projects";


function App(props) {
  return (

    <BrowserRouter>
        <div className="homePage">
          <Header />
          
          <div className='wrapper'>
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
                blogLanding={props.state.blogLanding} />} />
            {/* <Route path='/Contact' component={Contact} /> */}
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
        </div>
    </BrowserRouter>
  );
}

export default App;
