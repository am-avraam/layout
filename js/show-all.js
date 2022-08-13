// function showMore() {
//     let firstPar = document.getElementById("firstPar");
//     let moreText = document.getElementById("more");
//     let btnText = document.getElementById("btnToMore");
  
//     if (firstPar.style.display === "none") {
//       firstPar.style.display = "inline";
//       btnText.innerHTML = "Читать далее";
//       moreText.style.display = "none";
//     } else {
//       firstPar.style.display = "none";
//       btnText.innerHTML = "Скрыть подробности";
//       moreText.style.display = "block";

//     }
//   }


let hids = document.querySelectorAll('.card:nth-child(n+7)');
console.log(hids);

let btn = document.querySelector('.button-show');
let btnSign = document.querySelector('.button-show-sign');
let showStatus = document.getElementsByClassName('showIt');
let iconExtand = document.querySelector('.button-show-extend');







btn.addEventListener('click', function() {
    if (showStatus.length > 1) {
          // ниже для актива
  btnSign.innerHTML = 'Показать все';
  btn.style.marginTop = '8px';
  iconExtand.style.transform = 'rotate(360deg)';

  for (let i = 0; i < hids.length; i++) {
  let element = hids[i]; 
  console.log(element);
    element.classList.remove('showIt');
  }
    } else {  

      // ниже для неактива
    btnSign.innerHTML = 'Скрыть';
    btn.style.marginTop = '28px';
    btn.style.marginBottom = '34px';
    iconExtand.style.transform = 'rotate(180deg)';
    
    for (let i = 0; i < hids.length; i++) {
    let element = hids[i]; 
    element.classList.add('showIt');
  }
}

    // ниже для актива
  // btn.innerHTML = 'Показать все';

  // for (let i = 0; i < hids.length; i++) {
  // let element = hids[i]; 
  // console.log(element);
  //   element.classList.remove('showIt');
  // }


  // hids.classList.add('showIt'); // не подходит потому что all - массив, а не конкретный элемент
})

