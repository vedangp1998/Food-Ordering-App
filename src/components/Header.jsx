import { useContext } from "react";
import Logo from "../assets/logo.jpg";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumbersOfItems, item) => {
    return totalNumbersOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="Logo Image" />
        <h1>Indori Poha</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
