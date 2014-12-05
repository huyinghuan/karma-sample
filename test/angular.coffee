describe('Unit: MainController', ->
  beforeEach module('myApp')

  ctrl = null
  scope = null

  testCtrl = ($controller, $rootScope)->
    scope = $rootScope.$new()
    ctrl = $controller('MainController', $scope: scope)

  beforeEach inject testCtrl

  it('should create $scope.greeting when calling sayHello',
    ->
      expect(scope.greeting).toBeUndefined()
      scope.sayHello()
      expect(scope.greeting).toEqual("Hello Ari")
  )
)