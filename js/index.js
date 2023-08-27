const loadPhone =  async(searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones =(data.data)
    // console.log(phones)
    displayPhones(phones)
}


         const displayPhones = phones => {
         // console.log(phones)

        const phoneContainar = document.getElementById('phone-containar');
        phoneContainar.textContent = '';

        const showAllContainar = document.getElementById('show-all-containar')
        if(phones.length > 12){
            showAllContainar.classList.remove('hidden')
        }
        else{
            showAllContainar.classList.add('hidden')
        }

        phones = phones.slice(0,12);


        phones.forEach(phone =>{
        console.log(phone);

        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`
        phoneCard.innerHTML = ` <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <h2 class="card-title">${phone.slug
        }</h2>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
        `;

        phoneContainar.appendChild(phoneCard);
    })

}



// handel search button \
          const handelSearch = () => {
          const searchField = document.getElementById('search-field');
          const searchText = searchField.value;
          console.log(searchText)
          loadPhone(searchText)
}

        //    loadPhone();