function search(event) {
    console.log("hello world");
    const input = event.target.value.toUpperCase();
    const ul = document.getElementById("product-list");
    const li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        const h4 = li[i].getElementsByTagName("h4")[0];
        const txtValue = h4.textContent || h4.innerText;
        if (txtValue.toUpperCase().indexOf(input) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

document.getElementById("search-input").addEventListener("input", (e)=>{
    search(e)
})


