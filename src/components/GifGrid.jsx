import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"


export const GifGrid = ( { category } ) => {

    const { images, isLoading} = useFetchGifs( category )


    return (
        <>
            <h3>{ category }</h3>
            {
                // si isLoading está en true va a ejecutar el <h2>, si está en false, eso es lo que regresa
                // y ya no continua haciendo las demás evaluaciones. Esto es un AND lógico
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image } 
                            /* todas las propiedades del img las estamos esparciendo en el gif
                            esto hace que todas las propiedades de image se reciban como props en el componente
                            */
                        />
                    ) )
                }
            </div>
        </>
    )
}
