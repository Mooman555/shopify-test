import React, { useState } from "react";
import {
  Card,
  Page,
  Layout,
  FormLayout,
  TextField,
  TextStyle,
  Stack,
  Select,
  Button,
  Heading,
  Checkbox,
  InlineError,
} from "@shopify/polaris";
import moment from "moment";
import DatePicker from "react-datepicker";
import TimezoneSelect from "react-timezone-select";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";

export const AddGiveAway = () => {
  const app = useAppBridge();
  const redirect = Redirect.create(app);
  //   const [{ month, year }, setDate] = useState({ month: 1, year: 2018 });
  //   const [selectedDates, setSelectedDates] = useState({
  //     start: new Date("Wed Feb 07 2018 00:00:00 GMT-0500 (EST)"),
  //     end: new Date("Wed Feb 07 2018 00:00:00 GMT-0500 (EST)"),
  //   });

  const [longName, setLongName] = useState("");
  const [shortName, setShortName] = useState("");
  const [orderMessage, setOrderMessage] = useState("");
  const [timerBonusEntries, setTimerBonusEntries] = useState("");

  const [accountBonusEntries, setAccountBonusEntries] = useState("");
  const [friendBonusEntries, setFriendBonusEntries] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [selected, setSelected] = useState("single");
  const [multiplierSelected, setMultiplierSelect] = useState("1x");
  const [timeToObtainBonus, setTimeToObtainBonus] = useState("");
  const [checked, setChecked] = useState(false);
  const [referFriendchecked, setRefereFriendChecked] = useState(false);

  const [referFriendLink, setReferFriendLink] = useState(false);

  const [validations, setValidations] = useState({
    valid_from_date: true,
    valid_to_date: true,
    name: true,
    code: true,
    valid_from_time: true,
    valid_to_time: true,
  });

  const options = [
    { label: "Single", value: "single" },
    { label: "Dual", value: "dual" },
    { label: "Triple", value: "triple" },
  ];

  const MultiplierOptions = [
    { label: "1x", value: "1" },
    { label: "5x", value: "5" },
    { label: "10x", value: "10" },
  ];

  const obtainBonusOptions = [
    { label: "10 Minutes", value: "10" },
    { label: "30 Minutes", value: "30" },
    { label: "45 Minutes", value: "45" },
  ];

  const handleSelectChange = (value) => setSelected(value);

  const handleMultiplierSelectChange = (value) => setMultiplierSelect(value);

  const handleSetTimeToObtainBonus = (value) => setTimeToObtainBonus(value);

  const handleChange = (newChecked) => setChecked(newChecked);

  const handleFriendRefereChange = (newChecked) =>
    setRefereFriendChecked(newChecked);

  const submitGiveAway = () => {
    let _data = {
      valid_from_date: startDate && moment(startDate).format("YYYY-MM-DD"),
      valid_to_date: endDate && moment(endDate).format("YYYY-MM-DD"),
      name: longName,
      code: shortName,
      valid_from_time: startTime && moment(startTime).format("HH:mm"),
      valid_to_time: endTime && moment(endTime).format("HH:mm"),
    };

    let isValidate = _data && validateData(_data);

    console.log(isValidate, "isValidate");

    isValidate.length === 0 &&
      fetch("https://l1.gotomy.dev/shopify/api/v1/public/giveaways", {
        method: "POST",
        body: JSON.stringify(_data),
        // mode:"no-cors",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => {
          redirect.dispatch(Redirect.Action.APP, "/giveawaylist");
        })
        .catch((err) => console.log(err));
  };

  const validateData = (data) => {
    let array = [];
    let _validations = validations;

    Object.keys(data).forEach((key) => {
      if (data[key] === "") {
        array.push(key);
        _validations[key] = false;
      }
    });
    setValidations({ ...validations, validations: _validations });
    return array;
  };

  return (
    <Page
      primaryAction={{ content: "Save", onAction: submitGiveAway }}
      divider
      fullWidth
    >
      <p> BHOLA RECORD</p>
    </Page>
  );
};
