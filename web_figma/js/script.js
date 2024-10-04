
const searchInput = document.getElementById('search-input');
const vetButtons = document.querySelectorAll('#vet-buttons button');

searchInput.addEventListener('input', function() {
filtroVetLocalidad()
});

function filtroVetLocalidad() {
    const searchText = searchInput.value.toLowerCase();

    vetButtons.forEach(button => {
        const localidad = button.getAttribute('data-localidad').toLowerCase(); 
        if (localidad.includes(searchText)) {
            button.style.display = ''; 
        } else {
            button.style.display = 'none'; 
        }
    });
}



