//grabbing input element
let filterInput = document.getElementById('filterInput');
const img = document.querySelector("img");

//Add event listener
filterInput.addEventListener('keyup', filterImages);

function filterImages(){
    //get value of input
    let filterValue = document.getElementById('filterInput').value.toLowerCase();

    //Get thumbnails 
    let thumbnails = document.getElementById('thumbnails');

    //get all items from
    let gallery = thumbnails.querySelectorAll('a.gallery');

    //loop through gallery items
    for(let i = 0; i < gallery.length; i++){
        let link = gallery[i].getElementsByTagName('img')[0];

        //if matched
        if(link.id.indexOf(filterValue) > -1){
            gallery[i].style.display = '';
            // img.style.border = "10px solid purple"
            

        }else {
            gallery[i].style.display = 'none';
            
            
            
            
        
        }
        
        
    }
   
    
}
