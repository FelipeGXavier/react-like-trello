import "./board-styles.css";
import List from "../list/list";
import { useEffect } from "react";
import dragula from "dragula";
import { useState } from "react";

export default function Board() {
  const [content, setContent] = useState([
    {
      title: "Pendente",
      id: "pending",
      cards: [
        { title: "Redes", level: "warn" },
        { title: "Compiladores", level: "danger" },
      ],
    },
    {
      title: "Em Andamento",
      id: "progress",
      cards: [{ title: "Functional Programming", level: "warn" }],
    },
  ]);

  const handleNewCard = (card, index) => {
    const contentElement = [...content];
    const contentTarget = contentElement[index];
    contentTarget.cards = [...contentTarget.cards, card];
    contentElement[index] = contentTarget;
    setContent(contentElement);
  };

  useEffect(() => {
    const listIds = content.map((element) => element.id);
    const listElements = [];
    listIds.forEach((id) => {
      const listElement = document.querySelector(`div#${id}`);
      if (listElement) listElements.push(listElement);
    });
    dragula(listElements, {
      accepts: function (el, target, source, sibling) {
        return (
          !el.className.includes("list__title") &&
          !el.className.includes("list__btn")
        );
      },
      moves: function (el, source, handle, sibling) {
        return (
          !el.className.includes("list__title") &&
          !el.className.includes("list__btn")
        );
      },
    }).on("drop", function (el, target, source, sibling) {
      console.log(el, target, source);
    });
  }, [content]);

  return (
    <main>
      <div className="board">
        {content.map((element, index) => {
          return (
            <List
              key={index}
              handleNewCard={handleNewCard}
              index={index}
              title={element.title}
              id={element.id}
              cards={element.cards}
            ></List>
          );
        })}
      </div>
    </main>
  );
}
