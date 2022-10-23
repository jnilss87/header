async function render() {
  const resp = await fetch("https://cdn.jsdelivr.net/gh/jnilss87/header@latest/header.html");
  const html = await resp.text();
  console.log(html)
  document.getElementById('mount-header').innerHTML = html;
}
render()
