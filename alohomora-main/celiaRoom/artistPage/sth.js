
  function goRandomSite() {
    var sites = [
        'http://www.dilbert.com',
        'http://stackoverflow.com',
        'https://github.com/juliecst/annaRoom/settings/pages',
        'https://www.window-swap.com/Window',
        'https://www.bbc.co.uk/news/uk-politics-64815875',
        'https://juliecst.github.io/annaRoom/',
        'https://juliecst.github.io/celiaRoom/'
    
      ];
    var site = sites[Math.floor(Math.random() * sites.length)];
    window.open(site, '_blank').focus();
     }

  var button = document.getElementById("button");
  console.log(button);
  button.addEventListener("click", goRandomSite);


