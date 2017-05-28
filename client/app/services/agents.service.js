
export default class agents {
  constructor($http){
    this.$http = $http;
  }

  getAgents(searchTerm){
    return {
      async: ()=>{
        return this.$http({
          method: 'GET',
          url:  'https://api.ratemyagent.com.au/autosearch/agents?SearchTerm=' + searchTerm
        })
          .then(function success(response) {
              return response.data;
            },
            function error(err){
              console.log('error getting agents: ' + err);
              return false;
            });
      }
    }



  }

}

agents.$inject = ['$http'];