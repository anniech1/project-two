const { Regions } = require('../models');

const regionsData = [
  {
    region_name: 'North Africa',
  },
  {
    region_name: 'East Africa',
  },
  {
    region_name: 'Southern Africa',
  },
  {
    region_name: 'West Africa',
  },
  {
    region_name: 'Central Africa',
  },
  {
    region_name: 'North Asia',
  },
  {
    region_name: 'South Asia',
  },
  {
    region_name: 'Central Asia',
  },
  {
    region_name: 'Southeast Asia',
  },
  {
    region_name: 'East Asia',
  },
  {
    region_name: 'Western Asia',
  },
  {
    region_name: 'Northern Europe',
  },
  {
    region_name: 'Eastern Europe',
  },
  {
    region_name: 'Southern Europe',
  },
  {
    region_name: 'Western Europe',
  },
  {
    region_name: 'Central Europe',
  },
  {
    region_name: 'Australasia',
  },
  {
    region_name: 'Melanesia',
  },
  {
    region_name: 'Micronesia',
  },
  {
    region_name: 'Polynesia',
  },
  {
    region_name: 'Central America',
  },
  {
    region_name: 'North America',
  },
  {
    region_name: 'The Caribbeans',
  },
  {
    region_name: 'South America',
  },
];

const seedRegions = () => Regions.bulkCreate(regionsData);

module.exports = seedRegions;