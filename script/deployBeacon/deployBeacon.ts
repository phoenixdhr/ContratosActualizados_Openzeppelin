import { ethers, upgrades } from 'hardhat'

async function deploy () {
    const BoxFactory = await ethers.getContractFactory('Box');
    const beacon = await upgrades.deployBeacon(BoxFactory);
    await beacon.deployed()
    
    console.log('Address del contrato Beacon =>>',beacon.address)

    const boxProxyBeacon = await upgrades.deployBeaconProxy(beacon,BoxFactory);
    await boxProxyBeacon.deployed()
    
    console.log('Address del contrato box =>>',boxProxyBeacon.address)





}

deploy()
    .then(() => process.exit(0))
    .catch(error => { console.error(error);  process.exit(1); });


    //en el contexto de plugin actualizables de openzeppelin que hace el metodo upgrades.deployBeaconProxy, y que argumentos acepta?
    //en el contexto de plugin actualizables de openzeppelin que hace el metodo upgrades.upgradeBeacon, y que argumentos acepta?