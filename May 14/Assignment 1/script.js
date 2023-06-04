function checkBoxLimit() {
	var checkBoxGroup = document.getElementById('checkboxgroup').getElementsByTagName("input");	
	var limit = 2;
	for (var i = 0; i < checkBoxGroup.length; i++) {
		checkBoxGroup[i].onclick = function() {
			var checkedcount = 0;
			for (var i = 0; i < checkBoxGroup.length; i++) {
				checkedcount += (checkBoxGroup[i].checked) ? 1 : 0;
			}
			if (checkedcount > limit) {
				
				alert("You can select maximum of " + limit + " checkboxes.");						
				this.checked = false;
			}
		}
	}
}
function submitFunction(){
    

    let tbody = document.getElementById('table');

    let fname = document.getElementById('first-name').value;
	let tr1 = document.createElement('tr');
	let td1 = document.createElement('td');
	td1.textContent = fname;
	tr1.appendChild(td1);
	
    let lname=document.getElementById('last-name').value;
	let tr2 = document.createElement('tr');
	let td2 = document.createElement('td');
	td2.textContent = lname;
	tr1.appendChild(td2);

    let address =document.getElementById('address').value;
	let tr3 = document.createElement('tr');
	let td3 = document.createElement('td');
	td3.textContent = address;
	tr3.appendChild(td3);

    let pincode=document.getElementById('pincode').value;
	let tr4 = document.createElement('tr');
	let td4 = document.createElement('td');
	td4.textContent = pincode;
	tr4.appendChild(td4);

    let gender=document.querySelector('input[name="gender"]:checked ').id;
	let tr5 = document.createElement('tr');
	let td5 = document.createElement('td');
	td5.textContent = gender;
	tr5.appendChild(td5);

    let food=document.querySelectorAll('input[name="food"]:checked ');
    let foods=[];
    
	let tr6 = document.createElement('tr');
	let td6 = document.createElement('td');
    food.forEach((elements) => {foods.push(elements.id)});
	td6.textContent = foods;
	tr6.appendChild(td6);


    let state=document.getElementById('state').value;
	let tr7 = document.createElement('tr');
	let td7 = document.createElement('td');
	td7.textContent = state;
	tr7.appendChild(td7);
    
    let country=document.getElementById('country').value;
	let tr8 = document.createElement('tr');
	let td8 = document.createElement('td');
	td8.textContent = country;
	tr8.appendChild(td8);
    
tbody.appendChild(tr1);
tbody.appendChild(tr2);
tbody.appendChild(tr3);
tbody.appendChild(tr4);
tbody.appendChild(tr5);
tbody.appendChild(tr6);
tbody.appendChild(tr7);
tbody.appendChild(tr8);

}

