import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <div className="container w-screen flex justify-center mt-10">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default App;
