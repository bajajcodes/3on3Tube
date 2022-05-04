function isEmpty(value) {
  return value?.length === 0 ? true : false;
}

function isUndefined(value) {
  return value === null && value === undefined ? true : false;
}

function ValidateEmail(value) {
  if (isEmpty(value) || isUndefined(value)) {
    return { status: false, message: `Email is empty` };
  } else if (value.indexOf("@") < 1 || value.indexOf(".") < 3) {
    return { status: false, message: `Email is incorrect` };
  }

  return { status: true, message: `Email is correct` };
}

function ValidatePassword(value) {
  if (isEmpty(value) || isUndefined(value)) {
    return { status: false, message: `Password is empty` };
  } else if (value.length < 3) {
    return { status: false, message: `Password is incorrect` };
  }

  return { status: true, message: `Password is correct` };
}

function ValidateTextInput(name, value) {
  if (isEmpty(value) || isUndefined(value)) {
    return { status: false, message: `${name} is empty` };
  }
  return { status: true, message: `${name} is correct` };
}

export { ValidateEmail, ValidatePassword, ValidateTextInput };
