import "./card-styles.css";
import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai";

export default function Card(props) {
  return (
    <div className="card">
      <div className="action-box">
        <div className={`badge-${props.level}`}>
          <span>&nbsp;</span>
        </div>
        <div>
          <AiOutlineEdit className="action-box__icon" size={16}></AiOutlineEdit>
          <AiOutlineClose
            onClick={() => {
              return props.handleDeleteCard(props.index, props.listIndex);
            }}
            className="action-box__icon"
            size={16}
          ></AiOutlineClose>
        </div>
      </div>
      <p>{props.title}</p>
      <span className="card__icon">&nbsp;</span>
    </div>
  );
}
