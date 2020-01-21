import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { globalHistory as history } from '@reach/router'
import useDocumentScroll from "./useDocumentScroll"

import Contacts from "./Contacts"

import Logo from "../assets/logo-alter.svg"

const Header = () => { 
  
  const { location } = history;
  const headerClass = `${location.pathname.match(/^\/$/g) ? "" : " header-sticky"}`;

  const [shouldShowScrolled, setShouldShowScrolled] = useState(false);
  const [handleMobile, changeHandleMobile] = useState(false);
  const [handleNav, changeHandleNav] = useState(false);

  const MINIMUM_SCROLL = 80;

  useDocumentScroll(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowScrolled(currentScrollTop > 2);
  });


  const useMediaQuery = (query) => {
    let mediaMatch = undefined;
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {  
      if (typeof window !== `undefined`) {
        mediaMatch = window.matchMedia(query);
        setMatches(mediaMatch.matches)
      }

      const handler = e => setMatches(e.matches);
      mediaMatch.addListener(handler);
      return () => mediaMatch.removeListener(handler);
    });
    return matches;
  };

  const isMediaSmall = useMediaQuery('(max-width: 1140px)');

  const openNav = () => {
    if(isMediaSmall) {
      changeHandleNav(!handleNav);
      console.log(handleNav);
    }
  };
  
  const headerClassScrolled = shouldShowScrolled ? '_scrolled' : '';

  return (
  <header className={`header${!isMediaSmall ? headerClass : ""}${headerClass && !isMediaSmall ? headerClassScrolled : ""}${handleNav ? " open" : ""}`}>

    { isMediaSmall ?

    <div className={`m-header-burger${headerClassScrolled && isMediaSmall && !handleNav ? ` m-header-burger` + headerClassScrolled : ""}`} onClick={() => openNav()}>
      <div className="m-header-burger__wrapper">
        <span className="m-header-burger__item"></span>
        <span className="m-header-burger__item"></span>
        <span className="m-header-burger__item"></span>
      </div>
    </div> : "" }

    <nav className="container header__wrapper">

      { isMediaSmall ? <div className="m-header-logo">
        <img className="m-header-logo__svg" src={Logo} alt="Alter" />
      </div> : ""}

      <ul className="header-list">
        <li className="header-list__item">
          <Link className="header-list__link" to="/">Home</Link>
        </li>
        
        <li className="header-list__item">
          <Link className="header-list__link" to="/services">Services</Link>
        </li>
        
        <li className="header-list__item">
          <Link className="header-list__link" to="/cases">Cases</Link>
        </li>
        
        <li className="header-list__item">
          <Link className="header-list__link" to="/">Blog</Link>
        </li>
      </ul>


      { isMediaSmall ? "" : <div className="header-media">

        <Link to="/" className="header-media-request">
          <svg className="header-media-request__svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z"/>
          </svg>
          Call Us</Link>

        <a className="header-media__link" href="https://www.linkedin.com/company/altersvcs/" target="_blank" rel="noopener noreferrer">
          <svg className="header-media__svg" width="18" height="18" viewBox="0 0 18 18" fill="#C5C5C5" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5563 0H1.5375C0.717188 0 0 0.590625 0 1.40156V16.4531C0 17.2687 0.717188 17.9953 1.5375 17.9953H16.5516C17.3766 17.9953 17.9953 17.2641 17.9953 16.4531V1.40156C18 0.590625 17.3766 0 16.5563 0ZM5.57812 15H3V6.98438H5.57812V15ZM4.37812 5.76562H4.35938C3.53437 5.76562 3 5.15156 3 4.38281C3 3.6 3.54844 3 4.39219 3C5.23594 3 5.75156 3.59531 5.77031 4.38281C5.77031 5.15156 5.23594 5.76562 4.37812 5.76562ZM15 15H12.4219V10.6172C12.4219 9.56719 12.0469 8.85 11.1141 8.85C10.4016 8.85 9.97969 9.33281 9.79219 9.80156C9.72187 9.97031 9.70312 10.2 9.70312 10.4344V15H7.125V6.98438H9.70312V8.1C10.0781 7.56563 10.6641 6.79688 12.0281 6.79688C13.7203 6.79688 15 7.9125 15 10.3172V15Z"/>
          </svg>
        </a>

        <a className="header-media__link" href="https://www.facebook.com/altersvcs/" target="_blank" rel="noopener noreferrer">
          <svg className="header-media__svg" width="18" height="18" fill="#C5C5C5" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0062 0H0.99375C0.445312 0 0 0.445312 0 0.99375V17.0062C0 17.5547 0.445312 18 0.99375 18H9V10.875H6.84844V8.25H9V6.30938C9 3.98438 10.6125 2.71875 12.6891 2.71875C13.6828 2.71875 14.7516 2.79375 15 2.82656V5.25469H13.3453C12.2156 5.25469 12 5.78906 12 6.57656V8.25H14.6906L14.3391 10.875H12V18H17.0062C17.5547 18 18 17.5547 18 17.0062V0.99375C18 0.445312 17.5547 0 17.0062 0Z"/>
          </svg>
        </a>

        <a className="header-media__link" href="https://www.instagram.com/alter_svcs/" target="_blank" rel="noopener noreferrer">
          <svg className="header-media__svg" width="20" height="20" viewBox="0 0 20 20" fill="#C5C5C5" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM16.5 4.75C16.5 4.41848 16.3683 4.10054 16.1339 3.86612C15.8995 3.6317 15.5815 3.5 15.25 3.5C14.9185 3.5 14.6005 3.6317 14.3661 3.86612C14.1317 4.10054 14 4.41848 14 4.75C14 5.08152 14.1317 5.39946 14.3661 5.63388C14.6005 5.8683 14.9185 6 15.25 6C15.5815 6 15.8995 5.8683 16.1339 5.63388C16.3683 5.39946 16.5 5.08152 16.5 4.75ZM10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7Z"/>
          </svg>
        </a>
        

        <Link to="/" className="header-media__lang">UA</Link>
      </div>}

      {isMediaSmall ? <Contacts /> : "" }

      {isMediaSmall ? <Link className="g-request__link" to="/">Request for consultation</Link> : ""}
      
    </nav>
  </header>
)};

export default Header
