const ProductScreen = () => {
  return ( 
  <div>
   <h1>Product screen</h1>
  </div> 
  );
}
 
export default ProductScreen;
export const getStaticPaths = async () => {
  return {
    paths: [
      {params : {slug: 'campera-free'}}
    ], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
export async function getStaticProps({ locale }) {
  const response = await import(`../../lang/${locale}.json`);

  return {
    props: {
      enlaces: response.default.header.enlaces,
      showHeader: true,
    }, // will be passed to the page component as props
  };
}