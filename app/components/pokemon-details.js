import Component from '@ember/component';

export default Component.extend({
  isWide: false,
  conditionalClassName: true,
  actions: {
    toggleImageSize() {
      // Toggle property is native to Ember
      this.toggleProperty('isWide');
      this.toggleProperty('conditionalClassName');
    }
  }
});
