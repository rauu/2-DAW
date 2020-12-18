function color() {
    let count = 0;
    let c = document.getElementsByTagName("p");
    console.log(c);
    for (let x = 0; x < c.length; x++) {
        c[x].id = x;
        if (c[x].id % 2 == 0) {
            c[x].style.color = "green";
        } else if (c[x].id % 2 != 0) {
            c[x].style.color = "red";
        }
    }

}