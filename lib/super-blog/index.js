'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'super-blog',

  lazyLoading: Object.freeze({
    enabled: false,
  }),

  isDevelopingAddon() {
    return true;
  },
});
