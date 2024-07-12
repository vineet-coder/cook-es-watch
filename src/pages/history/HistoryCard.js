import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useHistory } from "../../providers/HistoryContextProvider";
import { useAuth } from "../../providers/AuthProvider";
import { ApiService } from "../../utils/ApiServices";

export const HistoryCard = ({ item }) => {
  const { setHistoryData } = useHistory();
  const { token } = useAuth();

  const deleteHistoryVideo = async (_id) => {
    try {
      const data = await ApiService(
        "delete",
        {
          headers: { authorization: token },

          data: { historyVideo_id: _id },
        },
        "historyvideos"
      );

      setHistoryData(data.result[0].videos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      <Link className="link history-card" to={`/videos/${item._id}`}>
        <img src={item.img} className="history-card-img" alt="img" />

        <div className="history-card-content">
          {item.name}
          <Link to="/history" className="link history-card-delete-btn">
            <div onClick={() => deleteHistoryVideo(item._id)}>
              <MdDelete />
            </div>
          </Link>
        </div>
      </Link>
    </>
  );
};
