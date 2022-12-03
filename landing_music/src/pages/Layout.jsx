import Card from "../components/Layout/Card";
import dataCard from "../utils/dataCard";

const Layout = () => {
  return (
    <>
      {dataCard.map((card) => (
        <Card key={card.name} {...card} />
      ))}
    </>
  );
};

export default Layout;
