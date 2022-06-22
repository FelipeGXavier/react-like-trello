import "./list-styles.css";
import Card from "../card/card";
import { useRef } from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function List(props) {
  const newCardRef = useRef();

  const [showInputCard, setShowInputCard] = useState(false);
  const [inputCard, setInputCard] = useState("");

  const addCard = () => {};

  return (
    <div className="list">
      <div className="list__title">
        <b>{props.title}</b>
        <span>...</span>
      </div>
      <div id={props.id}>
        {props.cards.map((card) => {
          return (
            <Card key={card.title} level={card.level} title={card.title}></Card>
          );
        })}
      </div>
      <div ref={newCardRef} className="list__btn">
        {showInputCard ? (
          <>
            <input
              onChange={(e) => {
                const value = e.target.value;
                setInputCard({ ...inputCard, value });
              }}
              type="text"
            />
            <div className="new-card-box">
              <button onClick={addCard} className="new-card-box--btn">
                Add Card
              </button>
              <AiOutlineClose
                onClick={() => {
                  setInputCard("");
                  setShowInputCard(false);
                }}
                size={20}
              ></AiOutlineClose>
            </div>
          </>
        ) : (
          <span onClick={() => setShowInputCard(true)}>+ Adicionar cartão</span>
        )}
      </div>
    </div>
  );
}
