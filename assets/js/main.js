window.onload = function () {
    const names = [];
    let i = 0;
    const btn = document.querySelectorAll("button");
    const input = document.querySelector("input");
    const tBody = document.querySelector("tbody");
    btn[0].onclick = function (event) {
        event.preventDefault();
        if (input.value.length >= 3) {
            names[i] = input.value;
            i++;
        }
    }
    btn[1].onclick = function (event) {
        event.preventDefault();
        const random = Math.floor(Math.random() * names.length);
        const random1 = Math.floor(Math.random() * names.length);
        let tr = document.createElement("tr");
        const td = document.createElement("td");
        const td1 = document.createElement("td");
        tr.appendChild(td);
        tr.appendChild(td1);
        tBody.appendChild(tr)
        td.textContent = names[random]
        td1.textContent = names[random1]
    }
}