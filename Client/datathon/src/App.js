import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Outlet, useRoutes } from "react-router-dom";
import SearchPage from "./components/searchPage";
import HomePage from "./components/homePage";

function App() {
  // let element = useRoutes([
  //   // A route object has the same properties as a <Route>
  //   // element. The `children` is just an array of child routes.
  //   { path: "", element: < SearchPage/> },
  //   { path: "home", element: < HomePage/> },
  // ]);
  // console.log(element)
  // return <SearchPage />
  return <HomePage/>
  ;
}

function MyComponent() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/NCTN/my_endpoint")
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

function LoginResponse() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/NCTN/login")
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        setResponseData(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      {responseData ? (
        <>
          <p>{responseData.message}</p>
          <p>{responseData.user}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
