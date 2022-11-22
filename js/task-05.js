function onInputChange(event) {
  refs.output.textContent = event.currentTarget.value;
  if (!refs.output.textContent) {
    return (refs.output.textContent = "Anonymous");
  }
};