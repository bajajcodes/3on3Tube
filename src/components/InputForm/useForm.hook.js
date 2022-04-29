export function useForm() {

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
  }

  return { handleFormSubmit };
}
