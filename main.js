document.forms.namedItem('contact_me').addEventListener('submit', e => {
  e.preventDefault();

  const inputs = e.target.querySelectorAll('input, textarea');
  const data = {};

  inputs.forEach(fields => {
    data[fields.name] = fields.value
  });

  // Validate input values length
  Object.keys(data).forEach(d => {
    if (data[d].length < 1) {
      return alert(`${d} is required`);
    }
  });

  if (data['name'].length < 4) {
    return alert('Name should contain more than 4 characters');
  }

  if (data['message'].length < 20) {
    return alert('Message should contain more than 20 characters');
  }

  let resultString = '\n';

  Object.keys(data).forEach(d => {
    resultString += `${d} is ${data[d]}\n`;
  });

  return alert(`Submit form with the following data:\n${resultString}`)
});