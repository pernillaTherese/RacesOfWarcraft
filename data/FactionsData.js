import Faction from '../models/Faction';

export const FACTIONS = [
  new Faction(1, 'Alliance Races', require('../assets/images/alliance.png')),

  new Faction(2, 'Horde Races', require('../assets/images/horde.png')),

  new Faction(3, 'Neutral Races', require('../assets/images/neutral.png')),
];
