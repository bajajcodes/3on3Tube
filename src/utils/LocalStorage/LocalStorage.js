function getValue(key) {
  const value = JSON.parse(localStorage.getItem(key));
  if (value) {
    return value;
  } else {
    console.error(`Item: ${key} does not exists in local storage.`);
    return null;
  }
}

function setValue(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function removeValue(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error.message);
  }
}

export { getValue, setValue, removeValue };
