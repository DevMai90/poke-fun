import Component from '@ember/component';

/**
 * types, weight, height, and attrTest are passed down from parent component.
 * Available via this context.
 */
export default Component.extend({
  tagName: '',

  /**
   * Does not work because this.attrTest was passed in.
   * The this context overrides setting it here.
   * attrTest: 'Updated attrTest',
   */

  /**
   * Defined within the component. Not availabe in 'this' context until it is explicitly called.
   * shabloopy is usable in HBS
   */
  shabloopy: 'shabloopy',

  init() {
    this._super(...arguments);
    /**
     * This.propName and this.set will update attrTest
     * this.attrs will still have the original attrsTest, but Ember lint won't allow it to be used.
     * this.attrTest = 'Updated attrTest';
     */
    this.set('attrTest', 'Updated attrTest2');

    // TODO - Manipulate types array
  }
});
