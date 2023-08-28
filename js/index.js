const loadPhone =  async(searchText='13', isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones =(data.data)
    // console.log(phones)
    displayPhones(phones, isShowAll)
}


         const displayPhones = (phones, isShowAll) => {
        //  console.log(phones)

        const phoneContainar = document.getElementById('phone-containar');
        phoneContainar.textContent = '';

        const showAllContainar = document.getElementById('show-all-containar')
        if(phones.length > 12 && !isShowAll){
            showAllContainar.classList.remove('hidden')
        }
        else{
            showAllContainar.classList.add('hidden')
        }
        // console.log('is show all', isShowAll)
        if(!isShowAll){
            phones = phones.slice(0,12);
        }

        phones.forEach(phone =>{
        // console.log(phone);

        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`
        phoneCard.innerHTML = `<figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <div class="card-actions justify-center">
        <button onclick="handleShowDetail('${phone.slug}');" class="btn btn-primary">Show Details</button>
        </div>
        </div>
        `;

        phoneContainar.appendChild(phoneCard);
    });
    toggleLoadingSpinner(false)

}
// show
const handleShowDetail = async (id)=>{
    // console.log('click show details', id)
    // load data 
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    const phone = data.data;
    showPhoneDetails(phone)


}
const showPhoneDetails = (phone) =>{
    console.log(phone);
    const phoneName = document.getElementById('phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML = `
    <img class="mb-6 mt-4" src="${phone.image}"alt="" />
    <p><span class="font-bold">Brand:
    :</span>${phone?.brand
    }</p>
    <p><span class="font-bold ">storage:</span>${phone?.mainFeatures?.storage}</p>
    <p><span class="font-bold ">ChipSet
    :</span>${phone?.mainFeatures?.chipSet
    }</p>
    <p><span class="font-bold ">releaseDate
    :</span>${phone?.mainFeatures?.releaseDate
    }</p>
    <p><span class="font-bold ">displaySize
    :</span>${phone?.mainFeatures?.displaySize
    }</p>
    <p><span class="font-bold ">releaseDate
    :</span>${phone?.mainFeatures?.releaseDate
    }</p>
    
    `
    // show the modal 
    show_details_modal.showModal() 

}



// handel search button \
          const handelSearch = (isShowAll) =>{
          toggleLoadingSpinner(true)
          const searchField = document.getElementById('search-field');
          const searchText = searchField.value;
          console.log(searchText)
          loadPhone(searchText, isShowAll)
          
}


const  toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner')
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
   
}


// handle show all 

const handleShowAll = () =>{
    handelSearch(true);

}
 loadPhone();