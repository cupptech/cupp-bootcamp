'use strict';

angular.module('meanshopApp')
  .factory('Auth', function Auth($location, $rootScope, $http, User, $cookies, $q) {
    /**
     * Return a callback or noop function
     *
     * @param  {Function|*} cb - a 'potential' function
     * @return {Function}
     */
    var safecb = function(cb) {
      return (angular.isFunction(cb)) ? cb : angular.noop;
    };   

    var currentUser = {};
    if($cookies.get('token')) {
      currentUser = User.get();
    }

    return {

      /**
       * Authenticate user and save token
       *
       * @param  {Object}   user     - login info
       * @param  {Function} callback - optional, function(error, user)
       * @return {Promise}
       */
      login: function(user, callback) {
        return $http.post('/auth/local', {
          email: user.email,
          password: user.password
        })
        .then(function(res){
          $cookies.put('token', res.data.token);
          currentUser = User.get(); // return empty project first
          return currentUser.$promise;
        })
        .then(function(user){
          safecb(callback)(null, user);
          return user;
        })
        .catch(function(err){
          this.logout();
          safecb(callback)(err.data);
          return $q.reject(err.data);  // if there is error, need to return failed promise
        }.bind(this));

/*      var cb = callback || angular.noop;
        var deferred = $q.defer();

        $http.post('/auth/local', {
          email: user.email,
          password: user.password
        }).
        success(function(data) {
          $cookies.put('token', data.token);
          currentUser = User.get();
          deferred.resolve(data);
          return cb();
        }).
        error(function(err) {
          this.logout();
          deferred.reject(err);
          return cb(err);
        }.bind(this));

        return deferred.promise;
*/        
      },

      /**
       * Delete access token and user info
       *
       * @param  {Function}
       */
      logout: function() {
        $cookies.remove('token');
        currentUser = {};
      },

      /**
       * Create a new user
       *
       * @param  {Object}   user     - user info
       * @param  {Function} callback - optional
       * @return {Promise}
       */
      createUser: function(user, callback) {
        return User.save(user,
          function(data) {
            $cookies.put('token', data.token);
            currentUser = User.get();
            return safecb(callback)(null, user);
          },
          function(err) {
            this.logout();
            return safecb(callback)(err);
          }.bind(this)).$promise;
      },

      /**
       * Change password
       *
       * @param  {String}   oldPassword
       * @param  {String}   newPassword
       * @param  {Function} callback    - optional
       * @return {Promise}
       */
      changePassword: function(oldPassword, newPassword, callback) {
        return User.changePassword({ id: currentUser._id }, {
          oldPassword: oldPassword,
          newPassword: newPassword
        }, function(user) {
          return safecb(callback)(null);
        }, function(err) {
          return safecb(callback)(err);
        }).$promise;
      },

      /**
       * Gets all available info on a user
       *   (synchronous|asynchronous)
       *
       * @param  {Function|*} callback - optional, funciton(user)
       * @return {Object|Promise}
       */
      getCurrentUser: function(callback) {
        if (arguments.length === 0) {
          return currentUser;
        }        

        var value = (currentUser.hasOwnProperty('$promise')) ? currentUser.$promise: currentUser;
        return $q.when(value)
          .then(function(user) {
            safecb(callback)(user);
            return user;
          }, function(){
            safecb(callback)({});
            return {};
          });
      },

      /**
       * Check if a user is logged in
       *   (synchronous|asynchronous)
       *
       * @param  {Function|*} callback - optional, function(is)
       * @return {Bool|Promise}
       */
      isLoggedIn: function(callback) {
        if (arguments.length === 0){
          return currentUser.hasOwnProperty('role');
        }
        return this.getCurrentUser(null)
          .then(function(user){
            var is = user.hasOwnProperty('role');
            safecb(callback)(is);
            return is;
          });
      },

       /**
        * Check if a user is an admin
        *   (synchronous|asynchronous)
        *
        * @param  {Function|*} callback - optional, function(is)
        * @return {Bool|Promise}
        */
      isAdmin: function(callback) {
        if (arguments.length === 0){
          return currentUser.role === 'admin';
        }

        return this.getCurrentUser(null)
          .then(function(user){
            var is = user.role === 'admin';
            safecb(callback)(is);
            return is;
          });
      },

      /**
       * Get auth token
       */
      getToken: function() {
        return $cookies.get('token');
      }
    };
  });
