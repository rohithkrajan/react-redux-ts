import * as React from "react";



export default class Header extends React.Component {
    renderLinks():JSX.Element {
        return (
        <nav className="navbar navbar-default navbar-static-top">
            <div id="navbar" className="navbar-collapse collapse">
                <div className="container">
                    <ul className="nav  nav-pills navbar-right">
                        
                    </ul>

                </div>
            </div>
        </nav>
        );
    }
    public render() {
        return (
            <div>
                {this.renderLinks()}
            </div>
        );
    }

  public render2() {

    return (

      <div id="hello" className="jumbotron">

        <h1 className="display-3 text-center">{"React app"}</h1>

        <p className="lead text-center">

          {

            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel augue turpis. Suspendisse malesuada lacus nec metus pharetra sodales. Nunc tellus quam, mollis a dictum et, luctus maximus libero."

          }

        </p>

      </div>

    );

  }

}