function showName() {
    const name = document.getElementById("name");
    document.getElementById("helloMessage").innerHTML = `Hello, ${name.value}`;
}
document.getElementById('button').onclick = showName;

