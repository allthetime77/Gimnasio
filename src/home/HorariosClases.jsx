import { useEffect, useState } from "react";

function HorariosClases() {
    const [horarios, setHorarios] = useState([]);

    useEffect(() => {
        const horariosFicticios = [
            { clase: 'Yoga', horario: 'Lunes 8:00 AM' },
            { clase: 'Spinning', horario: 'Lunes 6:00 PM' },
            { clase: 'Crossfit', horario: 'Martes 7:00 AM' },
        ];
        setHorarios(horariosFicticios);
    }, []);

    return (
        <section id='horarios'>
            <div className="container">
                <h2>Horarios de Clases</h2>
                <div className="row">
                    {horarios.map((item, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.clase}</h5>
                                    <p className="card-text">Horario: {item.horario}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HorariosClases;
