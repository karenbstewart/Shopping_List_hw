document.addEventListener('DOMContentLoaded', () => {
    console.log("JS is loaded");

    const handleNewItemFormSubmit= function (event) {
        event.preventDefault();

        //set the value entered inton the form to a variable
        const food_item = event.target.food_item.value;
        const quantity = event.target.quantity.value;
        const shop = event.target.shop.value;

        const newListItem = document.createElement('li');
        
        const shopElement = document.createElement('h2');
        shopElement.textContent = shop;
        newListItem.appendChild(shopElement);
        
        const quantityElement = document.createElement('h3');
        quantityElement.textContent = quantity;
        newListItem.appendChild(quantityElement);

        const foodElement = document.createElement('h3');
        foodElement.textContent = food_item;
        newListItem.appendChild(foodElement);   

        const shoppingList = document.querySelector('#shopping-list');
        shoppingList.appendChild(newListItem)

        // event.target.reset();
    }

    const handleDeleteAllClick = function (event) {
        const readingList = document.querySelector('#shopping-list');
        readingList.innerHTML = '';
      }

    const newItemForm = document.querySelector('#shopping_list_form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);
    
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

})