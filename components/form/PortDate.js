import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { FormGroup, Label, Button } from 'reactstrap';
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class PortDate extends React.Component {
  state = {
    dateValue: moment(),
    isHidden: false
  };

  setFieldValueAndTouched(date, touched) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    setFieldValue(name, date, true);
    setFieldTouched(name, touched, true);
  }
  handleChange = date => {
    this.setState({
        dateValue: date
    });

    this.setFieldValueAndTouched(date, true);
  };

  toggleDate(date) {
    this.setState({
          isHidden: !this.state.isHidden
    });

    this.setFieldValueAndTouched(date, true);
  }

  render() {
    const { isHidden, dateValue } = this.state;
    const { label, canBeDisabled, field, form: { touched, errors } } = this.props;
    //const { touched, errors } = this.props.form;
    return (
        <FormGroup>
            <Label>{label}</Label>
            <div className="input-group">
                {!isHidden &&
                <DatePicker
                    selected={dateValue}
                    onChange={this.handleChange}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    maxDate={moment()}
                    dropdownMode="select"
                />
                }
            </div>
            {canBeDisabled && !isHidden && <Button onClick={()=> this.toggleDate(null)}>Still working here...</Button>}
            {canBeDisabled&& isHidden &&
                <React.Fragment>
                    <span> Still Working Here</span>
                    <Button onClick={()=> this.toggleDate(dateValue)}> Set End Date</Button>
                </React.Fragment>
            }
            {touched[field.name] &&
            errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </FormGroup>
    );
  }
}