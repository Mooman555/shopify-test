import React, { useState, useEffect } from "react";
import {
  TextContainer,
  Page,
  DisplayText,
  Heading,
  Card,
} from "@shopify/polaris";
import { useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";

export const GiveAwayList = ({ setToggle }) => {
  const [giveAwaysList, setGiveAwaysList] = useState([]);

  useEffect(() => {
    fetch("https://l1.gotomy.dev/shopify/api/v1/public/giveaways", {
      method: "GET",
      // mode:"no-cors",
      headers: {
        "Content-type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS"
      },
    })
      .then(async (response) => {
        let data = await response.json();
        setGiveAwaysList(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const calculateDays = (dateFrom, dateTo) => {
    let days = Math.ceil(
      Math.abs(new Date(dateTo) - new Date()) / (1000 * 60 * 60 * 24)
    );
    let value = Math.sign(days) == 1 ? days : "Ended";
    return value;
  };

  const app = useAppBridge();
  const redirect = Redirect.create(app);
  return (
    <Page
      breadcrumbs={[
        {
          content: "Giveaway",
          // onAction: () => redirect.dispatch(Redirect.Action.APP, "/"),
          onAction: () => setToggle(),
          title: "Back",
        },
      ]}
      primaryAction={{
        content: "Add New Giveaway",
        // onAction: () => redirect.dispatch(Redirect.Action.APP, "/"),
        onAction: () => setToggle(),
      }}
      divider
      fullWidth
    >
      {giveAwaysList?.map((list) => (
        <Card sectioned key={list?.id}>
          <TextContainer>
            <Heading>
              {list.name} {list.id}
            </Heading>
            <br />
            <DisplayText size="extra-small">
              {!isNaN(calculateDays(list?.valid_from, list?.valid_to)) ? (
                `Ends in ${calculateDays(
                  list?.valid_from,
                  list?.valid_to
                )} Days`
              ) : (
                <b>Ended</b>
              )}
            </DisplayText>
            <br />
            <DisplayText size="extra-small">
              Start Date : {list?.valid_from}
            </DisplayText>
            <DisplayText size="extra-small">
              End Date : {list?.valid_to}
            </DisplayText>
          </TextContainer>
        </Card>
      ))}
      <br />
      <br />
    </Page>
  );
};
