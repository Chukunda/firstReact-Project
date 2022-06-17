// import logo from "./logo.svg";
import "./App.css";

function App() {
   const now = new Date();
   const a = 10;
   const b = 20;

   return (
      <div>
         <p>Hello People {now.toString()}</p>
         <p>
            {a} plus {b} is {a + b}
         </p>
         <Hello />
      </div>
   );
}

const Hello = () => {
   return <p>Hello World</p>;
};

export default App;
