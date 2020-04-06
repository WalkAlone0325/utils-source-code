
var aa = document.documentElement.outerHTML
  .match(
    /(url\(|src=|href=)[\"\']*([^\"\'\(\)\<\>\[\] ]+)[\"\'\)]*|(http:\/\/[\w\-\.]+[^\"\'\(\)\<\>\[\] ]+)/gi
  )
  .join("\r\n")
  .replace(/^(src=|href=|url\()[\"\']*|[\"\'\>\) ]*$/gim, "");
alert(aa);