function GeneralContentLayout({
    states = [],
    driverRequirements = {},
    units = [],
    iftaRequired = false
}) {
    return (
        <section className="general-content">

            {/* States */}
            <section className="general-content__section">
                <h2>Estados</h2>

                {states.length > 0 ? (
                    <ul className="general-content__list">
                        {states.map((state) => (
                            <li key={state}>
                                {state}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay estados definidos.</p>
                )}
            </section>

            {/* Driver requirements */}
            <section className="general-content__section">
                <h2>Requisitos del conductor</h2>

                <div className="general-content__grid">

                    <div className="general-content__item">
                        <span>Edad mínima</span>
                        <strong>
                            {driverRequirements.minAge ?? "No definido"}
                        </strong>
                    </div>

                    <div className="general-content__item">
                        <span>Edad máxima</span>
                        <strong>
                            {driverRequirements.maxAge ?? "No definido"}
                        </strong>
                    </div>

                    <div className="general-content__item">
                        <span>Experiencia mínima</span>
                        <strong>
                            {driverRequirements.minExperienceYears ?? "No definido"}
                        </strong>
                    </div>

                    <div className="general-content__item">
                        <span>Máximo de violaciones menores</span>
                        <strong>
                            {driverRequirements.violations?.minor ?? "No definido"}
                        </strong>
                    </div>

                    <div className="general-content__item">
                        <span>Máximo de violaciones mayores</span>
                        <strong>
                            {driverRequirements.violations?.major ?? "No definido"}
                        </strong>
                    </div>

                </div>
            </section>

            {/* Units */}
            <section className="general-content__section">
                <h2>Unidades</h2>

                <div className="general-content__grid">

                    <div className="general-content__item">
                        <span>Tipos de unidades</span>

                        {units.length > 0 ? (
                            <ul className="general-content__list">
                                {units.map((unit) => (
                                    <li key={unit.type}>
                                        {unit.type}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No hay unidades definidas.</p>
                        )}
                    </div>

                    <div className="general-content__item">
                        <span>Año máximo de las unidades</span>

                        <strong>
                            {units.length > 0
                                ? Math.min(
                                    ...units
                                        .map((unit) => unit.maxYear)
                                        .filter(Boolean)
                                )
                                : "No definido"
                            }
                        </strong>
                    </div>

                </div>
            </section>

            {/* IFTA */}
            <section className="general-content__section">
                <h2>IFTA</h2>

                <div className="general-content__item">
                    <span>¿Requiere IFTA?</span>

                    <strong>
                        {iftaRequired ? "Sí" : "No"}
                    </strong>
                </div>
            </section>

        </section>
    );
}

export default GeneralContentLayout;