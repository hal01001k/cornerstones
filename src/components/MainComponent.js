import React, { Component } from 'react';
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import About from "./AboutComponent";

class Main extends Component{

        render() {
            const HomePage = () => {
                return(
                    <Home/>
                );
            }
            return (
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/home" component={ HomePage } />
                        <Route path ='/aboutus' component={ About }/>
                        <Redirect to="/home" />
                    </Switch>
                    <Footer/>
                </div>
            );
        }
}
export default Main;