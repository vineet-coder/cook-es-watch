import { FaThumbsDown } from "react-icons/fa";
import { useReduce } from "../../providers/useReducerProvider";
import { Link } from "react-router-dom";
import axios from "axios";

export const LikedVideosCard = ({ item }) => {
  console.log(item);

  const unLikedVideo = async (item) => {
    try {
      const { data } = await axios.delete(
        "https://cook-es-watch.herokuapp.com/likedvideos",
        {
          data: {
            video_id: item.id._id,

            likedvideo_id: item._id,
          },
        }
      );

      dispatch({ type: "SET_LIKEDVIDEOS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const { dispatch } = useReduce();
  return (
    <>
      {" "}
      <Link className="link like-videos-card" to={`/videos/${item.id._id}`}>
        <img src={item.id.img} className="like-videos-card-img" alt="img" />

        <div className="like-videos-card-content">
          {item.id.name}
          <Link className="link like-videos-card-delete-btn" to="/liked">
            <div onClick={() => unLikedVideo(item)}>
              <FaThumbsDown />
            </div>
          </Link>
        </div>
      </Link>
    </>
  );
};