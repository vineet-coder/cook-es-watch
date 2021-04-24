import ReactPlayer from "react-player";
import { MdDelete } from "react-icons/md";
import { useReduce } from "../providers/useReducerProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "./HistoryContextProvider";

export const HistoryCard = ({ item, idx }) => {
  console.log(item);
  // const { dispatch } = useReduce();
  const { setHistoryData } = useHistory();

  const deleteHistoryVideo = async (_id) => {
    console.log(_id);
    try {
      const { data } = await axios.delete("/historyvideos", {
        data: { historyVideo_id: _id },
      });

      setHistoryData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      <Link className="link history-card" to={`/videopage/${item.id}`}>
        <img src={item.id.img} className="history-card-img" />

        <div className="history-card-content">
          {item.id.name}
          <Link className="link history-card-delete-btn" to="/history">
            <div

            // onClick={() => deleteHistoryVideo(item._id)}
            >
              <MdDelete />
            </div>
          </Link>
        </div>
      </Link>
    </>
  );
};
