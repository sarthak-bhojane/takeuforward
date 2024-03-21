import { useEffect, useState } from "react";

function App(){
const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3308/submissions')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])

  return(
    <div style={{padding: "50px"}}>
      <table>
        <thead>
        <th>id</th>
        <th>username</th>
        <th>language</th>
        <th>stdin</th>
        <th>code</th>
        <th>timestamp</th>
        </thead>
        <tbody>
          {data.map((d, i) => {
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.username}</td>
              <td>{d.language}</td>
              <td>{d.stdin}</td>
              <td>{d.code}</td>
              <td>{d.timestamp}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App


// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:3307/submissions')
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         return res.json();
//       })
//       .then(data => {
//         setData(data);
//         setError(null);
//       })
//       .catch(err => {
//         setError(err.message);
//         console.error('Error fetching data:', err);
//       });
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div style={{ padding: "50px" }}>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>User Name</th>
//             <th>Language</th>
//             <th>Standard Lang</th>
//             <th>Code</th>
//             <th>Timestamp</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((d, i) => (
//             <tr key={i}>
//               <td>{d.id}</td>
//               <td>{d.username}</td>
//               <td>{d.language}</td>
//               <td>{d.stdin}</td>
//               <td>{d.code}</td>
//               <td>{d.timestamp}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
