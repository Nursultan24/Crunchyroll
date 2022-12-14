import {Routes, Route} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import './styles/style.scss'
import Manga from "./pages/Manga/manga";
import Terms from "./pages/Terms/Terms";
import AboutUs from "./pages/AboutUs/AboutUs";
import Install from "./pages/Install/Install";
import Work from "./pages/Work/Work";
import Auth from "./pages/Auth/Auth";
import Register from "./pages/Register/Register";
import Watch from "./pages/Watch/Watch";
import Video from "./pages/Video/Video";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loginAccount} from "./redux/reducers/user";
import NewsFirst from "./pages/NewsFirst/NewsFirst";
import Search from "./pages/Search/Search";
import Catalog from "./pages/Catalog/Catalog";


function App() {

    const dispatch = useDispatch()

    useEffect(()=> {
        if (localStorage.getItem('user') !== null){
            dispatch(loginAccount(JSON.parse(localStorage.getItem('user'))))
        }
    },[])

  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout/>}>

            <Route path={''} element={<Home/>}/>
            <Route path={'manga'} element={<Manga/>}/>
            <Route path={'terms'} element={<Terms/>}/>
            <Route path={'aboutUs'} element={<AboutUs/>}/>
            <Route path={'install'} element={<Install/>}/>
            <Route path={'work'} element={<Work/>}/>
            <Route path={'watch/:id'} element={<Watch/>}/>
            <Route path={'video'} element={<Video/>}/>
            <Route path={'newsFirst'} element={<NewsFirst/>}/>
            <Route path={'search'} element={<Search/>}/>
            <Route path={'catalog'} element={<Catalog/>}/>


        </Route>
          <Route path={'auth'} element={<Auth/>}/>
          <Route path={'register'} element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
