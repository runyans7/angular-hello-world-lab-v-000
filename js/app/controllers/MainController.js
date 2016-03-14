function MainController($scope) {
  $scope.contact = {
    name: "John Doe",
    email: "john@doe.com",
    phone: "123-123-1234"
  }
}

angular
  .module('app')
  .controller('MainController', MainController);
