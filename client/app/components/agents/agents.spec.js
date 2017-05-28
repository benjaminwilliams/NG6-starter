import AgentsModule from './agents'

describe('Agents', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(AgentsModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('Agents component should be visible when navigates to /agents', () => {
      $location.url('/agents');
      $rootScope.$digest();
      expect($state.current.component).to.eq('agents');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('agents', {
        $scope: $rootScope.$new()
      });
    });

  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<agents></agents>')(scope);
      scope.$apply();
    });

    it('displays the search bar', () => {
      expect(template.find('.t-search-input').html()).to.eq('');
    });

  });
});
