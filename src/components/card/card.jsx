import "./card-styles.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className={`badge-${props.level}`}>
        <span>&nbsp;</span>
      </div>
      <p>{props.title}</p>
      <span className="card__icon">&nbsp;</span>
    </div>
  );
}
