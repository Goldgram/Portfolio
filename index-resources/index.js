(function() {
  var content = siteData.map(item => {
    const { title, image, text, tags = [], links = [] } = item;

    const imageDom = image
      ? `<img class="item-image" src="index-resources/images/${item.image}">`
      : "";

    const tagDom = tags.map(t =>
      `<a href="${t.url}" target="_blank">
        <div class="item-tag">${t.name}</div>
      </a>`
    ).join("");

    const tagsDom = tagDom
      ? `<div class="item-tags clear-after">${tagDom}</div>`
      : "";

    const linksDom = links.length
      ? links.map((l, i) => {
          const clases = i !== links.length - 1 ? "padding-bottom-5": "";
          return `<a href="${l.url}" target="_blank">
            <div class="item-link ${clases}">${l.name} &#8250;</div>
          </a>`
        }).join("")
      : "";

    return `<div class="item">
      <div class="item-title">${title}</div>
      ${imageDom}
      <div class="item-text">${text}</div>
      ${tagsDom}
      ${linksDom}
    </div>`;
  }).join("");

  document.getElementById("items").innerHTML = content;
})();