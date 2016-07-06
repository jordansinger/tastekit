var request = require('request-promise');
var TasteKitClient = function() {
  /**
   * Client to connect to Taste Kit API
   * @class TasteKitClient
   */
  this.initialize.apply(this, arguments);
};

TasteKitClient.prototype = {
  baseUrl: 'http://www.taste-kit.com/api/v1',

  initialize: function(apiKey) {
    /**
     * Initialize a client
     * @method intialize
     * @param {string} apiKey - the api key
     */

    if (!apiKey) {
      throw new Error('You need to initialize this client with your API Key.');
    }

    this.apiKey = apiKey;
  },

  like: function(user, item) {
    /**
     * Add a like on an item from a user
     * @method like
     * @param  {string} user - the user identifier
     * @param  {string} user - the item identifier
     * @return {Promise} Promise object
     */

    if (!user || !item) {
      throw new Error('You need to pass a user and item identifier.');
    }

    var options = {
      method: 'POST',
      uri: this.baseUrl + '/likes/like?token=' + this.apiKey,
      body: {
        user: user,
        item: item
      },
      json: true
    };

    return request(options);
  },

  dislike: function(user, item) {
    /**
     * Add a dislike on an item from a user
     * @method dislike
     * @param  {string} user - the user identifier
     * @param  {string} user - the item identifier
     * @return {Promise} Promise object
     */

    if (!user || !item) {
      throw new Error('You need to pass a user and item identifier.');
    }

    var options = {
      method: 'POST',
      uri: this.baseUrl + '/likes/dislike?token=' + this.apiKey,
      body: {
        user: user,
        item: item
      },
      json: true
    };

    return request(options);
  },

};

module.exports = TasteKitClient;