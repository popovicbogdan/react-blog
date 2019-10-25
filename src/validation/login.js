import Validator from "Validator";
import isEmpty from "lodash";

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.email)) {
    errors.email = "This field is required";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "This field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
