import ProductCard from "./components/ProductCard";
import main from "./assets/main.jpeg";
import one from "./assets/one.jpg";
import two from "./assets/two.jpg";
import three from "./assets/three.jpg";
import four from "./assets/four.jpg";
import five from "./assets/five.jpeg";
function App() {
  const items = [one, two, three, four, five];
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="max-w-screen-xl h-screen flex flex-col md:flex-row overflow-hidden md:bg-slate-100">
        <img src={main} className="-z-50 md:z-0 w-full md:w-3/6 h-3/5 md:h-screen" />

        <div className="-mt-56 md:mt-8 w-full md:w-3/6 h-4/6 md:h-screen md:self-center flex flex-col justify-evenly  items-start pl-6 md:pl-16 text-left">
          <p className="font-bold text-xl md:text-2xl w-4/6 text-white md:text-black">
            Everyday tops, we have something to suit every occasion.
          </p>
          <p className="hidden md:inline  font-light text-xs w-4/6 text-black/50 font-semibold mt-2">
            At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu
            proin leo gravida cursus
          </p>
          <p className="text-white md:text-black text-sm md:text-xs border-b-2 md:border-b-1 md:h-6 border-white md:border-black/60 md:mt-2 ">
            Shop All Everyday Items
          </p>
          <div className=" w-screen md:w-full md:h-96 flex bg-white/0 overflow-x-scroll md:mt-16">
            {items.map((item) => (
              <ProductCard item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
