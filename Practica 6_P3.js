let i = 0;

function timedCount() {
  i ++;
  postMessage(i);
  setTimeout("timedCount()",6000);
}
timedCount();
