(function() {

  function renderItem(item) {
    const image = item.image || {};
    const tags = item.tags || [];
    const links = item.links || [];

    const imageDom = image.src
      ? '<img class="item-image" src="index-resources/images/' + image.src + '">'
      : "";
    const imageDomWithLink = imageDom && image.url
      ? '<a href="' + image.url + '" target="_blank">' + imageDom + '</a>'
      : imageDom

    const tagDom = tags.map(function(t) {
      return '<a href="' + t.url + '" target="_blank"><div class="item-tag">' + t.name + '</div></a>';
    }).join("");
    const tagsDom = tagDom
      ? '<div class="item-tags clear-after">' + tagDom + '</div>'
      : "";

    const linksDom = links.length
      ? links.map(function(l, i) {
          const classes = i !== links.length - 1 ? "padding-bottom-5": "";
          return '<a href="' + l.url + '" target="_blank"><div class="item-link ' + classes + '">' + l.name + ' &#8250;</div></a>'
        }).join("")
      : "";

    var dom = "";
    dom += '<div class="item">';
    dom += '<div class="item-title">' + item.title + '</div>';
    dom += imageDomWithLink;
    dom += '<div class="item-text">' + item.text + '</div>';
    dom += tagsDom;
    dom += linksDom;
    dom += '</div>';

    return dom;
  }

  var content = siteData.map(renderItem).join("");
  document.getElementById("items").innerHTML = content;
})();