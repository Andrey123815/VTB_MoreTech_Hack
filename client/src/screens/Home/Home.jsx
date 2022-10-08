import React from 'react';
import SideNavbar from "../../components/SideNavbar/SideNavbar.jsx";
import MainContent from "../../components/MainContent/MainContent.jsx";
import SideContent from "../../components/SideContent/SideContent.jsx";
import './Home.scss';

function Home(props) {
  return (
    <div className="home-page">
      <SideNavbar />
      <MainContent />
      <SideContent />
    </div>
  );
}

export default Home;
