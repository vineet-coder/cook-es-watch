import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { ApiService } from "../../utils/ApiServices";

export const VideoListCard = ({ item }) => {
  const { token } = useAuth();

  const postVideoInHistory = async (id) => {
    try {
      await ApiService(
        "post",
        {
          Id: id,
        },
        "historyvideos",
        { headers: { authorization: token } }
      );
    } catch (error) {
      console.log(error, "axios error");
    }
  };

  return (
    <>
      <Link className="link" to={`/videos/${item._id}`}>
        <div
          className="product-list-card"
          onClick={() => {
            postVideoInHistory(item._id);
          }}
        >
          <img src={item.img} className="video-list-videoplayer" alt="img" />

          <div className="product-list-card-content">
            <h4 className="product-list-card-name">{item.name}</h4>
            <div className="product-list-card-details">
              <p>{item.views}</p>
              <p>{item.date}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
