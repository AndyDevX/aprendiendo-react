// Podemos directamente importar su estilo propio
import './App.css'

// Recuerda exportar el componente
export function App () {
    // Recuerda retornar el contenido
    return (
        /* Puedes usar estilos en línea, pero como objetos, no como cadenas
        (X display: "flex")
        (✓ {{ display: "flex" }} ) */
        <article>
            <header>
                <img src="https://unavatar.io/github/AndyDevX" alt="Avatar de AndyDevX" />
                <div>
                    <strong>AndyDevX</strong>
                    <span>@andyX</span>
                </div>
            </header>
            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}