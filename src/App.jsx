import './App.css'
import './styles.css'
import UserInfoContext from "./context/UserInfoContext.jsx";
import BlogPage from "./components/BlogPage.jsx";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ContentComponent from "./components/ContentComponent.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";

function App() {

    const userInfo = {username: 'Admin', isAdmin: true};

    return (
        <div>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/theme">Theme Toggle</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/home" element={<App />}>
                    </Route>
                    <Route path="/blog" element={
                        (<UserInfoContext.Provider value={userInfo}>
                            <BlogPage/>
                        </UserInfoContext.Provider>)}>
                    </Route>
                    <Route path="/theme" element={
                        (<ThemeProvider>
                            <ContentComponent/>
                        </ThemeProvider>)}></Route>

                </Routes>
            </Router>
        </div>
    )
}

export default App
