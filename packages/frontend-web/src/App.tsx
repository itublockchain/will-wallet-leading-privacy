import "./index.css";
import logo from "./assets/logo.png";
import sign from "./assets/sign.png";
import mock from "./assets/mock.jpeg";

const App = () => {
  return (
    <>
      <div className="flex flex-row w-full h-screen bg-gradient-to-b from-[#5D2483] to-[#379CB1] justify-around items-center">
        <div className="md:w-1/3 md:h-[600px] bg-gray-200 opacity-50 rounded-3xl shadow-2xl">
          <img src={logo} className="w-[100px] mt-10 m-auto" />
          <p className="text-xl mx-5 underline font-mono text-justify mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            temporibus aut delectus minima est maiores ab facilis hic quo
            praesentium distinctio labore a asperiores, ratione aspernatur omnis
            quae vel dolorem sit optio reiciendis. Cum libero quas repudiandae,
            nulla fugiat ipsa officia unde voluptate hic illo possimus ad sunt,
            veniam recusandae?
          </p>
          <div>
            <img src={sign} className="w-[200px] m-auto" />
          </div>
        </div>
        <div>
          <img src={mock} className="h-[600px] shadow-2xl"/>
        </div>
      </div>
    </>
  );
};

export default App;
