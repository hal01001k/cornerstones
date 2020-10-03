import React, { Component } from 'react';
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from "./AboutComponent";
import Interior from "./InteriorComponent";
import Propertise from "./PropertiseComponent";
import Architecture from "./ArchitectureComponent";
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
                        <Route path ='/interior' component={ Interior }/>
                        <Route path ='/propertise' component={ Propertise }/>
                        <Route path ='/architecture' component={ Architecture }/>
                        <Redirect to="/home" />
                    </Switch>
                    <Footer/>
                </div>
            );
        }
}
export default Main;