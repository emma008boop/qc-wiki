import GeneralContentLayout from "../../../components/ContentLayout/GeneralContentLayout";
import "../../../components/ContentLayout/GeneralContentLayout";
import "./GeneralTrinity.scss";

export default function GeneralTrinity() {
  return (
    <main className="general-trinity">
      <div className="general-trinity__container">
        <header className="general-trinity__header">
          <p className="general-trinity__eyebrow">
            Trinity Underwriting Guidelines
          </p>

          <h1 className="general-trinity__title">
            General Requirements
          </h1>

            <p className="general-trinity__description">
                Review the general requirements for carriers, drivers, vehicles,
            states, IFTA registration, and available markets.
          </p>
        </header>

        <GeneralContentLayout
          title="MGA General Requirements"
          description="General requirements for carriers operating with Trinity."
          driverAge={{
            minimum: 21,
            maximum: 70,
          }}
          driverExperience="At least 2 years of commercial driving experience"
          vehicleYear="2018 or newer"
          vehicleTypes={[
            "Trucks",
            "Tractor-trailers",
            "Vans",
            "Refrigerated units",
          ]}
          states={[
            "Texas",
            "California",
            "Florida",
            "Arizona",
          ]}
          ifta={{
            required: true,
            description:
              "The carrier must have an active IFTA registration.",
            applicableStates: ["Texas", "California"],
            notes:
              "IFTA documentation must be validated before the carrier is approved.",
          }}
          markets={[
            "General freight",
            "Refrigerated freight",
            "National logistics",
          ]}
        />
      </div>
    </main>
  );
}
