import * as React from "react";

export class Footer extends React.PureComponent<{}, {}>{
    render() {
        return (
            <footer className="footer-container">
                <div className="footer-container__info">
                    Copyright © 2020 400+ Reward Gateway people in: Birmingham | Boston | London | Melbourne | Plovdiv | Rochester | Sydney
                </div>
                <div className="footer-container__links">
                    <a className="social-icon social-icon-fb" href="https://www.facebook.com"></a>
                    <a className="social-icon social-icon-twitter" href="https://www.twitter.com"></a>
                    <a className="social-icon social-icon-google" href="#"></a>
                </div>
            </footer>
        )
    }
}