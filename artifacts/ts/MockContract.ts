export const MockContract = 
{
  "contractName": "MockContract",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        }
      ],
      "name": "getMockReturnValue",
      "outputs": [
        {
          "name": "_mockReturnValue",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        },
        {
          "name": "returnValue",
          "type": "bytes32"
        }
      ],
      "name": "mockReturnValue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "reset",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\ncontract MockContract {\n    bytes32 internal constant DEFAULT_SIGNATURE_ARGS = bytes32(0);\n\n    // We use bytes32 as our generic base type from and to which we cast all other types\n    mapping (string => bytes32[]) internal functionCallSignatures;\n    mapping (string => mapping (bytes32 => bytes32)) internal mockedReturnValue;\n    mapping (string => mapping (bytes32 => bool)) internal functionCalls;\n\n    function mockReturnValue(\n        string functionName,\n        bytes32 argsSignature,\n        bytes32 returnValue\n    ) public {\n        functionCallSignatures[functionName].push(argsSignature);\n        mockedReturnValue[functionName][argsSignature] = returnValue;\n    }\n\n    function getMockReturnValue(string functionName, bytes32 argsSignature)\n        public\n        view\n        returns (bytes32 _mockReturnValue)\n    {\n        return mockedReturnValue[functionName][argsSignature];\n    }\n\n    function reset() public {\n        for (uint i = 0; i < 10; i++) {\n            string memory functionName = getFunctionList()[i];\n\n            if (bytes(functionName).length != 0) {\n                for (uint j = 0; j < functionCallSignatures[functionName].length; j++) {\n                    bytes32 callSignature = functionCallSignatures[functionName][j];\n                    delete functionCalls[functionName][callSignature];\n                    delete mockedReturnValue[functionName][callSignature];\n                }\n\n                delete functionCallSignatures[functionName];\n            }\n        }\n    }\n\n    function functionCalledWithArgs(string functionName, bytes32 args)\n        internal\n    {\n        functionCalls[functionName][args] = true;\n        functionCallSignatures[functionName].push(args);\n    }\n\n    function wasFunctionCalledWithArgs(string functionName, bytes32 args)\n        internal\n        view\n        returns (bool wasCalled)\n    {\n        return functionCalls[functionName][args];\n    }\n\n    function getFunctionList() internal returns (string[10] functionNames);\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/mocks/MockContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/mocks/MockContract.sol",
      "exportedSymbols": {
        "MockContract": [
          184
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "584:23:0"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            184
          ],
          "name": "MockContract",
          "scope": 185
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "name": "DEFAULT_SIGNATURE_ARGS",
              "scope": 184,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes32",
                  "type": "bytes32"
                },
                "id": 2,
                "name": "ElementaryTypeName",
                "src": "638:7:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "isStructConstructorCall": false,
                  "lValueRequested": false,
                  "names": [
                    null
                  ],
                  "type": "bytes32",
                  "type_conversion": true
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "type": "type(bytes32)",
                      "value": "bytes32"
                    },
                    "id": 3,
                    "name": "ElementaryTypeNameExpression",
                    "src": "689:7:0"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "30",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 0",
                      "value": "0"
                    },
                    "id": 4,
                    "name": "Literal",
                    "src": "697:1:0"
                  }
                ],
                "id": 5,
                "name": "FunctionCall",
                "src": "689:10:0"
              }
            ],
            "id": 6,
            "name": "VariableDeclaration",
            "src": "638:61:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCallSignatures",
              "scope": 184,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => bytes32[] storage ref)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => bytes32[] storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 7,
                    "name": "ElementaryTypeName",
                    "src": "804:6:0"
                  },
                  {
                    "attributes": {
                      "length": null,
                      "type": "bytes32[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 8,
                        "name": "ElementaryTypeName",
                        "src": "814:7:0"
                      }
                    ],
                    "id": 9,
                    "name": "ArrayTypeName",
                    "src": "814:9:0"
                  }
                ],
                "id": 10,
                "name": "Mapping",
                "src": "795:29:0"
              }
            ],
            "id": 11,
            "name": "VariableDeclaration",
            "src": "795:61:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mockedReturnValue",
              "scope": 184,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => mapping(bytes32 => bytes32))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 12,
                    "name": "ElementaryTypeName",
                    "src": "871:6:0"
                  },
                  {
                    "attributes": {
                      "type": "mapping(bytes32 => bytes32)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 13,
                        "name": "ElementaryTypeName",
                        "src": "890:7:0"
                      },
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 14,
                        "name": "ElementaryTypeName",
                        "src": "901:7:0"
                      }
                    ],
                    "id": 15,
                    "name": "Mapping",
                    "src": "881:28:0"
                  }
                ],
                "id": 16,
                "name": "Mapping",
                "src": "862:48:0"
              }
            ],
            "id": 17,
            "name": "VariableDeclaration",
            "src": "862:75:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCalls",
              "scope": 184,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => mapping(bytes32 => bool))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => mapping(bytes32 => bool))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 18,
                    "name": "ElementaryTypeName",
                    "src": "952:6:0"
                  },
                  {
                    "attributes": {
                      "type": "mapping(bytes32 => bool)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 19,
                        "name": "ElementaryTypeName",
                        "src": "971:7:0"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 20,
                        "name": "ElementaryTypeName",
                        "src": "982:4:0"
                      }
                    ],
                    "id": 21,
                    "name": "Mapping",
                    "src": "962:25:0"
                  }
                ],
                "id": 22,
                "name": "Mapping",
                "src": "943:45:0"
              }
            ],
            "id": 23,
            "name": "VariableDeclaration",
            "src": "943:68:0"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "mockReturnValue",
              "payable": false,
              "scope": 184,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 48,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 24,
                        "name": "ElementaryTypeName",
                        "src": "1052:6:0"
                      }
                    ],
                    "id": 25,
                    "name": "VariableDeclaration",
                    "src": "1052:19:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 48,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 26,
                        "name": "ElementaryTypeName",
                        "src": "1081:7:0"
                      }
                    ],
                    "id": 27,
                    "name": "VariableDeclaration",
                    "src": "1081:21:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "returnValue",
                      "scope": 48,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 28,
                        "name": "ElementaryTypeName",
                        "src": "1112:7:0"
                      }
                    ],
                    "id": 29,
                    "name": "VariableDeclaration",
                    "src": "1112:19:0"
                  }
                ],
                "id": 30,
                "name": "ParameterList",
                "src": "1042:95:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 31,
                "name": "ParameterList",
                "src": "1145:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 32,
                                    "name": "Identifier",
                                    "src": "1155:22:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 25,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 33,
                                    "name": "Identifier",
                                    "src": "1178:12:0"
                                  }
                                ],
                                "id": 34,
                                "name": "IndexAccess",
                                "src": "1155:36:0"
                              }
                            ],
                            "id": 35,
                            "name": "MemberAccess",
                            "src": "1155:41:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 27,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 36,
                            "name": "Identifier",
                            "src": "1197:13:0"
                          }
                        ],
                        "id": 37,
                        "name": "FunctionCall",
                        "src": "1155:56:0"
                      }
                    ],
                    "id": 38,
                    "name": "ExpressionStatement",
                    "src": "1155:56:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(bytes32 => bytes32)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 17,
                                      "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                      "value": "mockedReturnValue"
                                    },
                                    "id": 39,
                                    "name": "Identifier",
                                    "src": "1221:17:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 25,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 40,
                                    "name": "Identifier",
                                    "src": "1239:12:0"
                                  }
                                ],
                                "id": 42,
                                "name": "IndexAccess",
                                "src": "1221:31:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 27,
                                  "type": "bytes32",
                                  "value": "argsSignature"
                                },
                                "id": 41,
                                "name": "Identifier",
                                "src": "1253:13:0"
                              }
                            ],
                            "id": 43,
                            "name": "IndexAccess",
                            "src": "1221:46:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 29,
                              "type": "bytes32",
                              "value": "returnValue"
                            },
                            "id": 44,
                            "name": "Identifier",
                            "src": "1270:11:0"
                          }
                        ],
                        "id": 45,
                        "name": "Assignment",
                        "src": "1221:60:0"
                      }
                    ],
                    "id": 46,
                    "name": "ExpressionStatement",
                    "src": "1221:60:0"
                  }
                ],
                "id": 47,
                "name": "Block",
                "src": "1145:143:0"
              }
            ],
            "id": 48,
            "name": "FunctionDefinition",
            "src": "1018:270:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getMockReturnValue",
              "payable": false,
              "scope": 184,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 64,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 49,
                        "name": "ElementaryTypeName",
                        "src": "1322:6:0"
                      }
                    ],
                    "id": 50,
                    "name": "VariableDeclaration",
                    "src": "1322:19:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 64,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 51,
                        "name": "ElementaryTypeName",
                        "src": "1343:7:0"
                      }
                    ],
                    "id": 52,
                    "name": "VariableDeclaration",
                    "src": "1343:21:0"
                  }
                ],
                "id": 53,
                "name": "ParameterList",
                "src": "1321:44:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_mockReturnValue",
                      "scope": 64,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 54,
                        "name": "ElementaryTypeName",
                        "src": "1411:7:0"
                      }
                    ],
                    "id": 55,
                    "name": "VariableDeclaration",
                    "src": "1411:24:0"
                  }
                ],
                "id": 56,
                "name": "ParameterList",
                "src": "1410:26:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 56
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(bytes32 => bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 17,
                                  "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                  "value": "mockedReturnValue"
                                },
                                "id": 57,
                                "name": "Identifier",
                                "src": "1458:17:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 50,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 58,
                                "name": "Identifier",
                                "src": "1476:12:0"
                              }
                            ],
                            "id": 59,
                            "name": "IndexAccess",
                            "src": "1458:31:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 52,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 60,
                            "name": "Identifier",
                            "src": "1490:13:0"
                          }
                        ],
                        "id": 61,
                        "name": "IndexAccess",
                        "src": "1458:46:0"
                      }
                    ],
                    "id": 62,
                    "name": "Return",
                    "src": "1451:53:0"
                  }
                ],
                "id": 63,
                "name": "Block",
                "src": "1441:70:0"
              }
            ],
            "id": 64,
            "name": "FunctionDefinition",
            "src": "1294:217:0"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "reset",
              "payable": false,
              "scope": 184,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 65,
                "name": "ParameterList",
                "src": "1531:2:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 66,
                "name": "ParameterList",
                "src": "1541:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            68
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 137,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 67,
                                "name": "ElementaryTypeName",
                                "src": "1556:4:0"
                              }
                            ],
                            "id": 68,
                            "name": "VariableDeclaration",
                            "src": "1556:6:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 69,
                            "name": "Literal",
                            "src": "1565:1:0"
                          }
                        ],
                        "id": 70,
                        "name": "VariableDeclarationStatement",
                        "src": "1556:10:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 68,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 71,
                            "name": "Identifier",
                            "src": "1568:1:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3130",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 10",
                              "value": "10"
                            },
                            "id": 72,
                            "name": "Literal",
                            "src": "1572:2:0"
                          }
                        ],
                        "id": 73,
                        "name": "BinaryOperation",
                        "src": "1568:6:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 68,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 74,
                                "name": "Identifier",
                                "src": "1576:1:0"
                              }
                            ],
                            "id": 75,
                            "name": "UnaryOperation",
                            "src": "1576:3:0"
                          }
                        ],
                        "id": 76,
                        "name": "ExpressionStatement",
                        "src": "1576:3:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                78
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "functionName",
                                  "scope": 137,
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "type": "string memory",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "string",
                                      "type": "string storage pointer"
                                    },
                                    "id": 77,
                                    "name": "ElementaryTypeName",
                                    "src": "1595:6:0"
                                  }
                                ],
                                "id": 78,
                                "name": "VariableDeclaration",
                                "src": "1595:26:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "string memory"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        null
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "string memory[10] memory",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            null
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 183,
                                          "type": "function () returns (string memory[10] memory)",
                                          "value": "getFunctionList"
                                        },
                                        "id": 79,
                                        "name": "Identifier",
                                        "src": "1624:15:0"
                                      }
                                    ],
                                    "id": 80,
                                    "name": "FunctionCall",
                                    "src": "1624:17:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 68,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 81,
                                    "name": "Identifier",
                                    "src": "1642:1:0"
                                  }
                                ],
                                "id": 82,
                                "name": "IndexAccess",
                                "src": "1624:20:0"
                              }
                            ],
                            "id": 83,
                            "name": "VariableDeclarationStatement",
                            "src": "1595:49:0"
                          },
                          {
                            "attributes": {
                              "falseBody": null
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "!=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "length",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "bytes memory",
                                          "type_conversion": true
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_string_memory_ptr",
                                                  "typeString": "string memory"
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "type": "type(bytes storage pointer)",
                                              "value": "bytes"
                                            },
                                            "id": 84,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "1663:5:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 78,
                                              "type": "string memory",
                                              "value": "functionName"
                                            },
                                            "id": 85,
                                            "name": "Identifier",
                                            "src": "1669:12:0"
                                          }
                                        ],
                                        "id": 86,
                                        "name": "FunctionCall",
                                        "src": "1663:19:0"
                                      }
                                    ],
                                    "id": 87,
                                    "name": "MemberAccess",
                                    "src": "1663:26:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 88,
                                    "name": "Literal",
                                    "src": "1693:1:0"
                                  }
                                ],
                                "id": 89,
                                "name": "BinaryOperation",
                                "src": "1663:31:0"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "assignments": [
                                            91
                                          ]
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "constant": false,
                                              "name": "j",
                                              "scope": 137,
                                              "stateVariable": false,
                                              "storageLocation": "default",
                                              "type": "uint256",
                                              "value": null,
                                              "visibility": "internal"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "name": "uint",
                                                  "type": "uint256"
                                                },
                                                "id": 90,
                                                "name": "ElementaryTypeName",
                                                "src": "1719:4:0"
                                              }
                                            ],
                                            "id": 91,
                                            "name": "VariableDeclaration",
                                            "src": "1719:6:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "hexvalue": "30",
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "subdenomination": null,
                                              "token": "number",
                                              "type": "int_const 0",
                                              "value": "0"
                                            },
                                            "id": 92,
                                            "name": "Literal",
                                            "src": "1728:1:0"
                                          }
                                        ],
                                        "id": 93,
                                        "name": "VariableDeclarationStatement",
                                        "src": "1719:10:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": "<",
                                          "type": "bool"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 91,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 94,
                                            "name": "Identifier",
                                            "src": "1731:1:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "length",
                                              "referencedDeclaration": null,
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "bytes32[] storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 11,
                                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                                      "value": "functionCallSignatures"
                                                    },
                                                    "id": 95,
                                                    "name": "Identifier",
                                                    "src": "1735:22:0"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 78,
                                                      "type": "string memory",
                                                      "value": "functionName"
                                                    },
                                                    "id": 96,
                                                    "name": "Identifier",
                                                    "src": "1758:12:0"
                                                  }
                                                ],
                                                "id": 97,
                                                "name": "IndexAccess",
                                                "src": "1735:36:0"
                                              }
                                            ],
                                            "id": 98,
                                            "name": "MemberAccess",
                                            "src": "1735:43:0"
                                          }
                                        ],
                                        "id": 99,
                                        "name": "BinaryOperation",
                                        "src": "1731:47:0"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "operator": "++",
                                              "prefix": false,
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 91,
                                                  "type": "uint256",
                                                  "value": "j"
                                                },
                                                "id": 100,
                                                "name": "Identifier",
                                                "src": "1780:1:0"
                                              }
                                            ],
                                            "id": 101,
                                            "name": "UnaryOperation",
                                            "src": "1780:3:0"
                                          }
                                        ],
                                        "id": 102,
                                        "name": "ExpressionStatement",
                                        "src": "1780:3:0"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "assignments": [
                                                104
                                              ]
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "constant": false,
                                                  "name": "callSignature",
                                                  "scope": 137,
                                                  "stateVariable": false,
                                                  "storageLocation": "default",
                                                  "type": "bytes32",
                                                  "value": null,
                                                  "visibility": "internal"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "name": "bytes32",
                                                      "type": "bytes32"
                                                    },
                                                    "id": 103,
                                                    "name": "ElementaryTypeName",
                                                    "src": "1807:7:0"
                                                  }
                                                ],
                                                "id": 104,
                                                "name": "VariableDeclaration",
                                                "src": "1807:21:0"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "bytes32"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "bytes32[] storage ref"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 11,
                                                          "type": "mapping(string memory => bytes32[] storage ref)",
                                                          "value": "functionCallSignatures"
                                                        },
                                                        "id": 105,
                                                        "name": "Identifier",
                                                        "src": "1831:22:0"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 78,
                                                          "type": "string memory",
                                                          "value": "functionName"
                                                        },
                                                        "id": 106,
                                                        "name": "Identifier",
                                                        "src": "1854:12:0"
                                                      }
                                                    ],
                                                    "id": 107,
                                                    "name": "IndexAccess",
                                                    "src": "1831:36:0"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 91,
                                                      "type": "uint256",
                                                      "value": "j"
                                                    },
                                                    "id": 108,
                                                    "name": "Identifier",
                                                    "src": "1868:1:0"
                                                  }
                                                ],
                                                "id": 109,
                                                "name": "IndexAccess",
                                                "src": "1831:39:0"
                                              }
                                            ],
                                            "id": 110,
                                            "name": "VariableDeclarationStatement",
                                            "src": "1807:63:0"
                                          },
                                          {
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "operator": "delete",
                                                  "prefix": true,
                                                  "type": "tuple()"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": true,
                                                      "type": "bool"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(bytes32 => bool)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 23,
                                                              "type": "mapping(string memory => mapping(bytes32 => bool))",
                                                              "value": "functionCalls"
                                                            },
                                                            "id": 111,
                                                            "name": "Identifier",
                                                            "src": "1899:13:0"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 78,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 112,
                                                            "name": "Identifier",
                                                            "src": "1913:12:0"
                                                          }
                                                        ],
                                                        "id": 113,
                                                        "name": "IndexAccess",
                                                        "src": "1899:27:0"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 104,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 114,
                                                        "name": "Identifier",
                                                        "src": "1927:13:0"
                                                      }
                                                    ],
                                                    "id": 115,
                                                    "name": "IndexAccess",
                                                    "src": "1899:42:0"
                                                  }
                                                ],
                                                "id": 116,
                                                "name": "UnaryOperation",
                                                "src": "1892:49:0"
                                              }
                                            ],
                                            "id": 117,
                                            "name": "ExpressionStatement",
                                            "src": "1892:49:0"
                                          },
                                          {
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "operator": "delete",
                                                  "prefix": true,
                                                  "type": "tuple()"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": true,
                                                      "type": "bytes32"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(bytes32 => bytes32)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 17,
                                                              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                                              "value": "mockedReturnValue"
                                                            },
                                                            "id": 118,
                                                            "name": "Identifier",
                                                            "src": "1970:17:0"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 78,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 119,
                                                            "name": "Identifier",
                                                            "src": "1988:12:0"
                                                          }
                                                        ],
                                                        "id": 120,
                                                        "name": "IndexAccess",
                                                        "src": "1970:31:0"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 104,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 121,
                                                        "name": "Identifier",
                                                        "src": "2002:13:0"
                                                      }
                                                    ],
                                                    "id": 122,
                                                    "name": "IndexAccess",
                                                    "src": "1970:46:0"
                                                  }
                                                ],
                                                "id": 123,
                                                "name": "UnaryOperation",
                                                "src": "1963:53:0"
                                              }
                                            ],
                                            "id": 124,
                                            "name": "ExpressionStatement",
                                            "src": "1963:53:0"
                                          }
                                        ],
                                        "id": 125,
                                        "name": "Block",
                                        "src": "1785:250:0"
                                      }
                                    ],
                                    "id": 126,
                                    "name": "ForStatement",
                                    "src": "1714:321:0"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": "delete",
                                          "prefix": true,
                                          "type": "tuple()"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": true,
                                              "type": "bytes32[] storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 11,
                                                  "type": "mapping(string memory => bytes32[] storage ref)",
                                                  "value": "functionCallSignatures"
                                                },
                                                "id": 127,
                                                "name": "Identifier",
                                                "src": "2060:22:0"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 78,
                                                  "type": "string memory",
                                                  "value": "functionName"
                                                },
                                                "id": 128,
                                                "name": "Identifier",
                                                "src": "2083:12:0"
                                              }
                                            ],
                                            "id": 129,
                                            "name": "IndexAccess",
                                            "src": "2060:36:0"
                                          }
                                        ],
                                        "id": 130,
                                        "name": "UnaryOperation",
                                        "src": "2053:43:0"
                                      }
                                    ],
                                    "id": 131,
                                    "name": "ExpressionStatement",
                                    "src": "2053:43:0"
                                  }
                                ],
                                "id": 132,
                                "name": "Block",
                                "src": "1696:415:0"
                              }
                            ],
                            "id": 133,
                            "name": "IfStatement",
                            "src": "1659:452:0"
                          }
                        ],
                        "id": 134,
                        "name": "Block",
                        "src": "1581:540:0"
                      }
                    ],
                    "id": 135,
                    "name": "ForStatement",
                    "src": "1551:570:0"
                  }
                ],
                "id": 136,
                "name": "Block",
                "src": "1541:586:0"
              }
            ],
            "id": 137,
            "name": "FunctionDefinition",
            "src": "1517:610:0"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "functionCalledWithArgs",
              "payable": false,
              "scope": 184,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 160,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 138,
                        "name": "ElementaryTypeName",
                        "src": "2165:6:0"
                      }
                    ],
                    "id": 139,
                    "name": "VariableDeclaration",
                    "src": "2165:19:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 160,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 140,
                        "name": "ElementaryTypeName",
                        "src": "2186:7:0"
                      }
                    ],
                    "id": 141,
                    "name": "VariableDeclaration",
                    "src": "2186:12:0"
                  }
                ],
                "id": 142,
                "name": "ParameterList",
                "src": "2164:35:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 143,
                "name": "ParameterList",
                "src": "2221:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(bytes32 => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 23,
                                      "type": "mapping(string memory => mapping(bytes32 => bool))",
                                      "value": "functionCalls"
                                    },
                                    "id": 144,
                                    "name": "Identifier",
                                    "src": "2231:13:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 139,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 145,
                                    "name": "Identifier",
                                    "src": "2245:12:0"
                                  }
                                ],
                                "id": 147,
                                "name": "IndexAccess",
                                "src": "2231:27:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 141,
                                  "type": "bytes32",
                                  "value": "args"
                                },
                                "id": 146,
                                "name": "Identifier",
                                "src": "2259:4:0"
                              }
                            ],
                            "id": 148,
                            "name": "IndexAccess",
                            "src": "2231:33:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 149,
                            "name": "Literal",
                            "src": "2267:4:0"
                          }
                        ],
                        "id": 150,
                        "name": "Assignment",
                        "src": "2231:40:0"
                      }
                    ],
                    "id": 151,
                    "name": "ExpressionStatement",
                    "src": "2231:40:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 152,
                                    "name": "Identifier",
                                    "src": "2281:22:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 139,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 153,
                                    "name": "Identifier",
                                    "src": "2304:12:0"
                                  }
                                ],
                                "id": 154,
                                "name": "IndexAccess",
                                "src": "2281:36:0"
                              }
                            ],
                            "id": 155,
                            "name": "MemberAccess",
                            "src": "2281:41:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 141,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 156,
                            "name": "Identifier",
                            "src": "2323:4:0"
                          }
                        ],
                        "id": 157,
                        "name": "FunctionCall",
                        "src": "2281:47:0"
                      }
                    ],
                    "id": 158,
                    "name": "ExpressionStatement",
                    "src": "2281:47:0"
                  }
                ],
                "id": 159,
                "name": "Block",
                "src": "2221:114:0"
              }
            ],
            "id": 160,
            "name": "FunctionDefinition",
            "src": "2133:202:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "wasFunctionCalledWithArgs",
              "payable": false,
              "scope": 184,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 176,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 161,
                        "name": "ElementaryTypeName",
                        "src": "2376:6:0"
                      }
                    ],
                    "id": 162,
                    "name": "VariableDeclaration",
                    "src": "2376:19:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 176,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 163,
                        "name": "ElementaryTypeName",
                        "src": "2397:7:0"
                      }
                    ],
                    "id": 164,
                    "name": "VariableDeclaration",
                    "src": "2397:12:0"
                  }
                ],
                "id": 165,
                "name": "ParameterList",
                "src": "2375:35:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "wasCalled",
                      "scope": 176,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 166,
                        "name": "ElementaryTypeName",
                        "src": "2458:4:0"
                      }
                    ],
                    "id": 167,
                    "name": "VariableDeclaration",
                    "src": "2458:14:0"
                  }
                ],
                "id": 168,
                "name": "ParameterList",
                "src": "2457:16:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 168
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(bytes32 => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 23,
                                  "type": "mapping(string memory => mapping(bytes32 => bool))",
                                  "value": "functionCalls"
                                },
                                "id": 169,
                                "name": "Identifier",
                                "src": "2495:13:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 162,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 170,
                                "name": "Identifier",
                                "src": "2509:12:0"
                              }
                            ],
                            "id": 171,
                            "name": "IndexAccess",
                            "src": "2495:27:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 164,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 172,
                            "name": "Identifier",
                            "src": "2523:4:0"
                          }
                        ],
                        "id": 173,
                        "name": "IndexAccess",
                        "src": "2495:33:0"
                      }
                    ],
                    "id": 174,
                    "name": "Return",
                    "src": "2488:40:0"
                  }
                ],
                "id": 175,
                "name": "Block",
                "src": "2478:57:0"
              }
            ],
            "id": 176,
            "name": "FunctionDefinition",
            "src": "2341:194:0"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getFunctionList",
              "payable": false,
              "scope": 184,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 177,
                "name": "ParameterList",
                "src": "2565:2:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionNames",
                      "scope": 183,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory[10] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "string storage ref[10] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string storage pointer"
                            },
                            "id": 178,
                            "name": "ElementaryTypeName",
                            "src": "2586:6:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3130",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 10",
                              "value": "10"
                            },
                            "id": 179,
                            "name": "Literal",
                            "src": "2593:2:0"
                          }
                        ],
                        "id": 180,
                        "name": "ArrayTypeName",
                        "src": "2586:10:0"
                      }
                    ],
                    "id": 181,
                    "name": "VariableDeclaration",
                    "src": "2586:24:0"
                  }
                ],
                "id": 182,
                "name": "ParameterList",
                "src": "2585:26:0"
              }
            ],
            "id": 183,
            "name": "FunctionDefinition",
            "src": "2541:71:0"
          }
        ],
        "id": 184,
        "name": "ContractDefinition",
        "src": "610:2004:0"
      }
    ],
    "id": 185,
    "name": "SourceUnit",
    "src": "584:2031:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-09T04:36:59.192Z"
}