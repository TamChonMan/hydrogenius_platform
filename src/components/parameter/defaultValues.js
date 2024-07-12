const defaultValues = {
    // Initial Investment Costs for Offshore Wind Farm Development (CAPEX)
    CAPEX: {
      nonInstallation: {
        turbine: 1605, // (k$)/MW
        turbinePlatforms: 1257, // (k$)/MW
        mooringSystem: 209, // (k$)/MW
        anchor: 100, // (k$)/MW
        balanceSystem: 770, // (k$)/MW
        electrolyzer: {
          '8MW': 1056, // (k$)/MW, 8-MW system
          '100MW': 882 // (k$)/MW, 100-MW system
        },
        hydrogenPipe: 842.5, // (k$)/km
        offshoreElectrolyzerPlatform: 112, // (k$)/MW
        offshoreSubstation: 175, // (k$)/MW
        '66KVcable': 587.6359, // (k$)/km
        '161KVcable': 648.7772, // (k$)/km
        installationInsurance: 143, // (k$)/MW
        constructionDockLease: 62, // (k$)/MW
        design: 295.5 // (k$)/MW
      },
      installation: {
        plantInstallation: 418, // (k$)/MW
        hydrogenPipeInstallation: 3.6, // (k$)/km
        offshoreElectrolyzerPlatformInstallation: 84, // (k$)/MW
        offshoreSubstationInstallation: 84, // (k$)/MW
        '66KVcableInstallation': 1012.602, // (k$)/km
        '161KVcableInstallation': 1012.534 // (k$)/km
      }
    },
  
    // Operation and Maintenance Cost of Offshore Wind Farm (OPEX)
    OPEX: {
      plant: '3% of CAPEX', // /MW
      electrolyzer: '2% of CAPEX', // /MW
      electrolyzerStack: '60% of CAPEX', // /stack
      hydrogenPipe: 3.6, // (k$)/km
      '66KVcable': 4.8, // (k$)/km
      offshoreElectrolyzerPlatform: '1% of CAPEX', // /MW
      offshoreSubstation: '1% of CAPEX' // /MW
    },
  
    // Decommissioning Cost of Offshore Wind Farm
    decommissioning: {
      plant: '70% of install cost', // /MW
      hydrogenPipe: 0, // /km (value not provided)
      '66KVcable': '10% of install cost', // /km
      offshoreElectrolyzerPlatform: 91, // (k$)/MW
      offshoreSubstation: 0 // (k$)/MW (value not provided)
    }
  };
  
  export default defaultValues;
  