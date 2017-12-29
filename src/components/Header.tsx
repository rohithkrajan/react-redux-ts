import * as React from "react";
import { Link } from 'react-router';

export interface HeaderProps
{
    type:string,
    id?:string
}

export default class Header extends React.Component<HeaderProps,object> {

   public  renderLinks(): JSX.Element {
        const { type } = this.props;
        if (type==="merchants_index") {
            return (
                <ul className="nav  nav-pills navbar-right">
                <li style={{ paddingRight: '10px' }} role="presentation">
                    <Link className="text-xs-right" style={{ color: '#337ab7', fontSize: '17px' }} 
                    to="/merchant/new">New Merchant</Link>
                </li>
            </ul>
            );
        }
        else         
            return (
                <div></div>
            );
    }
    public render() {
        return (
            <div>
                
                <nav className="navbar navbar-default navbar-static-top">
                <div id="navbar" className="navbar-collapse collapse">
                    <div className="container">
                        <ul className="nav  nav-pills navbar-left">
                            <li style={{ paddingRight: '10px' }} role="presentation">
                                <Link className="text-xs-right" 
                                style={{ color: '#337ab7', fontSize: '17px' }} to="/">Home</Link>
                            </li>
                        </ul>
                        {this.renderLinks()}
                    </div>
                </div>
            </nav>
            </div>
        );
    }

}