

class AgentsController {

  constructor(agents){
    "ngInject";
    this.agents = agents;
    this.name = 'agents';
    this.searchtext = '';
    this.searchResults = {};
  }

  searchAgents(){
    this.agents.getAgents(this.searchtext).async().then((result)=>{
      console.table(result);
      this.searchResults = result.Results;
    });

    console.log(this.searchResults);

  }


}

export default AgentsController;
