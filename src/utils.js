const origin = "https://deep-index.moralis.io";
const apiKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjQxNGY2YzVkLTcxODYtNDBmYy1iNmVhLTgxNTE5OTMwMzUxYSIsIm9yZ0lkIjoiMzYzNDYxIiwidXNlcklkIjoiMzczNTQzIiwidHlwZUlkIjoiYjNmODg2ZGEtN2YwZi00N2IwLWE0NWYtMTUxYWEwZWE0ZWFkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTkyMjQyNjksImV4cCI6NDg1NDk4NDI2OX0.OAi5_eh6hT3Odxi9WDRiRwqUzh0Q5ue2XdiMd5yzwg8";

export const getContractNFTs = async (tokenAddress) => {
    const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
    url.searchParams.append("chain", "eth");
    url.searchParams.append("format", "decimal");
    url.searchParams.append("limit", "20");
  
  
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    return response.json();
  };
  
  
  export const getContractTrades = async (tokenAddress) => {
    const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
    url.searchParams.append("chain", "eth");
    
    url.searchParams.append("marketplace", "opensea");
    url.searchParams.append("limit", "20");
  
  
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    return response.json();
  };
  
  
  export const getNFTTransfers = async (tokenAddress, tokenId) => {
    const url = new URL(
      `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
    );
    url.searchParams.append("chain", "eth");
    url.searchParams.append("format", "decimal");
    url.searchParams.append("limit", "20");
  
  
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    return response.json();
  };
  