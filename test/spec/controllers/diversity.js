'use strict';

describe('Controller: DiversityCtrl', function () {

  // load the controller's module
  beforeEach(module('mapDemoApp'));

  var DiversityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiversityCtrl = $controller('DiversityCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
