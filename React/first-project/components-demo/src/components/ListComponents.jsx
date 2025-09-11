// import { useState } from "react";

// function App() {
//   const [cars] = useState(["Tesla", "BMW", "Audi", "Mercedes", "Toyota", "Ferrari"]);

//   // Handle click on car name
//   const handleCarClick = (index) => {
//     alert(`Clicked: ${cars[index]}`);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Car List</h1>

//       <ul className="list-disc pl-6 space-y-2">
//         {cars.map((car, index) => (
//           <li
//             key={index}
//             onClick={() => handleCarClick(index)}
//             className="cursor-pointer hover:text-blue-600 text-lg"
//           >
//             {car}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
