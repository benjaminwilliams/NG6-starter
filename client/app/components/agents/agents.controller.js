class AgentsController {

  constructor() {
    this.name = 'agents';
    this.searchtext = '';
  }

  searchAgents(){
    console.log(this.searchtext);
  }

}

export default AgentsController;
