async function main() {
  console.log("Starting...");
  const PythPriceOracle = await ethers.getContractFactory("PythPriceOracle");
  console.log("Deploying PythPriceOracle...");
  const pythPriceOracle = await PythPriceOracle.deploy("0x056f829183Ec806A78c26C98961678c24faB71af");
  console.log("PythPriceOracle deployed to:", pythPriceOracle.target);
  console.log("Finishing...");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
