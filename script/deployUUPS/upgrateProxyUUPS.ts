

import { ethers, upgrades } from 'hardhat'

async function deploy () {

    const boxFactory2 = await ethers.getContractFactory('BoxUUPSV2');
    // 0xC27b3c6d308F2A4fF27d96973e47325a2DCb3fF3 esel adress del contrato deployado con "deployProxyUUPS"
    const box = await upgrades.upgradeProxy("0xC27b3c6d308F2A4fF27d96973e47325a2DCb3fF3",boxFactory2);
    await box.deployed()

    console.log("Address del contrato Actualizado=> ", box.address);
    
}

deploy()
    .then(() => process.exit(0))
    .catch(error => { console.error(error);  process.exit(1); });