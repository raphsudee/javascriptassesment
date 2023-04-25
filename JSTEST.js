// create a variable to hold your NFT's metadata or information
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _eyecolor, _shirttype, _bling) {
  const NFT = {
    "name": _name,
    "eyecolor": _eyecolor,
    "shirttype": _shirttype,
    "bling": _bling
  };

  NFTs.push(NFT);
  console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
console.log("\nID: " + (i + 1));
    console.log("\nName: " + NFTs[i].name);
      console.log("\Eye Color: " +NFTs[i].eyecolor);
        console.log("\Shirt Type: " +NFTs[i].shirttype);
          console.log("\Bling: " +NFTs[i].bling);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Bob", "Blue", "Hoodie", "Gold Chain");
mintNFT("Mark", "Red", "Shirt", "Gold Earings");
mintNFT("Luke", "Green", "Sando", "Watch");
mintNFT("Zhei", "Violet", "Jacket", "Silver Chain");
listNFTs();
getTotalSupply();
