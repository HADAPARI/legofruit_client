function show(id, eye, eyeslash) {
  console.log(document.getElementById(eye).style);
  console.log(document.getElementById(eyeslash).style);

  if (document.getElementById(eye).style == "display: block;") {
    document.getElementById(id).setAttribute("type", "text");
    document.getElementById(eye).style = "display: none;";
    document.getElementById(eyeslash).style = "display: block;";
  } else {
    document.getElementById(id).setAttribute("type", "password");
    document.getElementById(eye).style = "display: block;";
    document.getElementById(eyeslash).style = "display: none;";
  }
}
export default show;
