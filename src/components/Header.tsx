    import React from "react";
    import styled from 'styled-components';
    import { Routes, Route, Link} from "react-router-dom";
    import logo from '../DIVERARY.png';

    // スタイル付きコンポーネント
    const HeaderContainer = styled.header`
    background-color: #302b2b;
    color: white;
    padding: 10px 0px;
    text-align: center;
    `;

    const Logo = styled.div`
    .logo-link {
        font-size: 24px;
        font-weight: bold;
    }

    img {
        width: 100px; /* 必要に応じて幅を調整してください */
    }
    `;

    const NavGlobal = styled.nav`
    border-top: 1px solid #383737;
    ul {
        list-style-type: none;
        padding: 10px 20px;
        margin: 0;
        display: flex;

        li {
            margin-right: 20px;
            font-size: 1.25em;
            font-weight: 800;
            line-height: 20px;
            text-align: center;
            list-style: none;
            position: relative;
        }
        li+ li {
            padding-left: 1%;
            border-left: 1px solid #f5efef;
        }

        a {
            text-decoration: none;
            color: white;
            font-weight: bold;
            text-decoration: none;
            display: block;
            position: relative;
        }

        a::after {
            position: absolute;
            bottom: -4px;
            left: 0;
            content: "";
            width: 100%;
            height: 2px;
            background: yellow;
            transform: scale(0, 1);
            transform-origin: center top;
            transition: transform 0.3s;
        }
        
        a:hover::after {
            transform: scale(1, 1);
        }

        a:hover {
            color: yellow;
        }
    }
    `;

    const NavSub = styled.nav`
    /* twitterができたら記載 */
    `;

    const Header: React.FC = () => {
    return (
        <HeaderContainer>
        <div>
            <Logo>
            <Link to="/">
                <img src={logo} alt="DIVERARY" />
            </Link>
            </Logo>
            <div>{/* バナーの内容をここに記述 */}</div>
        </div>
        <div>
            <div>
            <span></span>
            </div>
            <NavGlobal>
            <ul>
                <li>
                <Link to="/">ダイビングスポット情報検索</Link>
                </li>
                <li>
                <Link to="/DivingInformation">ダイビングスポット情報</Link>
                </li>
                <li>
                <Link to="/IntroductionToDiving">ダイビング入門</Link>
                </li>
                <li>
                <Link to="/Login">ログイン</Link>
                </li>
            </ul>
            </NavGlobal>
            <NavSub>{/* twitterのロゴリンクを記載する */}</NavSub>
        </div>
        </HeaderContainer>
    );
};

export default Header;