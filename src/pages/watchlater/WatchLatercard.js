import { MdDelete } from "react-icons/md";
import { useReduce } from "../../providers/useReducerProvider";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { DeleteFromList } from "../../utils/DeleteFromList";

export const WatchLaterCard = ({ item }) => {
  const { dispatch } = useReduce();
  const { token } = useAuth();

  return (
    <>
      {" "}
      <Link className="link watchlater-card" to={`/videos/${item._id}`}>
        <img src={item.img} className="watchlater-card-img" alt="img" />

        <div className="watchlater-card-content">
          {item.name}

          <Link className="link watchlater-card-delete-btn" to="/later">
            <div
              onClick={() =>
                DeleteFromList(
                  item,
                  token,
                  dispatch,
                  "watchlatervideos",
                  "SET_WATCHLATERVIDEOS"
                )
              }
            >
              <MdDelete />
            </div>
          </Link>
        </div>
      </Link>
    </>
  );
};
