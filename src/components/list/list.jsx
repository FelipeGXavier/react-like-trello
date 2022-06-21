import "./list-styles.css";
import Card from "../card/card";

export default function List(props) {
  return props.content.map((element) => {
    return (
      <div key={element.id} className="list" id={element.id}>
        <div className="list__title">
          <b>{element.title}</b>
          <span>...</span>
        </div>
        {element.cards.map((card) => {
          return (
            <Card key={card.title} level={card.level} title={card.title}></Card>
          );
        })}
        <div className="list__btn">
          <span>+ Adicionar cartão</span>
        </div>
      </div>
    );
  });
}
