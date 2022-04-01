import React from 'react'
import App from './App'
import About from './Pages/About';
import Contact from './Pages/Contact';
import NavigationBar from './NavigationBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Blog from './Pages/Blog';
import BlogPost from './Pages/BlogPost';
import NoMatch from './Pages/NoMatch';
import Memoization from './Pages/Memoization';



export default function Root() {

    // const routes = [
    //     { path: '/', name: 'Home', Component: App, exact: true },
    //     { path: '/about', name: 'about', Component: About, exact: false },
    //     { path: '/contact', name: 'Contact', Component: Contact, exact: false },
    //     { path: '/blog', name: 'Blog', Component: Blog, exact: true },
    //     { path: '/blog/:id', name: 'Post', Component: BlogPost, exact: false },
    //     { path: '*', name: 'No Match', Component: NoMatch, exact: false },
    // ];

    return (
        <Router>
            <div className="todo-app-container">
                <NavigationBar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <App />
                        </Route>
                        <Route path="/about">
                            <About title="hello About" />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="/blog">
                            <Blog />
                        </Route>

                        <Route exact path="/memoization">
                            <Memoization />
                        </Route>
                        <Route path="/blog/:id">
                            <BlogPost />
                        </Route>
                        <Route path="*">
                            <NoMatch />
                        </Route>

                        {/* {
                            routes.map(({ path, Component,exact }) => {
                                return (
                                    <Route path={path} exact={exact} key={path}>
                                        <Component />
                                    </Route>
                                );
                            })
                        } */}


                    </Switch>
                </div>
            </div>
        </Router>
    )
}
