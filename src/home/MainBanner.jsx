import slide1 from "./../assets/images/banner1.jpg"
import slide2 from "./../assets/images/banner2.jpg"
import slide3 from "./../assets/images/banner3.jpg"

function MainBanner() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Diapositiva 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Diapositiva 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Diapositiva 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block w-100" alt="Instalaciones Modernas de Gimnasio" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Instalaciones Modernas de Gimnasio</h5>
                        <p>Explora nuestro equipamiento de última generación y amplias áreas de entrenamiento.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="Clases Grupales de Fitness" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Clases Grupales de Fitness</h5>
                        <p>Únete a nuestras dinámicas clases grupales y mantente motivado con el apoyo de la comunidad.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="Entrenamiento Personalizado" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Entrenamiento Personalizado</h5>
                        <p>Obtén coaching personalizado y planes de entrenamiento adaptados para alcanzar tus objetivos de fitness.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    )
}

export default MainBanner;
