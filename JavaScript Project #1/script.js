function dragElement(el) {
  let p1 = 0, p2 = 0, p3 = 0, p4 = 0;
  el.onpointerdown = start;

  function start(e) {
    e.preventDefault();
    p3 = e.clientX;
    p4 = e.clientY;
    document.onpointermove = move;
    document.onpointerup = stop;
  }

  function move(e) {
    e.preventDefault();
    p1 = p3 - e.clientX;
    p2 = p4 - e.clientY;
    p3 = e.clientX;
    p4 = e.clientY;

    el.style.top = (el.offsetTop - p2) + "px";
    el.style.left = (el.offsetLeft - p1) + "px";

    let jar = document.getElementById("jar-container");
    let r = jar.getBoundingClientRect();
    let centerX = r.left + r.width / 2;

    let dollRect = el.getBoundingClientRect();
    let dollCenter = dollRect.left + dollRect.width / 2;

    let dist = Math.abs(dollCenter - centerX);
    let t = dist / (r.width / 2);
    if (t > 1) t = 1;

    let minScale = 0.7;
    let scale = 1 - t * (1 - minScale);
    el.style.transform = "scale(" + scale + ")";
  }

  function stop() {
    document.onpointermove = null;
    document.onpointerup = null;
  }
}

dragElement(document.getElementById("doll1"));
dragElement(document.getElementById("doll2"));
dragElement(document.getElementById("doll3"));
dragElement(document.getElementById("doll4"));
