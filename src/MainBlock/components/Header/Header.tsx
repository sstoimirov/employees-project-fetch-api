import * as React from "react";
export class Header extends React.PureComponent<{}, {}>{
    render() {
        return (
            <header className="header-container">
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