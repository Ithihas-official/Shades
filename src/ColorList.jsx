import SingleColor from "./SingleColor";

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={index} color={color} index={index} />;
      })}
    </section>
  );
};

export default ColorList;
