import React, { useEffect, useState } from "react";

function MyComponent() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/my_endpoint")
      .then((response) => response.json())
      .then((data) => {
        setResponseData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      {responseData ? <p>{responseData.message}</p> : <p>Loading...</p>}
    </div>
  );
}

export default MyComponent;
