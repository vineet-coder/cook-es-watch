import { IoHome } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { RiPlayList2Line } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useReduce } from "../../providers/useReducerProvider";
import { useAuth } from "../../providers/AuthProvider";

export const Header = () => {
  const { isSideNav, setIsSideNav } = useReduce();
  const { isUserLogin, userName } = useAuth();
  const openSideNav = () => {
    document.getElementById("sideNav").style.width = "15%";
    setIsSideNav(true);
  };
  const closeSideNav = () => {
    document.getElementById("sideNav").style.width = "0%";
    setIsSideNav(false);
  };
  return (
    <>
      <nav className="header">
        <div className="hamburger">
          {isSideNav ? (
            <GiHamburgerMenu
              className="hamburger-icon"
              onClick={() => closeSideNav()}
            />
          ) : (
            <GiHamburgerMenu
              className="hamburger-icon"
              onClick={() => openSideNav()}
            />
          )}
        </div>
        <div className="header-list-div">
          <div className="header-list-item">
            <Link className="link" to="/">
              <IoHome className="header-icon" />
            </Link>
          </div>
          <div className="header-list-item">
            {" "}
            <Link className="link" to="/history">
              {" "}
              <FaHistory className="header-icon" />
            </Link>
          </div>
          <div className="header-list-item">
            {" "}
            <Link className="link" to="/playlist">
              <RiPlayList2Line className="header-icon" />
            </Link>
          </div>
          <div className="header-list-item">
            {" "}
            <Link className="link" to="/later">
              <MdWatchLater className="header-icon" />
            </Link>
          </div>
          <div className="header-list-item">
            <Link className="link" to="/liked">
              <FaThumbsUp className="header-icon" />
            </Link>
          </div>
          <div className="header-list-item">
            <Link className="link profile-icon" to="/login">
              <CgProfile className="header-icon" />
              <p className="user-name-header">
                {isUserLogin ? userName?.split(" ")[0] : "Log In"}
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
