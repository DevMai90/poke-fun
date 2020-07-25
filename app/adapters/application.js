import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // No beginning forward slash
  namespace: 'api/v2'
});
