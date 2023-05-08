const App = () => {
//    Example=1 // return <h1>hello I am {"Pavan" && "Mohinkar"}</h1>
//   Example=2 //   const element = (
  //     <div>
  //       <h1>Good moring</h1>
  //       <p> hello</p>
  //       <p>hello</p>
  //     </div>
  //   );
  //   return element;
//  Exampe=3 const userName = "Pavan";
//   const element = <h1>hello good moring</h1>;
//   const score = 1000;
//   return (
//     <div>
//       {element} {userName}
//      <p>{score}</p>
//     </div>
//   );
// };
const userName = "Pavan";
  const element = <h1>hello good moring</h1>;
  const score = 1000;
  return (
    <div>
      {true &&element} 
      {false && element} 
      {true && element} 
      {false &&element} 
      {false&&element} 
      {element} 
     <p>{score}</p>
    </div>
  );
};

export default App;
