import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',
  namespace: 'repos/compbiocore/cbc-references-refchef'
})
