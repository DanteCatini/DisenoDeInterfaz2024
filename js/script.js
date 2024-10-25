// Selecciona el elemento de búsqueda por su ID
const searchInput = document.getElementById('search-input');
const vetButtons = document.querySelectorAll('#vet-buttons button');

// introduce un input para detectar cuando el usuario escriba algo y llama a la funcion "filtroVetLocalidad()" cada que el usuario escriba algo
searchInput.addEventListener('input', function() {
filtroVetLocalidad()
});

// crea una funcion que convierte el valor de busqueda en minusculas
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



