

let xhr = new XMLHttpRequest()

xhr.open("GET", "https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json")

xhr.send();

xhr.onload = function(){
    let user_list= JSON.parse(xhr.response)


  
  const users_element = document.getElementById('list');
  const pagination_element =document.getElementById('pagination');

  let current_page=1;
  let rows=5;

  function DisplayList (items, wrapper, rows_per_page, page){
    wrapper.innerHTML="";
    page--;

    let start = rows_per_page*page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);
    

    for (let i = 0; i<paginatedItems.length; i++){
        let item = paginatedItems[i];

        let item_element = document.createElement('div');
        item_element.classList.add('item');
        item_element.innerText = item;

        wrapper.appendChild(item_element);
    }
}

function SetupPagination(items, wrapper, rows_per_page){
wrapper.innerHTML = "";

let page_count = Math.ceil(items.length/rows_per_page);
 for (let i=1; i<page_count +1 ;i++){
  let btn= PaginationButton(i,items);
  wrapper.appendChild(btn);
}
}
function PaginationButton(page,items){
  let button = document.createElement('button');
  button.innerText=page;

  if(current_page == page) button.classList.add('active');

  button.addEventListener('click', function(){
    current_page=page;
    DisplayList(items,users_element,rows, current_page )

    let current_btn = document.querySelector('.pagenumbers button.active');
    current_btn.classList.remove('active');

    button.classList.add('active')
  });
  return button;
}
    DisplayList(user_list, users_element,rows,current_page)
    SetupPagination(user_list,pagination_element, rows)

}