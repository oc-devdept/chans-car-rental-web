import React, { Component } from "react";
import Router from "next/router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
// date picker docs - https://react-day-picker.js.org/docs/getting-started
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import Select from "react-select";
import moment from "moment";

// pending: update from chans on any booking restrictions
class VehicleSearch extends Component {
  constructor(props) {
    super(props);

    this.publicHolidayDates = this.publicHolidays();

    // Set default dates
    const dateNow = new Date();
    var dateStart = new Date(dateNow);
    dateStart.setDate(dateStart.getDate() + 3);
    dateStart = this.disabledDateCheck(dateStart);

    var dateEnd = new Date(dateNow);
    dateEnd.setDate(dateStart.getDate() + 1);
    dateEnd = this.disabledDateCheck(dateEnd);

    var dateStartLimit = new Date(dateNow);
    dateStartLimit.setMonth(dateStartLimit.getMonth() + 2);

    var dateEndLimit = new Date(dateStartLimit);
    dateEndLimit.setDate(dateEndLimit.getDate() + 14);

    this.state = {
      dateStart: dateStart,
      dateEnd: dateEnd,
      dateStartLimit: dateStartLimit,
      dateEndLimit: dateEndLimit,
    };

    // Check if search parameters exist, else generate general search parameters
    if (Object.keys(this.props.searchParameters).length !== 0) {
      this.state = {
        ...this.state,
        pickUpDate: this.props.searchParameters.pickUpDate,
        pickUpTime: this.props.searchParameters.pickUpTime,
        isSaturdayPickUp: this.isSaturday(
          this.props.searchParameters.pickUpDate
        ),
        dropOffDate: this.props.searchParameters.dropOffDate,
        dropOffTime: this.props.searchParameters.dropOffTime,
        isSaturdayDropOff: this.isSaturday(
          this.props.searchParameters.dropOffDate
        ),
      };
    } else {
      this.state = {
        ...this.state,
        pickUpDate: dateStart,
        pickUpTime: this.isSaturday(dateStart) ? "08:00" : "09:00",
        isSaturdayPickUp: this.isSaturday(dateStart),
        dropOffDate: dateEnd,
        dropOffTime: this.isSaturday(dateEnd) ? "08:00" : "09:00",
        isSaturdayDropOff: this.isSaturday(dateEnd),
      };
    }

    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // if selected pick up date is later than drop off date,
    // change it to stipulated default end date
    if (this.state.pickUpDate >= this.state.dropOffDate) {
      const { dateEnd } = this.state;
      this.setState({
        ...this.state,
        dropOffDate: dateEnd,
        isSaturdayDropOff: this.isSaturday(dateEnd),
      });
    }
    // reset pick up time if pick up date changed between weekday or saturday
    if (this.state.isSaturdayPickUp !== prevState.isSaturdayPickUp) {
      this.state.isSaturdayPickUp
        ? this.setState({
            ...this.state,
            pickUpTime: "08:00",
          })
        : this.setState({
            ...this.state,
            pickUpTime: "09:00",
          });
    }
    // reset drop off time if drop off date changed between weekday or saturday
    if (this.state.isSaturdayDropOff !== prevState.isSaturdayDropOff) {
      this.state.isSaturdayDropOff
        ? this.setState({
            ...this.state,
            dropOffTime: "08:00",
          })
        : this.setState({
            ...this.state,
            dropOffTime: "09:00",
          });
    }
  }

  publicHolidays() {
    const year = 2020;
    // Jan = 0, Feb = 1, ... Dec = 11
    // https://www.mom.gov.sg/newsroom/press-releases/2019/0408-public-holidays-for-2020
    const dates = [
      { month: 0, day: 1 },
      { month: 0, day: 25 },
      { month: 0, day: 26 },
      { month: 0, day: 27 },
      { month: 3, day: 10 },
      { month: 4, day: 1 },
      { month: 4, day: 7 },
      { month: 4, day: 24 },
      { month: 4, day: 25 },
      { month: 6, day: 31 },
      { month: 7, day: 9 },
      { month: 7, day: 10 },
      { month: 10, day: 14 },
      { month: 11, day: 25 },
    ];

    return dates.map((date) => new Date(year, date.month, date.day));
  }

  disabledDateCheck(date) {
    let datee = new Date(date);
    const publicHolidayCheck = (date) => moment(date).isSame(moment(datee));
    while (
      this.publicHolidayDates.some(publicHolidayCheck) ||
      datee.getDay() === 0
    ) {
      datee.setDate(datee.getDate() + 1);
    }
    return datee;
  }

  isSaturday(date) {
    const day = new Date(date).getDay();
    const isSaturday = day === 6 ? true : false;
    return isSaturday;
  }

  handleDayChange(date, modifiers, input) {
    const { id } = input.input;

    switch (id) {
      case "pick-up":
        let dateEnd = new Date(date);
        dateEnd.setDate(dateEnd.getDate() + 1);
        dateEnd.setHours(0);
        dateEnd = this.disabledDateCheck(dateEnd);
        this.setState({
          ...this.state,
          isSaturdayPickUp: this.isSaturday(date),
          dateEnd: dateEnd,
          pickUpDate: date,
        });
        break;
      case "drop-off":
        this.setState({
          ...this.state,
          isSaturdayDropOff: this.isSaturday(date),
          dropOffDate: date,
        });
        break;
      default:
        break;
    }
  }

  handleTimeChange(id, value) {
    switch (id) {
      case "pickUpTime":
        this.setState({
          ...this.state,
          pickUpTime: value.value,
        });
        break;
      case "dropOffTime":
        this.setState({
          ...this.state,
          dropOffTime: value.value,
        });
        break;
      default:
        break;
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.getSearch(this.state);
    // moiboo API call goes here
    Router.push("/search");
  };

  render() {
    const inputField = [
      {
        controlId: "pick-up",
        formLabel: "Pick-up Date/Time:",
        timeId: "pickUpTime", // corresponds to state
        dateId: "pickUpDate", // corresponds to state
        disabledBefore: "dateStart", // corresponds to state
        disabledAfter: "dateStartLimit", // corresponds to state
        saturday: "isSaturdayPickUp", // corresponds to state
      },
      {
        controlId: "drop-off",
        formLabel: "Drop-off Date/Time:",
        timeId: "dropOffTime", // corresponds to state
        dateId: "dropOffDate", // corresponds to state
        disabledBefore: "dateEnd", // corresponds to state
        disabledAfter: "dateEndLimit", // corresponds to state
        saturday: "isSaturdayDropOff", // corresponds to state
      },
    ];

    const selectOptionsWkday = [
      { value: "09:00", label: "09:00" },
      { value: "10:00", label: "10:00" },
      { value: "11:00", label: "11:00" },
      { value: "12:00", label: "12:00" },
      { value: "13:00", label: "13:00" },
      { value: "14:00", label: "14:00" },
      { value: "15:00", label: "15:00" },
      { value: "16:00", label: "16:00" },
      { value: "17:00", label: "17:00" },
    ];

    const selectOptionsWkend = [
      { value: "08:00", label: "08:00" },
      { value: "09:00", label: "09:00" },
      { value: "10:00", label: "10:00" },
    ];

    const selectStyles = {
      container: (styles) => ({
        ...styles,
        width: "49%",
        height: 45,
        display: "inline-block",
        position: "absolute",
      }),
      control: (styles, { isFocused }) => ({
        ...styles,
        border: 0,
        backgroundColor: "#f5f5f5",
        height: "inherit",
        borderColor: "transparent",
        borderRadius: 0,
        boxShadow: "none",
        outline: isFocused ? "#f29d30 solid 1px" : "none",
      }),
      option: (styles, { isSelected, isFocused }) => ({
        ...styles,
        textAlign: "center",
        backgroundColor: isSelected ? "#4A90E2" : isFocused ? "#DEEBFF" : null,
        color: isSelected ? "#ffffff" : null,
      }),
      valueContainer: (styles) => ({
        ...styles,
        display: "flex",
        justifyContent: "center",
      }),
      singleValue: (styles) => ({
        ...styles,
        color: "#666666",
      }),
      menu: (styles) => ({
        ...styles,
        borderRadius: 0,
        margin: 0,
      }),
    };

    return (
      <div className="search">
        <Form
          className="my-3"
          onSubmit={this.onFormSubmit}
          id={
            this.props.mobile === true
              ? "vehicle-search-mobile"
              : "vehicle-search"
          }
        >
          <Form.Row>
            <Col md={12} lg={true}>
              <Form.Group controlId="location">
                <Form.Label className="text-white">
                  Pick-up / Drop-off Location:
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="363 Sembawang Road, Goodlink Park"
                  disabled={true}
                  style={{
                    backgroundColor: "#d8d8d8",
                  }}
                />
              </Form.Group>
            </Col>
            {inputField.map((item, id) => (
              <Col md={6} lg={true} key={id}>
                <Form.Group controlId={item.controlId}>
                  <Form.Label className="text-white">
                    {item.formLabel}
                  </Form.Label>
                  <br />
                  <DayPickerInput
                    dayPickerProps={{
                      disabledDays: [
                        { daysOfWeek: [0] },
                        { before: this.state[item.disabledBefore] },
                        {
                          after: this.state[item.disabledAfter],
                        },
                        ...this.publicHolidayDates,
                      ],
                      fromMonth: this.state.dateStart,
                      toMonth: this.state[item.disabledAfter],
                    }}
                    inputProps={{
                      id: item.controlId,
                      readOnly: true,
                      style: {
                        height: "100%",
                        width: "100%",
                        padding: 0,
                        border: "none",
                        borderLeft: "1px solid #c5c5c5",
                        borderRight: "1px solid #c5c5c5",
                        backgroundColor: "#f5f5f5",
                        textAlignLast: "center",
                        color: "#666666",
                      },
                    }}
                    style={{
                      width: "50%",
                      height: 45,
                    }}
                    value={this.state[item.dateId]}
                    onDayChange={this.handleDayChange}
                  />
                  <Select
                    options={
                      this.state[item.saturday]
                        ? selectOptionsWkend
                        : selectOptionsWkday
                    }
                    value={{
                      value: this.state[item.timeId],
                      label: this.state[item.timeId],
                    }}
                    styles={selectStyles}
                    isSearchable={false}
                    id={item.timeId}
                    onChange={(value) =>
                      this.handleTimeChange(item.timeId, value)
                    }
                  />
                </Form.Group>
              </Col>
            ))}
            <Col lg={2} md={12} className="align-self-end search-submit">
              <Form.Group>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#458946",
                    fontSize: 16,
                    width: "100%",
                  }}
                >
                  Search
                </Button>
              </Form.Group>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default VehicleSearch;
