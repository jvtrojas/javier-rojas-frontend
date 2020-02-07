// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

const validateInputs = (values) => {
  const errors = {};
  Object.entries(values).forEach(([key, value]) => {
    if(!values[key] && values[key] === 'startDate' || values[key] === 'endDate') {
      errors[key] = `${key} is required!`;
    }
  })

  const startDate = values.startDate;
  const endDate = values.endDate;

  if(startDate && endDate && endDate.isBefore(startDate)) {
    errors.endDate = 'end date cannot be before start date!';
  }

  return errors;
}

const INITIAL_VALUES = {  title: '',
                          company: '',
                          location: '',
                          position: '',
                          description: '',
                          startDate: '',
                          endDate: ''}

const PortfolioCreateForm = (props) => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES }
      validate={validateInputs}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
            <Field  type="text"
                    name="title"
                    label="title"
                    component={PortInput} />
            <Field  type="text"
                    name="company"
                    label="company"
                    component={PortInput} />
            <Field  type="text"
                    name="location"
                    label="location"
                    component={PortInput} />
            <Field  type="text"
                    name="position"
                    label="position"
                    component={PortInput} />
            <Field  type="textarea"
                    name="description"
                    label="description"
                    component={PortInput}/>
            <Field  type="text"
                    name="startDate"
                    label="startDate"
                    component={PortDate} />
            <Field  type="text"
                    name="endDate"
                    label="endDate"
                    canBeDisabled={true}
                    component={PortDate}  />

          <Button color="success" size="lg" type="submit">
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;












// import React from 'react';

// export default class PortfolioCreateForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {title: '', description: '', weapon: ''};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({[event.target.name]: event.target.value});
//     }

//     handleSubmit(event) {
//         alert('submitted: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.weapon);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <Label>
//                 Name:
//                 <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
//                 </Label>
//                 <Label>
//                 Description:
//                 <textarea name="description" value={this.state.description} onChange={this.handleChange} />
//             </Label>
//             <Label>
//             Pick your favorite weapon:
//             <select name="weapon" value={this.state.weapon} onChange={this.handleChange}>
//                 <option value="gun">Gun</option>
//                 <option value="knife">Knife</option>
//                 <option value="katana">Katana</option>
//                 <option value="ak47">AK47</option>
//             </select>
//             </Label>
//                 <input type="submit" value="Submit" />
//             </form>
//       );
//     }
//   }