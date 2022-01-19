export const getProductsFromCategory = (site, category) => {
    return fetch(`https://api.mercadolibre.com/sites/${site}/search?category=${category}`)
        .then(data => data.json())
}

/*
FETCH(URL, OPCIONES).THEN(RESULTADO)
OPTIONS =  METHOS, HEADERS, BODY, ...ETC
*/