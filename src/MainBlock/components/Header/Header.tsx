import * as React from "react";
export class Header extends React.PureComponent<{}, {}>{

    // src="//www.rewardgateway.com/hs-fs/hubfs/rg_logo_horizontal.png?width=578&name=rg_logo_horizontal.png"
    render() {
        return (
            <header id="header-container" className="header-container">
                <a className="header-logo-wrapper" href="https://www.rewardgateway.com">
                    <img className="header-logo"  />
                </a>
                <div className="header-menu-elements">
                    <div>Home</div>
                    <div>Employees</div>
                    <div>Contracts</div>
                    <div className="header-elements-dropdown">
                        <div>Departments</div>
                        <div className="header-elements-dropdown--inner">
                            <div>HR</div>
                            <div>Marketing</div>
                            <div>Sales</div>
                        </div>
                    </div>
                </div>
                <div className="header-menu-icons">
                    <div className="header-menu-icons--uk"></div>
                    <div className="header-menu-icons--france"></div>
                    <div className="header-menu-icons--germany"></div>
                </div>
            </header>
        )
    }
}