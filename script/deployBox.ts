import { ethers } from 'hardhat'
async function deploy () {
  const Box = await ethers.getContractFactory('Box');
  const box = await Box.deploy();
  await box.deployed()

  console.log("Contrato No actualizable => ", box.address);
  
}

deploy()
  .then(() => process.exit(0))
  .catch(error => { console.error(error);  process.exit(1); });



  //0x272204ddaEFE42f0e2b70Dc1B211bCCb84d7344D