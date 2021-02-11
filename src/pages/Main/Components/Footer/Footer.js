/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./Footer.scss";

const footerItems = [
  {
    id: "1",
    urlTo: "https://github.com/pdl39",
    content: "About",
  },
  {
    id: "2",
    urlTo: "https://github.com/pdl39",
    content: "Help",
  },
  {
    id: "3",
    urlTo: "https://github.com/pdl39",
    content: "Press",
  },
  {
    id: "4",
    urlTo: "https://github.com/pdl39",
    content: "API",
  },
  {
    id: "5",
    urlTo: "https://github.com/pdl39",
    content: "Jobs",
  },
  {
    id: "6",
    urlTo: "https://github.com/pdl39",
    content: "Privacy",
  },
  {
    id: "7",
    urlTo: "https://github.com/pdl39",
    content: "Terms",
  },
  {
    id: "8",
    urlTo: "https://github.com/pdl39",
    content: "Locations",
  },
  {
    id: "9",
    urlTo: "https://github.com/pdl39",
    content: "Top Accounts",
  },
  {
    id: "10",
    urlTo: "https://github.com/pdl39",
    content: "HashTags",
  },
];

const date = new Date();
const currentYear = date.getFullYear();

export class Footer extends React.Component {
  render() {
    return (
      <footer className="MainFooter">
        <ul className="footer-menus">
          {footerItems.map((el) => {
            return (
              <li className="footer-menu" key={el.id}>
                <a
                  href={el.urlTo}
                  className="footer-item-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {el.content}
                </a>
              </li>
            );
          })}
          <li className="footer-menu language">
            <a>Language</a>
          </li>
        </ul>
        <p className="footer-copyright">© {currentYear} PSTAGRAM BY pdl39</p>
      </footer>
    );
  }
}
