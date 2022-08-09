import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = ( category ) => {
    
    const [ images, setImages ] = useState( [] )
    const [ isLoading, setIsLoading ] = useState( true )

    const getImages = async () => {
        const newImages = await getGifs( category )
        setImages( newImages )
        setIsLoading( false )
    }
    
    /* 
    useEfect hook de react que sirve para disparar efectos secundarios
    efectos secundarios - algun proceso que queramos ejecutar cuando algo suceda
    por ejemplo, cuando la categoria cambie, quiero dispara un efecto
    cuando el componente se renderiza por primera vez, quiero dispara un efecto
    */

    /* Cuando el componente se carga por primera vez, ahí, y solo ahí quiero dispara
    la peticion http */

    /* useEffect recibe dos argumentos, una funcion que es lo que se va a hacer, y una lista de
    dependencias [] que nos indica cuando va a volver a ejecutar la funcion el componente, si la lista
    se deja vacía [] significa que ese hook solo se dispara la primera vez que se construye o crea
    el componente */

    useEffect( () => {
        getImages()
    }, [] )


    return {
        images, // images: images,
        isLoading // isLoading: isLoading
    }

}
