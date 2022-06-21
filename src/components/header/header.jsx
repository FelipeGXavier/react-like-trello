import "./header-styles.css";
import {
  AiOutlineInfoCircle,
  AiOutlineBell,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

export default function Header() {
  return (
    <nav class="navigation">
      <img
        alt="Trello Logo"
        class="navigation__logo"
        src="https://cdn.worldvectorlogo.com/logos/trello.svg"
      />
      <div className="navigation-box">
        <div className="navigation__search-box">
          <input type="text" />
          <AiOutlineSearch
            size={20}
            className="navigation__search-box--icon"
          ></AiOutlineSearch>
        </div>
        <AiOutlineInfoCircle
          size={20}
          className="navigation__icon"
        ></AiOutlineInfoCircle>
        <AiOutlineBell size={20} className="navigation__icon"></AiOutlineBell>
        <AiOutlineUser size={20} className="navigation__icon"></AiOutlineUser>
      </div>
    </nav>
  );
}
