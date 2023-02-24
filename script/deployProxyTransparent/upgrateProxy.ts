

import { ethers, upgrades } from 'hardhat'

async function deploy () {
    const boxFactory = await ethers.getContractFactory('BoxV2');
    const box = await upgrades.upgradeProxy("0x4C505aD6eE85E63B143e8ee0c04C344510d704fa",boxFactory);
    await box.deployed()

    console.log("Address del contrato => ", box.address);
    
}

deploy()
    .then(() => process.exit(0))
    .catch(error => { console.error(error);  process.exit(1); });