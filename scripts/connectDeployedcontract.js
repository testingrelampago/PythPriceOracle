const { ethers } = require("ethers");

async function getPrice() {
    // Dirección del contrato desplegado
    const contractAddress = "0x74c64b8612FD77505ad5b6853D25e96945614e86";

    // ABI del contrato
    const abi = [
        {
            "inputs": [],
            "name": "getPrice",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    // Crear una instancia del contrato
    const provider = new ethers.providers.JsonRpcProvider(); // Cambiar a tu proveedor de red
    const contract = new ethers.Contract(contractAddress, abi, provider);

    // Llamar a la función getPrice
    const price = await contract.getPrice();

    console.log("Price:", price.toString());
}

getPrice().catch(console.error);
