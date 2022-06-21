import "./board-styles.css";
import List from "../list/list";

export default function Board() {
  const content = [
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
  ];
  return (
    <main>
      <div className="board">
        <List content={content}></List>
      </div>
    </main>
  );
}
