const defaultValues = {
  // Initial Investment Costs for Offshore Wind Farm Development (CAPEX)
  CAPEX: {
    nonInstallation: {
      Turbine: { value: 1605, unit: 'k$/MW' },
      TurbinePlatforms: { value: 1257, unit: 'k$/MW' },
      MooringSystem: { value: 209, unit: 'k$/MW' },
      Anchor: { value: 100, unit: 'k$/MW' },
      BalanceSystem: { value: 770, unit: 'k$/MW' },
      Electrolyzer: { value: 1056, unit: 'k$/MW' },
      HydrogenPipe: { value: 842.5, unit: 'k$/km' },
      ElectrolyzerPlatform: { value: 112, unit: 'k$/MW' },
      Substation: { value: 175, unit: 'k$/MW' },
      Cable: { value: 587.6359, unit: 'k$/km' },
      InstallationInsurance: { value: 143, unit: 'k$/MW' },
      ConstructionDockLease: { value: 62, unit: 'k$/MW' },
      Design: { value: 295.5, unit: 'k$/MW' }
    },
    installation: {
      plant: { value: 418, unit: 'k$/MW' },
      h2Pipe: { value: 3.6, unit: 'k$/km' },
      ElecPlatform: { value: 84, unit: 'k$/MW' },
      Substation: { value: 84, unit: 'k$/MW' },
      cable: { value: 1012.602, unit: 'k$/km' }
    }
  },

  // Operation and Maintenance Cost of Offshore Wind Farm (OPEX)
  OPEX: {
    plant: { value: 0.03 , unit: '/MW' },
    electrolyzer: { value: 0.02 , unit: '/MW' },
    electrolyzerStack: { value: 0.6, unit: '/stack' },
    hydrogenPipe: { value: 3.6, unit: 'k$/km' },
    cable: { value: 4.8, unit: 'k$/km' },
    ElectrolyzerPlatform: { value: 0.01, unit: '/MW' },
    Substation: { value: 0.01, unit: '/MW' }
  },

  // Decommissioning Cost of Offshore Wind Farm
  decommissioning: {
    plant: { value: 0.7, unit: '/MW' },
    hydrogenPipe: { value: 0, unit: '/km' }, // (value not provided)
    cable: { value: 0.1, unit: '/km' },
    ElectrolyzerPlatform: { value: 91, unit: 'k$/MW' },
    Substation: { value: 0, unit: 'k$/MW' } // (value not provided)
  },
  
  //MW
  Capacity: {
    NumberOfTurbine:{value: 31, unit:'/'},
    TurbineCapacity:{value:9.5,unit:'MW'}
  },

  distant:{
    HydrogenPipe:{value: 100, unit:'km'},
    Cable:{value: 50, unit:'km'}
  }

};

export default defaultValues;
