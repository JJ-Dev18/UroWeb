import Head from "next/head";
import { ContainerDonate, ContainerDonation, ContainerImage, ContainerInfo, ImageDonate } from "../components/donate/donateComponentStyles";
import styles from "../styles/Home.module.css";

const Donate = (props) => {
  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <ContainerDonate>
        <ContainerInfo>
          <h1>{props.info.titleDona}</h1>
          <p>{props.info.dona}</p>
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="4YLRVMSAGJ8A4"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_CO/i/scr/pixel.gif"
              width="10"
              height="10"
            />
          </form>
        </ContainerInfo>
        <ContainerImage>
          <ImageDonate src="/donate.jpeg" alt="" width="50%" />
        </ContainerImage>
      </ContainerDonate>
      <ContainerDonation></ContainerDonation>
    </>
  );
};

export default Donate;

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`);

  return {
    props: {
      enlaces: response.default.header.enlaces,
      info: response.default.info,
      showHeader : true
    }, // will be passed to the page component as props
  };
}
