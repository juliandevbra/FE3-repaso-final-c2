import { Component } from "react";
import Swal from "sweetalert2";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error,
    });
    // Actualizamos el estado para que el siguiente
    // renderizado muestre la interfaz alternativa
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Cuando ocurre un error, renderizamos una interfaz
      // alternativa para dar feedback al usuario
      return <h1>Ha ocurrido un error.</h1>;
    }
    // Caso contrario retornamos los componentes hijos
    return this.props.children;
  }
}
