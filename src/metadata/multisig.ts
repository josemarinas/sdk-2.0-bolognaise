export const MULTISIG_METADATA = {
  ui: {},
  change:
    "- The ability to create a proposal now depends on the membership status of the current instead of the snapshot block.\n- Added a check ensuring that the initial member list cannot overflow.",
  pluginSetup: {
    prepareInstallation: {
      description: "The information required for the installation.",
      inputs: [
        {
          internalType: "address[]",
          name: "members",
          type: "address[]",
          description: "The addresses of the initial members to be added.",
        },
        {
          components: [
            {
              internalType: "bool",
              name: "onlyListed",
              type: "bool",
              description:
                "Whether only listed addresses can create a proposal or not.",
            },
            {
              internalType: "uint16",
              name: "minApprovals",
              type: "uint16",
              description:
                "The minimal number of approvals required for a proposal to pass.",
            },
          ],
          internalType: "struct Multisig.MultisigSettings",
          name: "multisigSettings",
          type: "tuple",
          description: "The inital multisig settings.",
        },
      ],
    },
    prepareUpdate: {
      "1": {
        description: "No input is required for the update.",
        inputs: [],
      },
    },
    prepareUninstallation: {
      description: "No input is required for the uninstallation.",
      inputs: [],
    },
  },
};
