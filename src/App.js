import React, { Component } from 'react';
import { instagram } from "react-icons/fa";
import logo from './The-knock-logo01.PNG';
import instaLogo from './Instagram-Logo1.png';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import ReactDOM from 'react-dom';
import pbph from './TheKnock303.jpg';
import hmp from './hmplw.png';
import g1 from './TheKnock3031.jpg';
import { Carousel } from 'react-carousel-minimal';



function App() {

  const data =
  [{
      image: './TheKnock303.jpg',
      caption: "The Knock"
    },
    {
      image: "https://therooster.com/files/inline/images/forty_even_-_river_bar_gallery_l8gacy_5280.jpg",
      caption: "Test 1"
    },
    {
      image: 'https://therooster.com/files/inline/images/jay_triiiple_-_river_bar_andgallery_l8gacy_5280.jpg',
      caption: "Artist 1"
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  return (
    <div className="App">


      <main>

        <div class="navbar">
          <div class='leftnav'>

            <div class="links">

              <div class="dropdown dropbtn">
                <button class="dropbtn" >About Us
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="#">Who We Are</a>
                  <a href="#">Our Team</a>
                  <a href="#">Testimonials</a>
                </div>
              </div>
              <div class="dropdown dropbtn">
                <a href="#Events" >Events</a>
              </div>
              <div class="dropdown dropbtn">
                <button class="dropbtn">Artists
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="#">2021</a>
                  <a href="#">2022</a>
                  <a href="#">Producers</a>
                </div>
              </div>
              <div class="dropdown dropbtn">
                <button class="dropbtn">Media
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="#">Photos</a>
                  <a href="#">Video</a>
                  <a href="#">Articles</a>
                </div>
              </div>
              <div class="dropdown dropbtn">
                <a href="#Sponsors-">Sponsors</a>
              </div>
            </div>
          </div>

          <div class='rightnav'>
          <SocialIcon url="https://www.youtube.com/channel/UCWol48d1OWvCiBH47TEJdJQ" network='youtube' class='sm1' />
            <a href='https://www.youtube.com/channel/UCWol48d1OWvCiBH47TEJdJQ'>
              <img class='smIcon' src={instaLogo} alt="logo" />
            </a>
          </div>
        </div>
        <img src={logo} className="mainlogo" alt="logo" />

        <div style={{ textAlign: "center" }}>
        <div>
          <Carousel
            data={data}
            time={10000}
            width="1920px"
            height="1080px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1920px",
              maxHeight: "1080px",
              margin: "auto",
              zindex: '0',
            }}
          />
        </div>
      </div>

        <div class='mainbody'>

          <div class='pCont'>
            <p>
              Here at The Knock we are a monthly house party, highlighting the emcees, DJs, and the creatives that give the hip hop community life.
            </p>
            <p>We want to create an authentic atmosphere of collaboration and celebration that amplifies the whole community –   so no matter who hits the stage it’s a vibe for everyone.
            </p>
            <p>
              We believe The Knock brings people together in a genuine way that can erase the lines that divide us.
            </p>
            <p>
              These are FRIENDS, we are FAMILY, this is HOME.
            </p>
          </div>
        </div>
        <div class='hmpl'>
          <img class='hmpl' src={hmp} alt="hmp" />
        </div>
        <div class="contact">
          <a href="#Contact" >Contact Us</a>
        </div>



      </main>
    </div>
  );
}

export default App;
