import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import LiveMap from "./components/LiveMap";

const App = () => {
  const location = window.location.href;
  console.log(location);

  return (
    <>
      <Header />
      {location.split("/")[location.split("/").length] === "" ? (
        <LiveMap />
      ) : (
        <MainBody />
      )}
      <Footer />
    </>
  );
};

export default App;
