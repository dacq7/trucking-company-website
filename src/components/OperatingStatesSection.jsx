import { useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps'
import './OperatingStatesSection.css'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const OPERATING_STATES = [
  'Arizona',
  'California',
  'Florida',
  'Illinois',
  'New Mexico',
  'North Carolina',
  'South Carolina',
  'Texas',
]

export default function OperatingStatesSection() {
  const [tooltip, setTooltip] = useState(null)

  return (
    <section className="operating-states-section section" id="states">
      <div className="container">
        <h2 className="section-title">Operating States</h2>
        <p className="section-description">
          We currently support trucking companies operating across the following states.
        </p>

        <div className="operating-states-section__map-wrapper">
          <ComposableMap
            projection="geoAlbersUsa"
            className="operating-states-section__map"
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const stateName = geo.properties.name
                  const isActive = OPERATING_STATES.includes(stateName)
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => setTooltip(stateName)}
                      onMouseLeave={() => setTooltip(null)}
                      className={`operating-states-section__state ${isActive ? 'operating-states-section__state--active' : ''}`}
                    />
                  )
                })
              }
            </Geographies>
          </ComposableMap>

          {tooltip && (
            <div className="operating-states-section__tooltip">
              {OPERATING_STATES.includes(tooltip) ? `${tooltip} — Active` : tooltip}
            </div>
          )}
        </div>

        <ul className="operating-states-section__legend">
          {OPERATING_STATES.map((state) => (
            <li key={state} className="operating-states-section__legend-item">
              <span className="operating-states-section__legend-dot" />
              {state}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
