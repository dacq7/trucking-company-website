import { useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps'
import {
  Truck,
  Snowflake,
  Container,
  Package,
  Zap,
  Box,
  Droplets,
  Train,
  Car,
  AlertTriangle,
  Mountain,
  Shovel,
  Wind,
  PawPrint,
  Recycle,
  Building2,
  Van,
  Trash2,
  Bus,
} from 'lucide-react'
import './CoverageSection.css'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const OPERATING_STATES = [
  'Arizona', 'California', 'Florida', 'Illinois',
  'New Mexico', 'North Carolina', 'South Carolina', 'Texas',
]

const operationTypes = [
  { name: 'Dry Van', icon: Truck },
  { name: 'Reefer', icon: Snowflake },
  { name: 'Flatbed', icon: Container },
  { name: 'Step Deck', icon: Package },
  { name: 'Hot Shot', icon: Zap },
  { name: 'Box Truck', icon: Box },
  { name: 'Tanker', icon: Droplets },
  { name: 'Intermodal', icon: Train },
  { name: 'Auto Hauler', icon: Car },
  { name: 'Hazmat', icon: AlertTriangle },
  { name: 'Frac Sand', icon: Mountain },
  { name: 'Sand & Gravel', icon: Shovel },
  { name: 'Dry Bulk', icon: Wind },
  { name: 'Livestock', icon: PawPrint },
  { name: 'Scrap Metal', icon: Recycle },
  { name: 'Mixer', icon: Building2 },
  { name: 'Cargo Van', icon: Van },
  { name: 'Garbage', icon: Trash2 },
  { name: 'Bus', icon: Bus },
]

export default function CoverageSection() {
  const [tooltip, setTooltip] = useState(null)
  const [activeTab, setActiveTab] = useState('states')

  return (
    <section className="coverage-section section" id="coverage">
      <div className="container">
        <div className="coverage-section__header">
          <div>
            <h2 className="section-title">Coverage & Specializations</h2>
            <p className="section-description">
              8 active states. 19 operation types. One team that knows trucking.
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
                  <type.icon
                    size={16}
                    strokeWidth={1.75}
                    className="coverage-section__type-icon"
                    aria-hidden="true"
                  />
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
