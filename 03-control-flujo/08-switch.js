let accion = 'actualizar';

switch (accion) {
    case 'listar':      //  case: una opción específica para la variable 'accion' 
        console.log('Acción de listar');
        break;          // Es bueno usar un brake ya que si el case funciona no es necesario que funcione el otro case
    case 'guardar':
        console.log('Acción de guardar');
        break;
    default:
        console.log('Acción no reconocida dentro del case');
}