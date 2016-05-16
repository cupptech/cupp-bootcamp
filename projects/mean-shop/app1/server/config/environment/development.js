'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/meanshop-dev'
  },

  braintree: {
    clientID:       process.env.BRAINTREE_ID || '537pfmt6zry484fg',
    clientSecret:   process.env.BRAINTREE_SECRET || 'de1177d9ee95d083dd11bf204d93a1f6',
    clientMerchant: process.env.BRAINTREE_MERCHANT || '3pqnzrtgf9p9b9py'
  },

  seedDB: true
};
