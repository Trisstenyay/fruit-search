const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
    results = fruit.filter(function(item){
        return item.toLowerCase().includes(str.toLowerCase())
    });

    // fruit.forEach(function (item) {
    //     if(item.toLowerCase().includes(str.toLowerCase())){
    //         results.push(item);
    //     };   
    // });

	// TODO
	return results;

}

function searchHandler(e) {
	// TODO
	// clear output
	suggestions.innerHTML='';
	// get word typed by user on the input. This is the input value.
	const inputWord = e.target.value;
	// pass the input value to the search function. The search function will return a list of fruits.
    const searchResults = search(inputWord);
	// pass the list of fruits to show suggestions function. This function should display the fruit on the search box.
    showSuggestions(searchResults, inputWord);
}

function showSuggestions(results, inputVal) {

	// TODO
    if(inputVal === ''){
        suggestions.innerHTML='';
        return;
    }
    for(let i = 0; i < results.length; i++){
        const fruitItem = document.createElement("li");
        fruitItem.addEventListener('mouseover', highlight);
        fruitItem.addEventListener('mouseout', unhighlight);
        fruitItem.textContent = results[i];
        suggestions.appendChild(fruitItem);
    }

  suggestions.style.display = 'block';
    
}

function useSuggestion(e) {
	// TODO
    const selectedElement = e.target;
    const value = selectedElement.textContent;
    input.value = value;
    suggestions.innerHTML = '';
}

function highlight(e){
    const element = e.target;
    element.classList.add('highlight');
}

function unhighlight(e){
    const element = e.target;
    element.classList.remove('highlight');
}





input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);