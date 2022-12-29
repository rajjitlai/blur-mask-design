var blurArea = document.getElementById('blur');

document.onmousemove = function (e) {
          blurArea.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
}