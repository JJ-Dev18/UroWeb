import { ButtonAdd, ContainerShop, GridShop, Producto } from "../components/shop/shopComponentsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Shop = (props) => {

  
  return (
    <ContainerShop>
      <h1 style={{ textAlign: "center" }}>Productos</h1>
      <GridShop>
        <Link href="/product/campera-free">
          <Producto>
            <img
              src="https://http2.mlstatic.com/D_Q_NP_664084-MCO46093475931_052021-AB.webp"
              alt=""
            />
            <hr />
            <span>
              $256 000
              <br />
              Campera
              <br />
              <ButtonAdd>
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                  color="red"
                ></FontAwesomeIcon>
              </ButtonAdd>
            </span>
          </Producto>
        </Link>
        <Producto>
          <img
            src="https://http2.mlstatic.com/D_Q_NP_664084-MCO46093475931_052021-AB.webp"
            alt=""
          />
          <span>
            $256 000
            <br />
            Campera
            <br />
            <ButtonAdd>
              <FontAwesomeIcon
                icon={faShoppingBasket}
                color="red"
              ></FontAwesomeIcon>
            </ButtonAdd>
          </span>
        </Producto>{" "}
        <Producto>
          <img
            src="https://http2.mlstatic.com/D_Q_NP_664084-MCO46093475931_052021-AB.webp"
            alt=""
          />
          <span>
            $256 000
            <br />
            Campera
            <br />
            <ButtonAdd>
              <FontAwesomeIcon
                icon={faShoppingBasket}
                color="red"
              ></FontAwesomeIcon>
            </ButtonAdd>
          </span>
        </Producto>
      </GridShop>
    </ContainerShop>
  );
}
 
export default Shop;

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`);

  return {
    props: {
      enlaces: response.default.header.enlaces,
      showHeader: true
    }, // will be passed to the page component as props
  };
}