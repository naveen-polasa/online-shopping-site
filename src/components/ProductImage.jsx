const ProductImage = () => {
  return (
    <section className="md:w-[50%] md:mx-auto lg:mx-0">
      <img
        src={image}
        alt="main"
        className="w-[94%] md:w-[30rem] md:h-[25rem] h-96 mx-3  md:mx-0 my-3 rounded-2xl"
      />
    </section>
  );
};
export default ProductImage;
