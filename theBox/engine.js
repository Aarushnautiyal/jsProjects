const box = document.querySelector(".box")
let count = 0;
box.addEventListener("mouseover",()=>{
        // console.log(count)
        if (count === 0) {
        //   console.log(count+1);
            box.classList.add("rotate")
            count++
        } else {
        //   console.log(count);
            box.classList.remove("rotate")
            count--;
        }
})


// traversing array

