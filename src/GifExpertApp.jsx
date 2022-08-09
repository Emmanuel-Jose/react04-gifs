import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {
    
    // validar que las key no sean iguales, no agrega el elemento si ya existe
    if( categories.includes( newCategory ) ) return;

    // agregar nueva categoria al arreglo del estado
    // ... esto hace como una copia del arreglo y agrega el nuevo
    setCategories( [ newCategory, ...categories ] )
    
    // otra forma de agregar la categoria
    // setCategories( ( categories ) => [ ...categories, newCategory ] )
  }

  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory 
        // setCategories={ setCategories } 
        onNewCategory={ event => onAddCategory( event ) }
      />

      { 
        categories.map( category => (
            <GifGrid 
              key={ category } 
              category={ category }
            />
          ) ) 
      }

    </>
  )
}
