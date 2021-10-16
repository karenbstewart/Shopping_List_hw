document.addEventListener('DOMContentLoaded', () => {
    console.log("JS is loaded");

    const handleNewItemFormSubmit= function (event) {
        event.preventDefault();

        console.log(event);

        const food_item = event.target.food_item.value;
        const quantity = event.target.quantity.value;
        const shop = event.target.shop.value;
        console.log(food_item, quantity, shop );

        const newListItem = document.createElement('li');

        const foodElement = document.createElement('h3');
        foodElement.textContent = food_item;
        newListItem.appendChild(foodElement);

        const quantityElement = document.createElement('h3');
        quantityElement.textContent = quantity;
        newListItem.appendChild(quantityElement);

        const shopElement = document.createElement('h2');
        shopElement.textContent = shop;
        newListItem.appendChild(shopElement);

        const shoppingList = document.querySelector('#shopping-list');
        shoppingList.appendChild(newListItem)

        event.target.reset();

    }

    const newItemForm = document.querySelector('#shopping_list_form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);


})