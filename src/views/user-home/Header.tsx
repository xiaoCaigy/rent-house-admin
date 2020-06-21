import React from "react";
import styled from "styled-components";
import Logo from "@assets/img/logo.png";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <Container>
            <div className="content">
                <div style={{display: "flex"}}>
                    <LogoContainer src={Logo}/>
                    <LocationContainer>
                        <Dropdown overlay={CityMenu}>
                            <div className="city">
                                <span style={{marginRight: "5px"}}>杭州</span><DownOutlined />
                            </div>
                        </Dropdown>
                    </LocationContainer>
                </div>
                <div className="tab-menu">
                    <div className="item"><span className="title"> 首页 <span className="underline"/></span></div>
                    <div className="item"><span className="title"> 租房 <span className="underline"/></span></div>
                    <div className="item"><span className="title"> 一夜租房 <span className="underline"/></span></div>
                    <div className="item"><span className="title"> 拼室友 <span className="underline"/></span></div>
                    <div className="item"><span className="title"> APP下载 <span className="underline"/></span></div>
                    <div className="item"><span className="title"> 房东中心 <span className="underline"/></span></div>
                </div>
                <div className="login-register">
                    <span className="btn">登录</span>
                    <span className="btn">|</span>
                    <span className="btn">注册</span>
                </div>
            </div>
        </Container>
    )
};

const CityMenu = (
    <Menu>
        <Menu.Item key="0">
            北京
        </Menu.Item>
        <Menu.Item key="1">
            上海
        </Menu.Item>
    </Menu>
)

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    line-height: 60px;
    color: #fff;
    width: 100%;
    z-index: 11;
    -webkit-transition: none!important;
    transition: none!important;
    background-color: #fff;
    color: #000!important;
    color: rgba(0,0,0,.85)!important;
    -webkit-box-shadow: 0 2px 8px 0 rgba(0,0,0,.08);
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.08);
    display: flex;
    justify-content: center;
    .content{
        width: 1152px;
        margin: 0 auto;
        position: relative;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .tab-menu{
        width: 400px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item{
            cursor: pointer;
            font-size: 15px;
            .title{
                padding: 9px 5px;
                position: relative;
                .underline{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    -webkit-transform: translateX(-50%);
                    transform: translateX(-50%);
                    width: 0;
                    height: 2px;
                    background: #51c6cf;
                    border-radius: 1px;
                    -webkit-transition: width .3s;
                    transition: width .3s;
                    will-change: width;
                }
                &:hover .underline{
                    width: 100%;
                }
            }
        }
    }
    .login-register{
        width: 80px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .btn{
           cursor: pointer;
        }
    }
`;
const LogoContainer = styled.img`
    margin: 0;
    height: 100%;
    width: 160px;
    padding: 14px 0;
`;
const LocationContainer = styled.div`
    line-height: 25px;
    width: 92px;
    position: relative;
    height: 60px;
    padding: 14px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    .city{
        height: 25px;
        color: rgba(0,0,0,.4);
        line-height: 25px;
        width: 60px;
        border-radius: 25%;
        border: 1px solid rgba(0,0,0,.4);
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default Header;
