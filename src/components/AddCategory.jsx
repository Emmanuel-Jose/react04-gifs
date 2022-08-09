import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState( '' )

    const onInputChanged = ( { target } ) => {
        setInputValue( target.value )
    }

    const onSubmit = ( event ) => {
        event.preventDefault() // evitar que form haga refresh de la web
        //.trim eliminar espacios en ambos extremos del string
        // return para salir de la funcion y que no se ejecute lo demas
        if( inputValue.trim().length <= 1 ) return;

        // el argumento (categories) se refiere a todas las categorias en el estado actual
        // setCategories( ( categories ) => [ inputValue, ...categories ] )
        
        onNewCategory( inputValue.trim() )

        // limpiar caja del buscador
        setInputValue( '' )
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
            type="text"
            placeholder="Search gifs"
            value={ inputValue }
            onChange={ onInputChanged }
            //onChange={ ( event ) => onInputChanged( event ) } // es lo mismo que el onChange de arriba
            />
        </form>
        
    )
}

