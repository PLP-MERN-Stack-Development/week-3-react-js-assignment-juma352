   import { useEffect, useState } from 'react';

   const ApiData = () => {
     const [data, setData] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch('https://jsonplaceholder.typicode.com/posts');
           if (!response.ok) throw new Error('Network response was not ok');
           const result = await response.json();
           setData(result);
         } catch (error) {
           setError(error);
         } finally {
           setLoading(false);
         }
       };

       fetchData();
     }, []);

     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error: {error.message}</p>;

     return (
       <ul>
         {data.map(item => (
           <li key={item.id}>{item.title}</li>
         ))}
       </ul>
     );
   };

   export default ApiData;
   