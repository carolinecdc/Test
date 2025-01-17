import PropTypes from "prop-types";

export default function NavLinks({ currentPage, photoExpanded }) {
  return (
    <>
      <ul className="nav col-12 col-md-auto mb-2 mb-md-0 nav-links">
        <li>
          <a
            href="/"
            className="nav-link px-2"
            id={
              photoExpanded
                ? "white-background-text"
                : currentPage === "work"
                ? "nav-links-actv"
                : ""
            }
          >
            WORK
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="nav-link px-2"
            id={
              photoExpanded
                ? "white-background-text"
                : currentPage === "about"
                ? "nav-links-actv"
                : ""
            }
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="nav-link px-2"
            id={
              photoExpanded
                ? "white-background-text"
                : currentPage === "contact"
                ? "nav-links-actv"
                : ""
            }
          >
            CONTACT
          </a>
        </li>
      </ul>
    </>
  );
}

NavLinks.propTypes = {
  currentPage: PropTypes.string.isRequired,
  photoExpanded: PropTypes.bool,
};
