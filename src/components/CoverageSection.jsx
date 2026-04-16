import { useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps'
import './CoverageSection.css'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const OPERATING_STATES = [
  'Arizona', 'California', 'Florida', 'Illinois',
  'New Mexico', 'North Carolina', 'South Carolina', 'Texas',
]

const operationTypes = [
  { name: 'Dry Van', icon: '🚛' },
  { name: 'Reefer', icon: '❄️' },
  { name: 'Flatbed', icon: '🚚' },
  { name: 'Step Deck', icon: '📦' },
  { name: 'Hot Shot', icon: '⚡' },
  { name: 'Box Truck', icon: '🏙️' },
  { name: 'Tanker', icon: '🛢️' },
  { name: 'Intermodal', icon: '🚂' },
  { name: 'Auto Hauler', icon: '🚗' },
  { name: 'Hazmat', icon: '⚠️' },
  { name: 'Frac Sand', icon: '🛢️' },
  { name: 'Sand & Gravel', icon: '🏗️' },
  { name: 'Dry Bulk', icon: '🌾' },
  { name: 'Livestock', icon: '🐄' },
  { name: 'Scrap Metal', icon: '♻️' },
  { name: 'Mixer', icon: '🏛️' },
  { name: 'Cargo Van', icon: '🚐' },
  { name: 'Garbage', icon: '🗑️' },
  { name: 'Bus', icon: '🚌' },
]

export default function CoverageSection() {
  const [tooltip, setTooltip] = useState(null)
  const [activeTab, setActiveTab] = useState('states')

  return (
    <section className="coverage-section section" id="coverage">
      <div className="container">
        <div className="coverage-section__header">
          <div>
            <h2 className="section-title">Where We Operate</h2>
            <p className="section-description">
              Serving trucking companies across 8 states and 19 operation types.
            </p>
          </div>
          <button
            className="coverage-section__cta"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Check if we cover you →
          </button>
        </div>

        {/* Mobile tabs */}
        <div className="coverage-section__tabs" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'states'}
            className={`coverage-section__tab ${activeTab === 'states' ? 'coverage-section__tab--active' : ''}`}
            onClick={() => setActiveTab('states')}
          >
            States (8)
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'types'}
            className={`coverage-section__tab ${activeTab === 'types' ? 'coverage-section__tab--active' : ''}`}
            onClick={() => setActiveTab('types')}
          >
            Operation Types (19)
          </button>
        </div>

        {/* Desktop: side by side. Mobile: tabbed */}
        <div className="coverage-section__body">

          {/* Left — Map */}
          <div className={`coverage-section__panel coverage-section__panel--map ${activeTab === 'states' ? 'coverage-section__panel--visible' : ''}`}>
            <div className="coverage-section__map-wrapper">
              <ComposableMap projection="geoAlbersUsa" className="coverage-section__map">
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
                          className={`coverage-section__state ${isActive ? 'coverage-section__state--active' : ''}`}
                        />
                      )
                    })
                  }
                </Geographies>
              </ComposableMap>
              {tooltip && (
                <div className="coverage-section__tooltip">
                  {OPERATING_STATES.includes(tooltip) ? `${tooltip} — Active` : tooltip}
                </div>
              )}
            </div>
            <ul className="coverage-section__legend">
              {OPERATING_STATES.map((state) => (
                <li key={state} className="coverage-section__legend-item">
                  <span className="coverage-section__legend-dot" />
                  {state}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Operation types */}
          <div className={`coverage-section__panel coverage-section__panel--types ${activeTab === 'types' ? 'coverage-section__panel--visible' : ''}`}>
            <div className="coverage-section__types-grid">
              {operationTypes.map((type) => (
                <div key={type.name} className="coverage-section__type-item">
                  <span className="coverage-section__type-icon" aria-hidden="true">{type.icon}</span>
                  <span className="coverage-section__type-name">{type.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
