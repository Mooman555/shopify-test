import React from "react";
// import withRouter  from "react-router";
import { useClientRouting } from "@shopify/app-bridge-react";

function ClientRouter(props) {
  const { history } = props;
  useClientRouting(history);
  return null;
}

export default ClientRouter;
