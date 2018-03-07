//DATA MODEL ARRAY FOR PROJECT

var destination =
[{
  id: '0',
  photo: 'https://fthmb.tqn.com/8P3PyRt6bBjrvUrBcuArKpnZBdc=/768x0/filters:no_upscale()/Taiwan-58b9d0fb5f9b58af5ca84819.jpg',
  destinationName: 'Taipei, Taiwan',
  city: 'Taipei',
  country: 'Taiwan',
  language: 'Mandarin Chinese',
  fact: 'Known for it\'s street food and night markets',
  currency: 'Taiwanese Dollar (TWD)',
  hotspots: ['Tonghua Night Market', 'National Palace Museum', 'Ximending']
},

{
  id: '1',
  photo: 'https://meet-minneapolis.s3.amazonaws.com/CMS/5392/1044337__hero.jpg',
  destinationName: 'Santiago, Chile',
  city: 'Santiago',
  country: 'Chile',
  language: 'Spanish',
  fact: 'Santiago is the Capital of Chile',
  currency: 'Chilean Peso (CLP)',
  hotspots: ['Cerro Santa Lucia (San Lucia Hill)', 'Presidential Palace', 'Art Museum']
},

{
  id: '2',
  photo: 'https://thumbs.dreamstime.com/b/johannesburg-cbd-aerial-view-13314732.jpg',
  destinationName: 'Johannesburg, South Africa',
  city: 'Johannesburg',
  country: 'South Africa',
  language: 'English and Afrikaans',
  fact: 'Second biggest city in Africa',
  currency: 'South African Rand (ZAR)',
  hotspots: ['Apartheid Museum', 'Nature Reserves and Safaris', 'Soweto']
}
]

//DETAILED VIEW

function renderDetailViewItem(item){
  return `<div class="card mt-4">
    <img class="card-img-top img-fluid" src="${item.photo}" alt="">
    <div class="card-body">
      <h2 class="card-title">${item.city}</h2>
      <h6>Country: ${item.country}</h6>
      <ul>
          <li>Language: ${item.language}</li>
          <li>Currency: ${item.currency}</li>
          <li>Fact: ${item.fact}</li>
          <li>HotSpots: ${item.hotspots}</li>
    </div>
  </div>
  `
}

var detailViewString = renderDetailViewItem(destination[2]);
var detailView = document.getElementById('detail-view');

detailView.innerHTML = detailViewString;
console.log(detailViewString);

function changeView(dest){

  detailView.innerHTML = renderDetailViewItem(dest);



}


// SMALLER VIEW

function renderCollectionViewItem(destination){
  return `<a href="#" class="list-group-item destination-links" onclick='showDetail()' id="${destination.id}" > ${destination.destinationName} </a>`
}

// var addDestination = document.createElement('a')
var collectionView = document.getElementById('collection-view');


for (var i = 0; i < destination.length; i++){
  var collectionViewString = renderCollectionViewItem(destination[i])
  collectionView.innerHTML += collectionViewString
  // collectionView.childNodes[i].addEventListener('click', makeActive)
}

// ACTIVE CLICK
$(document).ready(function(){
  $('a').click(function(){
    $('a').removeClass('active');
    $(this).addClass('active');
    var elementId = $(this).attr('id');
    changeView(destination[Number(elementId)]);

  })
})



function showDetail(itemClicked) {
console.log('iwork');
  var showDetailView =  document.getElementById('detail-view');
  showDetailView.innerHTML += itemClicked;
}









// function showDetail(){
//   for (var i = 0; i < )
//
// }
//
// // Testing out how to get data updated
// function showDetail(itemClicked) {
// console.log('iwork');
//   var showDetailView =  document.getElementById('detail-view');
//   showDetailView.innerHTML += itemClicked;
// }
//
// showDetail(destination[i]);












// function makeActive(event){
//   alert('howdy!')
//   // event.target.classList.add("active");
//   var linksArray = document.querySelectorAll('a.destination-links')
//    linksArray[index].classList.add("active");
// }

// var linksArray = document.querySelectorAll('a.destination-links');
//
// linksArray.forEach(function(link){
//   link.addEventListener('click', function(e){
//     linksArray.classList.add('active');
//   })
// })
