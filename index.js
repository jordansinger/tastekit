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
     * @param  {string} item - the item identifier
     * @return {Promise} Promise object
     */

    if (!user || !item) {
      throw new Error('You need to pass a user and item identifier.');
    }

    var options = {
      method: 'POST',
      uri: this.baseUrl + '/likes/like',
      qs: {
        token: this.apiKey
      },
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
     * @param  {string} item - the item identifier
     * @return {Promise} Promise object
     */

    if (!user || !item) {
      throw new Error('You need to pass a user and item identifier.');
    }

    var options = {
      method: 'POST',
      uri: this.baseUrl + '/likes/dislike',
      qs: {
        token: this.apiKey
      },
      body: {
        user: user,
        item: item
      },
      json: true
    };

    return request(options);
  },

  getRecommendations: function(user) {
    /**
     * Get recommendations for a user
     * @method dislike
     * @param  {string} user - the user identifier
     * @return {Promise} Promise object
     */

    if (!user) {
      throw new Error('You need to pass a user identifier.');
    }

    var options = {
      method: 'GET',
      uri: this.baseUrl + '/recommendations',
      qs: {
        user: user,
        token: this.apiKey
      }
    };

    return request(options);
  },

  deleteItem: function(item) {
    /**
     * Remove an item
     * @method deleteItem
     * @param  {string} user - the item identifier
     * @return {Promise} Promise object
     */

    if (!item) {
      throw new Error('You need to pass a item identifier.');
    }

    var options = {
      method: 'DELETE',
      uri: this.baseUrl + '/items',
      qs: {
        token: this.apiKey
      },
      body: {
        item: item
      },
      json: true
    };

    return request(options);
  },

  deleteUser: function(user) {
    /**
     * Remove an user
     * @method deleteUser
     * @param  {string} user - the user identifier
     * @return {Promise} Promise object
     */

    if (!user) {
      throw new Error('You need to pass a user identifier.');
    }

    var options = {
      method: 'DELETE',
      uri: this.baseUrl + '/items',
      qs: {
        token: this.apiKey
      },
      body: {
        user: user
      },
      json: true
    };

    return request(options);
  }

};

module.exports = TasteKitClient;