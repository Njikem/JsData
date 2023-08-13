
let products = [
    {
    name:`T-shirt`,
    price:35,
    image_url:`https://www.pexels.com/photo/camera-on-chair-2062324/`,
    description:`I love this tshirt`,

    },
    
    {
    name:`shoe`, 
    price:40,
    image_url:`https://www.pexels.com/photo/photo-of-sneakers-on-white-background-2529148/`,
    description:`I hope you like it`,

    },

   {
    name:`pant`,
    price:50,
    image_url:`https://www.pexels.com/photo/blue-jeans-clothes-shopping-52518/`,
    description:`It fell good on the body`,

   },
]


let product_container = document.querySelector(`#product_container`);
for(let i=0; i<products.length; i++){
product_container.insertAdjacentHTML(`beforeend`,`<div class ="product">
    <h3>${products[i][`name`]}</h3>
    <h5>${products[i][`price`]}</h5>
    <p>${products[i][`description`]}</p>
    <img src="${products[i][`image_url`]}"/>

    <button product_name="${products[i][`name`]}"
    product_price="${products[i][`price`]}"
    product_description="${products[i][`description`]}"
    product_image_url="${products[i][`image_url`]}">
    ADD
       
    </button>

</div>`
);

}

function select_product(details){
    let selected = {
        name:
        details[`target`].getAttribute(`product_name`),
        image_url:
        details[`target`].getAttribute(`product_image_url`),
        description:
        details[`target`].getAttribute(`product_description`),
        price:
        details[`target`].getAttribute(`product_price`),

    }

    let selected_json = JSON.stringify(selected);
    cookies.set(`product_selected`, selected_json);

}

let product_button = document.querySelector(`.product`);
for(let i=0; i<product_button.length; i++){
    product_button[i].addEventListener(`click`, selected_product);

}

