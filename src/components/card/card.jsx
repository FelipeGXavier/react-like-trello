import "./card-styles.css";
import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Modal from "react-modal";

export default function Card(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [level, setLevel] = useState("warn");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setLevel("warn");
    setIsOpen(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const card = { title, level };
    props.handleCardUpdate(props.index, props.listIndex, card);
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "25%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "25%",
    },
  };

  return (
    <div className="card">
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-box">
          <h1>Editar tarefa</h1>
          <AiOutlineClose
            size={18}
            onClick={closeModal}
            className="icon-hover"
          ></AiOutlineClose>
        </div>
        <hr />
        <div className="modal-form">
          <form>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                onChange={(e) => {
                  const { value } = e.target;
                  setTitle(value);
                }}
                defaultValue={props.title}
                name="title"
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="level">Level:</label>
              <select
                onChange={(e) => {
                  const { value } = e.target;
                  setLevel(value);
                }}
                name="level"
              >
                <option selected={true} value="warn">
                  Warn
                </option>
                <option value="danger">Danger</option>
              </select>
            </div>
            <button onClick={handleEdit} className="modal-form-btn">
              Editar
            </button>
          </form>
        </div>
      </Modal>

      <div className="action-box">
        <div className={`badge-${props.level}`}>
          <span>&nbsp;</span>
        </div>
        <div>
          <AiOutlineEdit
            onClick={() => {
              return openModal();
            }}
            className="icon-hover"
            size={16}
          ></AiOutlineEdit>
          <AiOutlineClose
            onClick={() => {
              return props.handleDeleteCard(props.index, props.listIndex);
            }}
            className="icon-hover"
            size={16}
          ></AiOutlineClose>
        </div>
      </div>
      <p>{props.title}</p>
      <span className="card__icon">&nbsp;</span>
    </div>
  );
}
