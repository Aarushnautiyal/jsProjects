

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  const inpt = document.querySelector("#todo");
  const adder = document.querySelector("#app");

  if(inpt.value.length>=1){
      adder.innerHTML += `<li><span>${inpt.value}</span><button class="delete">delete</button></li>`;
  }else{
      alert('please feed something first')
  }
  inpt.value = ""
    const del = document.getElementsByClassName("delete");
    for (let i = 0; i < del.length; i++) {
      const dealer = del[i];
    console.log(dealer.parentElement);

      dealer.addEventListener("click", () => {
        const parent = dealer.parentElement;
        parent.remove();
      });
    }
});



