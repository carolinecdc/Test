import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Footer from "./Footer";

export default function Xnav({
  isCollapsed,
  setIsCollapsed,
  setUserToggled,
  actvPage,
}) {
  return (
    <>
      <div className="x-nav">
        <div
          className="x-button"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
            setUserToggled(false);
          }}
        >
          <CloseIcon className="menu-icon" sx={{ fontSize: 30 }} />
        </div>
        <div className="mx-auto">
          <div>
            <a
              href="/"
              className={`nav-link  x-nav-text px-2  pb-3 ${
                actvPage === "work" && "actv-menu"
              }`}
            >
              WORK
            </a>
          </div>
          <div>
            <a
              href="/about"
              className={`nav-link  x-nav-text px-2  pb-3 ${
                actvPage === "about" && "actv-menu"
              }`}
            >
              ABOUT
            </a>
          </div>
          <div>
            <a
              href="/contact"
              className={`nav-link  x-nav-text px-2  pb-3 ${
                actvPage === "contact" && "actv-menu"
              }`}
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
      <div className="x-footer ">
        <Footer iconSize="42" />
      </div>
    </>
  );
}

Xnav.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  setIsCollapsed: PropTypes.func,
  setUserToggled: PropTypes.func,
  actvPage: PropTypes.string,
};
