import React from "react";

import "./Footer.scss";

const footerItems = [
  {
    id: "1",
    urlTo: "https://github.com/pdl39",
    content: "ABOUT",
  },
  {
    id: "2",
    urlTo: "https://github.com/pdl39",
    content: "HELP",
  },
  {
    id: "3",
    urlTo: "https://github.com/pdl39",
    content: "PRESS",
  },
  {
    id: "4",
    urlTo: "https://github.com/pdl39",
    content: "API",
  },
  {
    id: "5",
    urlTo: "https://github.com/pdl39",
    content: "JOBS",
  },
  {
    id: "6",
    urlTo: "https://github.com/pdl39",
    content: "PRIVACY",
  },
  {
    id: "7",
    urlTo: "https://github.com/pdl39",
    content: "TERMS",
  },
  {
    id: "8",
    urlTo: "https://github.com/pdl39",
    className: "footer-item-link",
    content: "LOCATIONS",
  },
  {
    id: "9",
    urlTo: "https://github.com/pdl39",
    content: "TOP ACCOUNTS",
  },
  {
    id: "10",
    urlTo: "https://github.com/pdl39",
    content: "HASHTAGS",
  },
  {
    id: "11",
    urlTo: "https://github.com/pdl39",
    content: "LANGUAGE",
  },
];

const date = new Date();
const currentYear = date.getFullYear();

export class Footer extends React.Component {
  render() {
    return (
      <footer className="LoginFooter">
        <ul className="footer-menus">
          {footerItems.map((el) => {
            return (
              <li className="footer-menu" key={el.id}>
                <p>
                  <a href={el.urlTo} target="_blank" rel="noopener noreferrer">
                    {el.content}
                  </a>
                </p>
              </li>
            );
          })}
        </ul>
        <p className="footer-copyright">© {currentYear} PSTAGRAM BY pdl39</p>
      </footer>
    );
  }
}
