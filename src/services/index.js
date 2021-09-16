import {
  keyStores,
  Near,
  WalletConnection,
  utils
} from "near-api-js";
import BN from "bn.js";

const gas = new BN("150000000000000");

export const CONTRACT_ID = "five.testnet";

// use new NEAR here to avoid needing async/await
export const near = new Near({
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
});

// can now create a new WalletConnection with the created Near object
export const wallet = new WalletConnection(near, "five");

export const getDaoList = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "get_dao_list", {});
}

// a service to get policies from the blockchain
export const getDaos = async (daoId) => {
  const result = await getDaoList()
  return await Promise.all(
    result.map(async daoId => {
      const policy = await wallet.account().viewFunction(daoId, "get_policy", {})
      const config = await wallet.account().viewFunction(daoId, "get_config", {})
      return {
        daoId,
        policy,
        config
      };
    })
  )
};

// a service to create a dao on the blockchain 
export const addDao = ({daoName, purpose, council}) => {
  const argsList = {
    config: {
      name: daoName,
      purpose: purpose,
      metadata: "",
    },
    policy: council.split(",")
  }

  const args = Buffer.from(JSON.stringify(argsList)).toString('base64');

  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: "create",
    gas,
    args: {
      name: daoName,
      args
    },
    attachedDeposit: utils.format.parseNearAmount("5"),
  });
};


export const getPolicy = async (POLICY_ID) => {
  const policy = await wallet.account().viewFunction(POLICY_ID, "get_policy", {})
  const config = await wallet.account().viewFunction(POLICY_ID, "get_config", {})
  return {
    policy,
    config
  }
};


// a service to get a proposal from the blockchain
export const getProposal = (POLICY_ID) => {
  return wallet.account().viewFunction(POLICY_ID, "get_proposal", {
    id: 0,
  });
};

export const getLastProposalId = (POLICY_ID) => {
  return wallet.account().viewFunction(POLICY_ID, "get_last_proposal_id", {});
};

export const getProposals = async (POLICY_ID) => {
  const lastId = await getLastProposalId(POLICY_ID);
  return wallet.account().viewFunction(POLICY_ID, "get_proposals", {
    from_index: 0,
    limit: lastId,
  });
};

// a service to add a Bounty from the blockchain but this is not working for now
export const addBounty = ({
  POLICY_ID,
  description,
  bountyDescription,
  amount,
  times,
  maxDeadline,
}) => {
  return wallet.account().functionCall({
    contractId: POLICY_ID,
    methodName: "add_proposal",
    gas,
    args: {
      proposal: {
        description: description,
        kind: {
          AddBounty: {
            bounty: {
              description: bountyDescription,
              token: "",
              amount: amount,
              times: times,
              max_deadline: maxDeadline,
            },
          },
        },
      },
    },
    attachedDeposit: utils.format.parseNearAmount("1"),
  });
};
