const submitData = (userName, userEmail) => {
  const formData = {
    name: userName,
    email: userEmail,
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const userId = data.id;
      addToDOM(userId)
    })
    .catch(function (error) {
      addToDOM(error.message);
    });
}

const addToDOM = (stringToAdd) => {
  const newEl = document.createElement("h2")
  newEl.textContent = stringToAdd
  document.body.appendChild(newEl)
}
