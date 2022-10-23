window.headerLib = window.headerLib || {}
headerLib.mount = async function(config) {
  const resp = await fetch("https://cdn.jsdelivr.net/gh/jnilss87/header@0.0.4/header.html");
  const template = await resp.text();
  const urls = config?.urls
  const html = template.replace(
      /%(\w*)%/g, // or /{(\w*)}/g for "{this} instead of %this%"
      function( m, key ){
        return urls?.hasOwnProperty( key ) ? urls[ key ] : "";
      }
  );
  document.getElementById('mount-header').innerHTML = html;
}
