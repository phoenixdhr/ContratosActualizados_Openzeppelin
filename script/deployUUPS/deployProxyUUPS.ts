import { ethers, upgrades } from 'hardhat'


async function deploy () {
    const boxFactory = await ethers.getContractFactory('BoxUUPS');
    const box = await upgrades.deployProxy(boxFactory, [],{initializer:"initialize",kind:"uups"});
    await box.deployed()

    console.log("Adress Contrato actualizable Proxy=> ", box.address  )
}

deploy()
    .then(() => process.exit(0))
    .catch(error => { console.error(error);  process.exit(1); });


    //remixd -s /home/danyr/proyectos/Upgradeable --remix-ide https://remix.ethereum.org