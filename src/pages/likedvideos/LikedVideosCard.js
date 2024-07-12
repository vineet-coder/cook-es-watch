import { FaThumbsDown } from "react-icons/fa";
import { useReduce } from "../../providers/useReducerProvider";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { DeleteFromList } from "../../utils/DeleteFromList";

export const LikedVideosCard = ({ item }) => {
  const { token } = useAuth();
  const { dispatch } = useReduce();
  return (
    <>
      {" "}
      <Link className="link like-videos-card" to={`/videos/${item._id}`}>
        <img src={item.img} className="like-videos-card-img" alt="img" />

        <div className="like-videos-card-content">
          {item.name}
          <Link className="link like-videos-card-delete-btn" to="/liked">
            <div
              onClick={() =>
                DeleteFromList(
                  item,
                  token,
                  dispatch,
                  "likedvideos",
                  "SET_LIKEDVIDEOS"
                )
              }
            >
              <FaThumbsDown />
            </div>
          </Link>
        </div>
      </Link>
    </>
  );
};
