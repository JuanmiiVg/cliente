function escapeHTML(text) {
  var replacements = [
    ["&", "&amp;"],
    ['"', "&quot;"],
    ["<", "&lt;"],
    [">", "&gt;"],
  ];
  for (var i = 0; i < replacements.length; i++) {
    var replace = replacements[i];
    text = text.split(replace[0]).join(replace[1]);
  }
  return text;
}
