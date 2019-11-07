import React from "react";
import { Container } from "reactstrap";
import { Route, Switch, Redirect } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import DataList from "./moduels/placeslist/PlacesList"
import "../src/App.css";

import { Header, Footer } from "./views";

function App() {
  return (
    <>
      <div className="bg-app w-100">
        <div className="h-screen flex flex-col">
          <div className="w-full border-b py-2 border-gray-300 bg-blue-800 text-white">
            <Container className="mx-auto">
              <Header />          
            </Container>
          </div>
          {/* <Container> */}
            <SearchProvider>
            <DataList/>
            </SearchProvider>
          {/* </Container> */}
        </div>
        <Footer />  
      </div>
    </>
  );
}

export default App;
