import Route from '@ember/routing/route';

export default class ReferencesIndexRoute extends Route {
  model() {
    return this.modelFor('references').get('references')
  }
}
