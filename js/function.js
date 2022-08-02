function showMore() {
    let firstPar = document.getElementById("firstPar");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("btnToMore");
  
    if (firstPar.style.display === "none") {
      firstPar.style.display = "inline";
      btnText.innerHTML = "Читать далее";
      moreText.style.display = "none";
    } else {
      firstPar.style.display = "none";
      btnText.innerHTML = "Скрыть подробности";
      moreText.style.display = "block";

    }
  }