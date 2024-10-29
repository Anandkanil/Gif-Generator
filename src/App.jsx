import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {

const originalConsoleInfo = console.info;
console.info = (...args) => {
  if (
    !args[0]?.includes("Download the React DevTools for a better development experience")
  ) {
    originalConsoleInfo(...args);
  }
};
  return (

   <div className="w-full min-h-screen flex flex-col background">
    <div className="mt-7 bg-white rounded-2xl w-11/12 mx-auto p-4 flex items-center justify-center">
    <h1 className="font-extrabold text-xl">RANDOM GIFS</h1>
    </div>
    <div className="flex flex-col ">
      <Random/>
      <Tag/>
    </div>
   </div>

  );
}
