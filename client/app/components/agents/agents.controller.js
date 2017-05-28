
import agents from '../../services/agents.service';

class AgentsController {

  constructor(agents){
    "ngInject";
    this.agents = agents;
    this.name = 'agents';
    this.searchtext = '';
    this.searchResults = {};
    this.errorMsg = "";
  }

  searchAgents(){
    this.agents.getAgents(this.searchtext).async().then((result)=>{
      if(result){
        this.searchResults = result.Results;
      }
      else {
        this.errorMsg = "error retrieving search results. Please try again";
      }
    });


  }


}

export default AgentsController;
