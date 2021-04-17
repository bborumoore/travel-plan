const Location = require('./Location');
const Traveller = require('./Traveller');
const Trips = require('./Trips');

Traveller.hasMany(Location, {
  foreignKey: 'traveller_id',
});

Location.hasMany(Traveller, {
  foreignKey: 'location_id',
});

Location.belongsToMany(Traveller, {
    through: 'Trips',
    foreignKey: 'traveller_id'

});

Traveller.belongsToMany(Location, {
  through: 'Trips',
  foreignKey: 'location_id'
});

module.exports = { Location, Traveller, Trips };
