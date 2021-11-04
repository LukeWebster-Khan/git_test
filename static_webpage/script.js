function showName() {
  let userInput = document.getElementById("username").value;
  if (document.getElementById("username").value.length === 0) {
    return (document.getElementById("helloMessage").innerHTML =
      "Please enter a username");
  } else {
    return (document.getElementById(
      "helloMessage"
    ).innerHTML = `Hello, ${userInput}`);
  }
}
