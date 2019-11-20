function addItem(e){
	e.preventDefault();
	const text=(this.querySelector("[name=item]")).value;
	const item={
		text,
		done:false
	};
	items.push(item);
	populateList(items,itemsList);
	this.reset();

}

function populateList(plates=[],platesList){
	platesList.innerHTML=plates.map((plate,i)=>{
		
		return `
		<li>
				<input type="checkbox" id="item${i}>"
				<label for="item${i}">${plate.text}</label>
		</li>

		`;
	}).join(" ");
	
}
addItems.addEventListener("submit",addItem);

