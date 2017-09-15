var select = document.getElementsByName("cars")[0];
// 
// select.onclick = function(event) {
//   console.log(event, "CLICKED");
// };

function callBackListener(event){
  console.log("select was clicked");
};

select.addEventListener('click', callBackListener);
