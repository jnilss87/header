async function render() {
  const resp = await fetch("header.html");
  const html = await resp.text();
  console.log(html)
  document.getElementById('mount-header').innerHTML = html;
}
render()
