import { ethers, upgrades } from 'hardhat'

async function deploy () {
    const BoxV2Factory = await ethers.getContractFactory('BoxV2');
    await upgrades.upgradeBeacon("0x4C505aD6eE85E63B143e8ee0c04C344510d704fa",BoxV2Factory  );

    
    console.log("actualizado")
}

deploy()
    .then(() => process.exit(0))
    .catch(error => { console.error(error);  process.exit(1); });