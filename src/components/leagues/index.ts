/**
 * Leagues components module.
 *
 * Exports all components related to displaying leagues and league information.
 * Provides league cards, grids, sections, and related functionality.
 *
 * @module Leagues
 */

// Components
export { LeagueCard } from './components/LeagueCard'
export { LeagueDescription } from './components/LeagueDescription'
export { LeagueGrid } from './components/LeagueGrid'
export { LeagueSection } from './components/LeagueSection'

// Matches
export { NextMatches } from './Matches/NextMatches'
export { NextMatchesClient } from './Matches/NextMatchesClient'

// Standings (re-export from Standings module)
export * from './Standings'
