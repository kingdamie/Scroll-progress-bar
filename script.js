window.onscroll = function () {
  updateProgressBar();
};
function updateProgressBar() {
  const progressBar = document.getElementById("myBar");
  const scrollpos =
    document.documentElement.scrollTop || document.body.scrollTop;
  const documentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (scrollpos / documentHeight) * 100;
  progressBar.style.width = scrolled + "%";
}
