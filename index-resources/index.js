(function() {

  function renderItem(item) {
    const image = item.image || {};
    const tags = item.tags || [];
    const links = item.links || [];

    const tagsDom = tags.map(function(t) {
      return '<a href="' + t.url + '" target="_blank" class="grey-blue-link">' + t.name + '</a>';
    }).join(", ");

    const imageDom = image.src
      ? '<img class="item-image" src="index-resources/images/' + image.src + '">'
      : "";
    const imageDomWithLink = imageDom && image.url
      ? '<a href="' + image.url + '" target="_blank">' + imageDom + '</a>'
      : imageDom

    const linksDom = links.length
      ? links.map(function(l) {
          return '<a href="' + l.url + '" target="_blank"><div class="item-link">' + l.name + ' &#8250;</div></a>'
        }).join("")
      : "";

    var dom = "";
    dom += '<div class="item">';
    dom += '<div class="item-title">' + item.title + '</div>';
    dom += '<div class="item-tags">' + tagsDom + '</div>';
    dom += imageDomWithLink;
    dom += '<div class="item-text">' + item.text + '</div>';
    dom += '<div class="item-links clear-after">' + linksDom + '</div>';
    dom += '</div>';

    return dom;
  }

  var content = siteData.map(renderItem).join("");
  document.getElementById("items").innerHTML = content;
})();