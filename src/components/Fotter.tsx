    import React from "react";
    import { Link } from "react-router-dom";
    import styled from "styled-components";

    const FooterContainer = styled.footer`
    background-color: #333;
    color: white;
    padding: 20px;
    `;

    const FooterNav = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-around;
    }

    li {
        margin: 0;
    }

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-size: 16px;
    }
    `;

    const Copyright = styled.div`
    text-align: center;
    margin-top: 20px;
    `;

    const Footer: React.FC = () => {
    return (
        <FooterContainer id="global-footer">
        <FooterNav>
            <ul>
            <li>
                <Link to="/">本サイトのご利用について</Link>
            </li>
            <li>
                <Link to="/">お問い合わせ</Link>
            </li>
            <li>
                <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                >
                プライバシーについて
                </a>
            </li>
            </ul>
        </FooterNav>
        <Copyright>&copy; zootaka</Copyright>
        </FooterContainer>
    );
};

export default Footer;
