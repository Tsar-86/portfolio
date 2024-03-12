import Header from "./Header/Header";
import Home from "./Content/Home/Home";
import About from "./Content/About/About";
import Footer from "./Footer/Footer";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Content/Projects/Projects";


function App(props) {
   // Обработчики событий для перехода на сторонние сайты
   const handleBlogClick = () => {
    // Сохраняем текущий URL
    const currentUrl = window.location.href;
    // Переходим на сторонний сайт
    window.location.href = 'https://tsar-86.github.io/blog-landing-page/';
    // Добавляем текущий URL в историю браузера
    window.history.pushState(null, null, currentUrl);
  }

  const handleAnniversaryClick = () => {
    // Сохраняем текущий URL
    const currentUrl = window.location.href;
    // Переходим на сторонний сайт
    window.location.href = 'https://tsar-86.github.io/Anniversary-project/';
    // Добавляем текущий URL в историю браузера
    window.history.pushState(null, null, currentUrl);
  }

  const handleGithubClick = () => {
        // Сохраняем текущий URL
    const currentUrl = window.location.href;
        // Переходим на сторонний сайт
    window.location.href = 'https://github.com/Tsar-86';
        // Добавляем текущий URL в историю браузера
    window.history.pushState(null, null, currentUrl);
  }

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
                // anniversary={props.state.anniversary}
                blogLanding={props.state.blogLanding} />} />
            {/* <Route path='/Contact' component={Contact} /> */}
            <Route path='/blog' render={() => <div onClick={handleBlogClick} />} />
            {/* <Route path='/anniversary' render={() => <div onClick={handleAnniversaryClick} />}/> */}
          </div>
          
          <Footer />
          <Route path='/git' render={() => <div onclick={handleGithubClick} />}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
