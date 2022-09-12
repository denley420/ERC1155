const { parseEther } = require("ethers/lib/utils");

async function deploy_ERC1155Token(){
  console.log("Deploying address")
  console.log("----------------------------------");

  const factory = await ethers.getContractFactory("ERC1155Token");
  let contract = await factory.deploy("0xc9703E5041f6A009F6552BAc71Fd0aA053463ff3");

  console.log("Contract Treasury: ", await contract.treasury());

  console.log("Contract Address: ", contract.address)
}

deploy_ERC1155Token()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});