let product_selected = `items`;

let selected_jsob = cookies.get(`product_selected`);
let product_container = document.querySelector(`.product_container`);

if (selected_json === undefined) {
    product_container.insertAdjacentHTML(`beforeend`, <h3>Nothing Selected</h3>);

} else {
    let product = JSON.parse(selected_json);
    product_container.insertAdjacentHTML(`before`, `<div class="product">
    <h3>${products[i][`name`]}</h3>
    <h5>${products[i][`price`]}</h5>
    <p>${products[i][`description`]}</p>
    <img src="${products[i][`image_url`]}"/>
    </div>`

    );
}

