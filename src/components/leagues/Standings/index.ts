/**
 * Standings components module.
 *
 * Exports all components related to displaying tournament standings and team statistics.
 * Provides a complete standings table with headers, rows, and data processing utilities.
 *
 * @module Standings
 */

// Components
export { StandingsHeader } from './components/StandingsHeader'
export { StandingsRow } from './components/StandingsRow'
export { StandingsRows } from './components/StandingsRows'

// Views
export { StandingsOverview } from './views/StandingsOverview'
export { StandingsWithTabs } from './views/StandingsWithTabs'

// Clients
export { StandingsOverviewClient } from './clients/StandingsOverviewClient'
export { StandingsWithTabsClient } from './clients/StandingsWithTabsClient'

// Utils
export {
    processStandingsData,
    processGamesData,
    type ProcessedStanding,
    type ProcessedGameStats,
} from './utils/StandingsDataProcessor'
export { SortedRows } from './utils/SortedRows'

// Types
export { type Column } from './types'
