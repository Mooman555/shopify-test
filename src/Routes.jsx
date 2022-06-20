import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddGiveAway } from "./components/AddGiveAway";
import { GiveAwayList } from "./components/GiveAwayList";
// import { Product } from "./components/Product";
import { useRoutePropagation } from "@shopify/app-bridge-react";
// import {RoutePropagator } from '@shopify/app-bridge-react';
function MyRoutes(props) {
  const { history, location } = props;
  console.log(location, "location");
  return (
    <>
      {useRoutePropagation(location)}
      {/* <RoutePropagator location={location} /> */}
      <Routes>
        <Route exact path="/" element={<AddGiveAway />} />
        <Route exact path="/giveawaylist" element={<GiveAwayList />} />
        {/* <Route exact path="/products" element={<Product />} /> */}
      </Routes>
    </>
  );
}

export default MyRoutes;
