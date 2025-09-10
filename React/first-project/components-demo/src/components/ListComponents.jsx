
function ListComponents() {
  // return (
  // <>
  // <h2>List</h2>
  // <ul className="list-group">
  //   <li className="list-group-item">item 1</li>
  //   <li>item 2</li>
  //   <li className="list-group-item">item 3</li>
      
  // </ul>
  // </>
  // );
   
  // Array of car names
  const cars = ["Tesla", "BMW", "Audi", "Mercedes", "Toyota", "Ferrari"];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Car List</h1>
      <ul className="list-disc pl-6 space-y-2">
        {cars.map((car, index) => (
          <li key={index} className="text-lg">
            {car}
          </li>
        ))}
      </ul>
    </div>
  );
}

  


export default ListComponents;