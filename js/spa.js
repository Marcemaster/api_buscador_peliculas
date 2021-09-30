window.onload = function() {

    const xhr = new XMLHttpRequest()

    function procesaRespuesta() {
        if (this.readyState === 4 && this.status === 200) {
            const respuesta = JSON.parse(this.responseText)
            const contenedor = document.querySelector("#contenedor")
            const resultados = respuesta.Search
            
            contenedor.innerHTML = ""
            let innerHTML = ""
            for (let i = 0; i < resultados.length; i++) {
                const pelicula = resultados[i]
                
                innerHTML = innerHTML + `<article class="pelicula">
                    <img src="${pelicula.Poster}" alt="Poster de la película" de ${pelicula.Title}>
                    <p class="titulo">${pelicula.Title}</p>
                    </article>`
            }
            contenedor.innerHTML = innerHTML
        } else {
            alert("algo no ha ido bien")
        }
    }

    function busca(ev) {
        ev.preventDefault()

        const cuadro_entrada = document.querySelector("#criterios")
        const cadena_busqueda = cuadro_entrada.value

        const url = `https://www.omdbapi.com/?apikey=da22215a&s=${cadena_busqueda}`
        xhr.open('GET', url, true)
        xhr.onload = procesaRespuesta
        xhr.send()
    }

    const btnBuscar = document.querySelector("#btn-buscar")
    btnBuscar.addEventListener("click", busca)
}