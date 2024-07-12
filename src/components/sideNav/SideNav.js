import { IoHome } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { RiPlayList2Line } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useReduce } from "../../providers/useReducerProvider";

export const SideNav = () => {
  const { setIsSideNav } = useReduce();

  const closeSideNav = () => {
    document.getElementById("sideNav").style.width = "0%";
    setIsSideNav(false);
  };
  return (
    <>
      <nav className="side-nav" id="sideNav">
        <Link className="link side-nav-item1" to="/">
          <IoHome className="side-nav-icon" onClick={() => closeSideNav()} />
        </Link>
        <Link className="link side-nav-item2" to="/history">
          <FaHistory className="side-nav-icon" />
        </Link>
        <Link className="link side-nav-item3" to="/playlist">
          {" "}
          <RiPlayList2Line className="side-nav-icon" />
        </Link>
        <Link className="link side-nav-item4" to="/later">
          <MdWatchLater className="side-nav-icon" />
        </Link>{" "}
        <Link className="link side-nav-item5" to="/liked">
          <FaThumbsUp className="side-nav-icon" />
        </Link>
      </nav>
    </>
  );
};
