import Route from '@ember/routing/route'

export default class ReferencesReferenceRoute extends Route {
  queryParams = {
    name: {
      refreshModel: true
    }
  }
  model(params) {
    return this.modelFor('references')
      .get('references')
      .then(references => references.findBy('name', params.name))
  }
}
