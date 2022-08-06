import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
class NavBar extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-body rounded" >

                <span className={"navbar-brand mb-0 h1"}><Link className={"nav-link"} to={"/"}>Dashboard</Link></span>
                <ul className={"navbar-nav"}>
                    <li className={"nav-item"}><Link className={"nav-link"} to={"/"}>Product</Link></li>
                    <li className={"nav-item"}><Link className={"nav-link"} to={"/driverDetail"}>Cart</Link></li>
                    <li className={"nav-item"}><Link className={"nav-link"} to={"/admin"}>Admin</Link></li>

                </ul>
                <span className={"navbar-brand mb-0 h1"} >Kavindu</span>

            </nav>

        )
    }
}

export default NavBar