(function() {
  var content = siteData.map(item => {
    const { title, image, text, tags = [], links = [] } = item;

    const imageDom = image
      ? `<img class="item-image" src="${item.image}">`
      : "";

    const tagsDom = tags.length
      ? tags.map(l =>
          `<a href="${l.url}" target="_blank">
            <div class="item-link">${l.name}</div>
          </a>`
        ).join("")
      : "";

    const linksDom = links.length
      ? links.map(t =>
          `<a href="${t.url}" target="_blank">
            <div class="item-tag">${t.name}</div>
          </a>`
        ).join("")
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