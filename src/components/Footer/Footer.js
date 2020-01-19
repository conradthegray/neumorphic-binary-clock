import React from 'react';

import './Footer.css';

const twitterShareText =
  'Neumorphic Binary Clock by @conradthegray #Neumorphism';
const twitterShareUrl = `https://twitter.com/intent/tweet?text=${escape(
  twitterShareText
)}`;

const onTwitterShare = event => {
  event.preventDefault();
  window.open(
    twitterShareUrl,
    '_blank',
    'location=yes,height=570,width=520,scrollbars=yes,status=yes'
  );
};

const Footer = () => (
  <footer className="App-footer">
    <div>
      <ul className="App-footer-links-list">
        <li>
          <a href={twitterShareUrl} onClick={onTwitterShare}>
            Share on Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/conradthegray/neumorphic-binary-clock">
            Github
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul className="App-footer-links-list">
        <li>
          <a href="https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6">
            What is Neumorphism?
          </a>
        </li>
        <li>
          <a href="https://conradthegray.com">Made by Conrad Gray</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
