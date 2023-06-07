# Prueba tecnica Grupo Aspasia

Este proyecto fue creado con create react app, con fines de realizar la entrevista técnica de Grupo Aspasia.

## Ejecución

1) Clonar el repositorio
2) Ejecutar el comando npm install
3) Para levantar la aplicacion ejecutar npm start

### Fundamentos

- Home (path: /): una landing de ingreso, para que el usuario no se tope desde un primer momento con la lista de libros
- Libros (path: /Libros): screen donde se renderizan los libros utilizando React Table. Cada uno de los elementos al tocarlos te redirijen a la screen del detalle, donde se ve información específica de cada libro. Para mejorar la experiencia de usuario se implementó un hover, que se renderiza cuando se posiciona el click sobre cada elemento que permitirá la redirección
- Libro (path: /Libro/:id): screen donde se observa el detalle del libro correspondiente. Se obtiene el id por params, y a partir del mismo se realiza el llamado a la api correspondiente. Agregé una imagen ilustrativa, y un lorem ipsum a modo de simulación de la descripción. 
También en el detalle, es posible agregar el libro a favoritos (el cual se verá renderizado en la pestaña de libros)
- Formulario (path: /Formulario): formulario de tres pasos, donde en la primera pestaña se renderizan los inputs con información más general, en la segunda las categorías, y en la última la información más específica. El formulario esta controlado, y se renderizan los correspondientes modales en caso de éxito y error. 


### Decisiones

- Para el manejo de los favoritos, utilicé localStorage con el fin de mantener los mismos a lo largo de toda la estadía del usuario en la página. De esta manera, se pueden renderizar en la página principal.

### Comentarios

- El diseño de la página lo realicé en Figma, y a partir de él comencé el desarrollo de la evaluación.
- Debido al tiempo dado, y una situación personal que me surgió, no pude realizar el testing con JEST ni llegué a desarrollar los filtros con React-Table.
- Si hubiera contado con mas tiempo, me hubiera gustado simular el agregado de libros a la web, y que los mismos puedan renderizarse en la página principal. También me hubiera tomado el tiempo de hacer un menu desplegable y agregar mas estilos y animaciones a la página. Por último hubiera desarrollado un loader, para mejorar la experiencia de usuario y demostrarle al mismo que la página está cargando.