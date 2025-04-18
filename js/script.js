const loadPhone = async (searchText)=>{
    const response = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phones  = data.data;
    //console.log(phones);
    displayPhones(phones);

}


const displayPhones = phones => {
    // console.log(phones);

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText='';
    phones.forEach(phone =>{
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 w-96 shadow-xl m-10 p-10`;
        phoneCard.innerHTML = `
        <figure>
    <img
      src="${phone.image}"
      alt="Shoes" />
</figure>
<div class="card-body">
<h1 class="text-2xl"> Brand Name:  ${phone.brand} </h1>
<h2 class="card-title">${phone.phone_name}</h2>
<p> ${phone.slug}</p>
<div class="card-actions justify-end">
<button onclick ="handleShowDetails('${phone.slug}')" class="btn btn-primary text-center">Show Details</button>
</div>
</div>
</div>
        `;

        phoneContainer.appendChild(phoneCard)

    } )

}





const handleSearch = () => {
const searchField = document.getElementById('search-field');
const searchText = searchField.value;
// console.log(searchText);
loadPhone(searchText);
}


const handleShowDetails = async (id) =>{
    console.log(id);
    const res = await fetch ('https://openapi.programming-hero.com/api/phone/${id}');
    const data = await res.json();
    const phone = data.data

   
showPhoneDetails(phone);

}

const showPhoneDetails = (phone)=>{
    show_details_modal.showModal();
    const phoneName = document.getElementById('showDetailsPhoneName');
    phoneName.innerText = phone.name;
    console.log(phone)

}