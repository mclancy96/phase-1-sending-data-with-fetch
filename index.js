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
      console.log('data:', data);
      const userId = data.id;
      console.log('userId', userId)
      const userInfo = document.createElement("h2")
      userInfo.textContent = userId
      console.log('userInfo', userInfo)
      document.body.appendChild(userInfo)
    })
    .catch(function (error) {
      console.log(error.message);
    });
}
