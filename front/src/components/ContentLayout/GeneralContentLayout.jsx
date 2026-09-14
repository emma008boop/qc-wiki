import PropTypes from "prop-types";
import "./GeneralContentLayout.scss"
const isDefined = (value) =>
  value !== undefined && value !== null && value !== "";

const hasItems = (value) => Array.isArray(value) && value.length > 0;

function ContentList({ items }) {
  if (!hasItems(items)) {
    return null;
  }

  return (
    <ul className="general-content-layout__list">
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  );
}

ContentList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

ContentList.defaultProps = {
  items: [],
};

function DriverAge({ value }) {
  if (!isDefined(value)) {
    return null;
  }

  if (typeof value === "string" || typeof value === "number") {
    return <span>{value}</span>;
  }

  return (
    <span>
      {value.minimum !== undefined && `Minimum: ${value.minimum}`}
      {value.minimum !== undefined && value.maximum !== undefined && " | "}
      {value.maximum !== undefined && `Maximum: ${value.maximum}`}
    </span>
  );
}

DriverAge.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      minimum: PropTypes.number,
      maximum: PropTypes.number,
    }),
  ]),
};

DriverAge.defaultProps = {
  value: undefined,
};

function IftaContent({ value }) {
  if (!value || typeof value !== "object") {
    return null;
  }

  return (
    <div className="general-content-layout__ifta">
      {value.required !== undefined && (
        <span
          className={`general-content-layout__ifta-status ${
            value.required
              ? "general-content-layout__ifta-status--required"
              : "general-content-layout__ifta-status--not-required"
          }`}
        >
          {value.required ? "Required" : "Not required"}
        </span>
      )}

      {value.description && <p>{value.description}</p>}

      {hasItems(value.applicableStates) && (
        <>
          <strong>Applicable states:</strong>
          <ContentList items={value.applicableStates} />
        </>
      )}

      {value.notes && (
        <p className="general-content-layout__notes">{value.notes}</p>
      )}
    </div>
  );
}

IftaContent.propTypes = {
  value: PropTypes.shape({
    required: PropTypes.bool,
    description: PropTypes.string,
    applicableStates: PropTypes.arrayOf(PropTypes.string),
    notes: PropTypes.string,
  }),
};

IftaContent.defaultProps = {
  value: undefined,
};

export default function GeneralContentLayout({
  title,
  description,
  driverAge,
  driverExperience,
  vehicleYear,
  vehicleTypes,
  states,
  ifta,
  markets,
}) {
  const contentItems = [
    {
      key: "driverAge",
      label: "Driver age",
      content: <DriverAge value={driverAge} />,
      visible: isDefined(driverAge),
    },
    {
      key: "driverExperience",
      label: "Driver experience",
      content: driverExperience,
      visible: isDefined(driverExperience),
    },
    {
      key: "vehicleYear",
      label: "Vehicle year",
      content: vehicleYear,
      visible: isDefined(vehicleYear),
    },
    {
      key: "vehicleTypes",
      label: "Vehicle types",
      content: <ContentList items={vehicleTypes} />,
      visible: hasItems(vehicleTypes),
    },
    {
      key: "states",
      label: "States",
      content: <ContentList items={states} />,
      visible: hasItems(states),
    },
    {
      key: "ifta",
      label: "IFTA",
      content: <IftaContent value={ifta} />,
      visible: isDefined(ifta),
    },
    {
      key: "markets",
      label: "Markets",
      content: <ContentList items={markets} />,
      visible: hasItems(markets),
    },
  ];

  const visibleItems = contentItems.filter((item) => item.visible);

  if (!description && visibleItems.length === 0) {
    return null;
  }

  return (
    <section
      className="general-content-layout"
      id="general-requirements"
    >
      <header className="general-content-layout__header">
        <h2 className="general-content-layout__title">{title}</h2>

        {description && (
          <p className="general-content-layout__description">
            {description}
          </p>
        )}
      </header>

      <div className="general-content-layout__body">
        {visibleItems.map(({ key, label, content }) => (
          <article className="general-content-layout__item" key={key}>
            <h3 className="general-content-layout__label">{label}</h3>

            <div className="general-content-layout__value">
              {content}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

GeneralContentLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  driverAge: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      minimum: PropTypes.number,
      maximum: PropTypes.number,
    }),
  ]),
  driverExperience: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  vehicleYear: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  vehicleTypes: PropTypes.arrayOf(PropTypes.string),
  states: PropTypes.arrayOf(PropTypes.string),
  ifta: PropTypes.shape({
    required: PropTypes.bool,
    description: PropTypes.string,
    applicableStates: PropTypes.arrayOf(PropTypes.string),
    notes: PropTypes.string,
  }),
  markets: PropTypes.arrayOf(PropTypes.string),
};

GeneralContentLayout.defaultProps = {
  title: "General Requirements",
  description: undefined,
  driverAge: undefined,
  driverExperience: undefined,
  vehicleYear: undefined,
  vehicleTypes: [],
  states: [],
  ifta: undefined,
  markets: [],
};
