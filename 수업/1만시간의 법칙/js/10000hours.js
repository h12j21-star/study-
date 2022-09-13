// js file
//input으로 받은 text화면에 띄우기
//버튼 누르면 모달창 나타나고 없어지기
const open = () =>{
  document.querySelector(" .cont-modal").style.display="block";
}
const close = () =>{
  document.querySelector(" .cont-modal").style.display="none";
}
document.querySelector('.btn-go').addEventListener('click',open);
document.querySelector('.cont-modal').addEventListener("click",close);

const write = () => {
  const result = document.querySelector(".cont-inp"); 
  resultwanabe = result.querySelector(".txt-wannabe").value;
  console.log(resultwanabe);
  document.getElementsByClassName(".re-wanabe").text(resultwanabe)
}
document.querySelector('.btn-res').addEventListener('click',write)