const teams = [
  {
    name: 'JDG',
    region: 'LPL',
    group: 'B',
    color: 'rgb(218, 232, 252, 0.9)'
  },
  {
    name: 'TES',
    region: 'LPL',
    group: 'C',
  },
  {
    name: 'EDG',
    region: 'LPL',
    group: 'A',
  },
  {
    name: 'GEN.G',
    region: 'LCK',
    group: 'D',
  },
  {
    name: 'T1',
    region: 'LCK',
    group: 'C',
  },
  {
    name: 'DWG',
    region: 'LCK',
    group: 'B',
  },
  {
    name: 'ROG',
    region: 'LEC',
    group: 'A',
  },
  {
    name: 'G2',
    region: 'LEC',
    group: 'B',
  },
  {
    name: 'C9',
    region: 'LCS',
    group: 'A',
  },
  {
    name: '100T',
    region: 'LCS',
    group: 'D',
  },
  {
    name: 'CFO',
    region: 'PCS',
    group: 'D',
  },
  {
    name: 'MES',
    region: 'VCS',
    group: 'C',
  },
  {
    name: 'RNG',
    region: 'LPL'
  },
  {
    name: 'DRX',
    region: 'LCK'
  },
  {
    name: 'FNC',
    region: 'LEC'
  },
  {
    name: 'MAD',
    region: 'LEC'
  },
  {
    name: 'BYG',
    region: 'PCS'
  },
  {
    name: 'EG',
    region: 'LCS'
  },
  {
    name: 'SBG',
    region: 'VCS'
  },
  {
    name: 'DNG',
    region: 'LJL'
  },
  {
    name: 'CHF',
    region: 'LCO'
  },
  {
    name: 'IW',
    region: 'TCL'
  },
  {
    name: 'ISG',
    region: 'LLA'
  },
  {
    name: 'LLL',
    region: 'CBLOL'
  }
]

export const teamList = teams.map((team, index) => (
  {
    x: 60 + 120 * Math.floor(index / 12),
    y: 30 + (index % 12) * 40,
    type: 'team-node',
    text: team.name,
    properties: {
      region: team.region
    }
  }
));

export const groupData = {
  nodes: [
    { id: 'groupA1_1', type: 'team-node', x: 502, y: 79, properties: {}, text: { x: 512, y: 80, value: 'TBD' } },
    { id: 'groupA1_2', type: 'team-node', x: 504, y: 161, properties: {}, text: { x: 514, y: 162, value: 'TBD' } },
    { id: 'groupB1_1', type: 'team-node', x: 511, y: 250, properties: {}, text: { x: 521, y: 251, value: 'TBD' } },
    { id: 'groupB1_2', type: 'team-node', x: 514, y: 342, properties: {}, text: { x: 524, y: 343, value: 'TBD' } },
    { id: 'groupC1_1', type: 'team-node', x: 598, y: 468, properties: {}, text: { x: 608, y: 469, value: 'TBD' } },
    { id: 'groupC1_2', type: 'team-node', x: 598, y: 500, properties: {}, text: { x: 608, y: 501, value: 'TBD' } },
    { id: 'groupD1_1', type: 'team-node', x: 602, y: 633, properties: {}, text: { x: 612, y: 634, value: 'TBD' } },
    { id: 'groupD1_2', type: 'team-node', x: 603, y: 662, properties: {}, text: { x: 613, y: 663, value: 'TBD' } },
    { id: 'groupA2_1', type: 'team-node', x: 872, y: 228, properties: {}, text: { x: 882, y: 229, value: 'TBD' } },
    { id: 'groupA2_2', type: 'team-node', x: 857, y: 146, properties: {}, text: { x: 867, y: 147, value: 'TBD' } },
    { id: 'groupA2_3', type: 'team-node', x: 800, y: 500, properties: {}, text: { x: 810, y: 501, value: 'TBD' } },
    { id: 'groupA2_4', type: 'team-node', x: 800, y: 560, properties: {}, text: { x: 810, y: 561, value: 'TBD' } },
    { id: 'groupA3_3', type: 'team-node', x: 1000, y: 340, properties: {}, text: { x: 1010, y: 341, value: 'TBD' } },
    { id: 'groupA3_4', type: 'team-node', x: 1000, y: 400, properties: {}, text: { x: 1010, y: 401, value: 'TBD' } },
    { id: 'groupA4_1', type: 'team-node', x: 1200, y: 370, properties: {}, text: { x: 1210, y: 371, value: 'TBD' } },
    {
      id: '1f86c25e-9c75-4ded-827d-19a75eec3abc',
      type: 'team-node',
      x: 60,
      y: 30,
      properties: { region: 'LPL' },
      text: { x: 70, y: 31, value: 'JDG' }
    },
    {
      id: '28aa4cb6-54fe-44c6-9aff-ac5c434f7d7e',
      type: 'team-node',
      x: 60,
      y: 70,
      properties: { region: 'LPL' },
      text: { x: 70, y: 71, value: 'TES' }
    },
    {
      id: '59cbd488-b92f-4375-916a-0a0adb3f62c0',
      type: 'team-node',
      x: 60,
      y: 110,
      properties: { region: 'LPL' },
      text: { x: 70, y: 111, value: 'EDG' }
    },
    {
      id: '2d0eacd0-18ad-47a1-af36-2007e2b9d230',
      type: 'team-node',
      x: 60,
      y: 150,
      properties: { region: 'LCK' },
      text: { x: 70, y: 151, value: 'GEN.G' }
    },
    {
      id: 'ee341a2b-20a3-48a3-8a8c-6c10c5bbab56',
      type: 'team-node',
      x: 60,
      y: 190,
      properties: { region: 'LCK' },
      text: { x: 70, y: 191, value: 'T1' }
    },
    {
      id: '1db4472d-4d91-4547-bdff-3ffdfaa1c8ad',
      type: 'team-node',
      x: 60,
      y: 230,
      properties: { region: 'LCK' },
      text: { x: 70, y: 231, value: 'DWG' }
    },
    {
      id: 'a71bcb7a-f5f9-4c32-88b4-82c54a6f573d',
      type: 'team-node',
      x: 60,
      y: 270,
      properties: { region: 'LEC' },
      text: { x: 70, y: 271, value: 'ROG' }
    },
    {
      id: '4407509e-cc84-4e19-9a1f-20272fa2b2df',
      type: 'team-node',
      x: 60,
      y: 310,
      properties: { region: 'LEC' },
      text: { x: 70, y: 311, value: 'G2' }
    },
    {
      id: 'ef40d326-6e11-4702-b3a9-73cfecbc6c99',
      type: 'team-node',
      x: 60,
      y: 350,
      properties: { region: 'LCS' },
      text: { x: 70, y: 351, value: 'C9' }
    },
    {
      id: '2b970ec8-9be6-4198-b323-70458cc122be',
      type: 'team-node',
      x: 60,
      y: 390,
      properties: { region: 'LCS' },
      text: { x: 70, y: 391, value: '100T' }
    },
    {
      id: '5a2d3a71-c3bf-4432-acfd-60bd86b716a2',
      type: 'team-node',
      x: 60,
      y: 430,
      properties: { region: 'PCS' },
      text: { x: 70, y: 431, value: 'CFO' }
    },
    {
      id: 'd42f7bbd-2f47-407a-9bda-5565371f3cbc',
      type: 'team-node',
      x: 60,
      y: 470,
      properties: { region: 'VCS' },
      text: { x: 70, y: 471, value: 'MES' }
    },
    {
      id: 'e19eb85e-3870-4044-8141-a79ed7cc3c95',
      type: 'team-node',
      x: 180,
      y: 30,
      properties: { region: 'LPL' },
      text: { x: 190, y: 31, value: 'RNG' }
    },
    {
      id: '3881bafb-966e-4746-b5c9-a9fe16144000',
      type: 'team-node',
      x: 180,
      y: 70,
      properties: { region: 'LCK' },
      text: { x: 190, y: 71, value: 'DRX' }
    },
    {
      id: 'e3586161-d8ea-490f-8897-307ac193c0c0',
      type: 'team-node',
      x: 180,
      y: 110,
      properties: { region: 'LEC' },
      text: { x: 190, y: 111, value: 'FNC' }
    },
    {
      id: 'e709f9f7-3a78-4482-b1e7-2b3aa0ea681d',
      type: 'team-node',
      x: 180,
      y: 150,
      properties: { region: 'LEC' },
      text: { x: 190, y: 151, value: 'MAD' }
    },
    {
      id: 'c1b0be4e-755c-4dbe-8fd8-9dad35c03d48',
      type: 'team-node',
      x: 180,
      y: 190,
      properties: { region: 'PCS' },
      text: { x: 190, y: 191, value: 'BYG' }
    },
    {
      id: '12752da1-dcbf-411d-b45c-06d86afb42b2',
      type: 'team-node',
      x: 180,
      y: 230,
      properties: { region: 'LCS' },
      text: { x: 190, y: 231, value: 'EG' }
    },
    {
      id: 'b523cc78-ded5-489f-bd14-ff2fd044388b',
      type: 'team-node',
      x: 180,
      y: 270,
      properties: { region: 'VCS' },
      text: { x: 190, y: 271, value: 'SBG' }
    },
    {
      id: 'c89ffcae-4b6a-49ae-b6a9-edc97cd664af',
      type: 'team-node',
      x: 180,
      y: 310,
      properties: { region: 'LJL' },
      text: { x: 190, y: 311, value: 'DNG' }
    },
    {
      id: 'c353c480-513d-40ee-a448-8348bc0f6ad2',
      type: 'team-node',
      x: 180,
      y: 350,
      properties: { region: 'LCO' },
      text: { x: 190, y: 351, value: 'CHF' }
    },
    {
      id: 'b502777f-13ee-4cf4-aabb-0bd868ce3d4e',
      type: 'team-node',
      x: 180,
      y: 390,
      properties: { region: 'TCL' },
      text: { x: 190, y: 391, value: 'IW' }
    },
    {
      id: 'f4a35b88-e3fa-4c8c-bf94-f720852f859b',
      type: 'team-node',
      x: 180,
      y: 430,
      properties: { region: 'LLA' },
      text: { x: 190, y: 431, value: 'ISG' }
    },
    {
      id: 'a901fe0f-9387-4af7-9e47-4311e423486e',
      type: 'team-node',
      x: 180,
      y: 470,
      properties: { region: 'CBLOL' },
      text: { x: 190, y: 471, value: 'LLL' }
    }
  ],
  edges: [
    {
      id: '5a42d095-8efb-4af8-963c-53abbc85ce8a',
      type: 'better-line',
      sourceNodeId: 'groupD1_1',
      targetNodeId: 'groupA2_4',
      startPoint: { x: 652, y: 633 },
      endPoint: { x: 750, y: 560 },
      properties: {},
      pointsList: [
        { x: 652, y: 633 },
        { x: 720, y: 633 },
        { x: 720, y: 560 },
        { x: 750, y: 560 }
      ]
    },
    {
      id: 'af3b3eb4-5c4f-4b7f-a687-3a125ac6751d',
      type: 'better-line',
      sourceNodeId: 'groupD1_2',
      targetNodeId: 'groupA2_4',
      startPoint: { x: 653, y: 662 },
      endPoint: { x: 750, y: 560 },
      properties: {},
      pointsList: [
        { x: 653, y: 662 },
        { x: 720, y: 662 },
        { x: 720, y: 560 },
        { x: 750, y: 560 }
      ]
    },
    {
      id: 'aa7152ca-75a2-4e91-96d9-2d0509292386',
      type: 'better-line',
      sourceNodeId: 'groupC1_2',
      targetNodeId: 'groupA2_3',
      startPoint: { x: 648, y: 500 },
      endPoint: { x: 750, y: 500 },
      properties: {},
      pointsList: [
        { x: 648, y: 500 },
        { x: 750, y: 500 }
      ]
    },
    {
      id: '31fd67a9-a5de-4549-810c-22c1e4c75883',
      type: 'better-line',
      sourceNodeId: 'groupC1_1',
      targetNodeId: 'groupA2_3',
      startPoint: { x: 648, y: 468 },
      endPoint: { x: 750, y: 500 },
      properties: {},
      pointsList: [
        { x: 648, y: 468 },
        { x: 699, y: 468 },
        { x: 699, y: 500 },
        { x: 750, y: 500 }
      ]
    },
    {
      id: '915b79d0-5a4f-4b6b-a0f4-25c6696e1e4f',
      type: 'better-line',
      sourceNodeId: 'groupA2_1',
      targetNodeId: 'groupA3_3',
      startPoint: { x: 922, y: 228 },
      endPoint: { x: 950, y: 340 },
      properties: {},
      pointsList: [
        { x: 922, y: 228 },
        { x: 922, y: 176 },
        { x: 1036, y: 176 },
        { x: 1036, y: 288 },
        { x: 950, y: 288 },
        { x: 950, y: 340 }
      ]
    },
    {
      id: '60a2a390-1ec0-4364-a4ba-a7d0e7210ea4',
      type: 'better-line',
      sourceNodeId: 'groupA2_3',
      targetNodeId: 'groupA3_4',
      startPoint: { x: 850, y: 500 },
      endPoint: { x: 950, y: 400 },
      properties: {},
      pointsList: [
        { x: 850, y: 500 },
        { x: 900, y: 500 },
        { x: 900, y: 400 },
        { x: 950, y: 400 }
      ]
    },
    {
      id: '14e527af-7dff-49a9-ba50-90cd225b033d',
      type: 'better-line',
      sourceNodeId: 'groupA2_4',
      targetNodeId: 'groupA3_4',
      startPoint: { x: 850, y: 560 },
      endPoint: { x: 950, y: 400 },
      properties: {},
      pointsList: [
        { x: 850, y: 560 },
        { x: 900, y: 560 },
        { x: 900, y: 400 },
        { x: 950, y: 400 }
      ]
    },
    {
      id: '5828896a-f80d-4995-b3b7-fa21be4e82cf',
      type: 'better-line',
      sourceNodeId: 'groupA3_3',
      targetNodeId: 'groupA4_1',
      startPoint: { x: 1050, y: 340 },
      endPoint: { x: 1150, y: 370 },
      properties: {},
      pointsList: [
        { x: 1050, y: 340 },
        { x: 1100, y: 340 },
        { x: 1100, y: 370 },
        { x: 1150, y: 370 }
      ]
    },
    {
      id: 'a9198a4d-5e85-4478-80fd-ad4f379be275',
      type: 'better-line',
      sourceNodeId: 'groupA3_4',
      targetNodeId: 'groupA4_1',
      startPoint: { x: 1050, y: 400 },
      endPoint: { x: 1150, y: 370 },
      properties: {},
      pointsList: [
        { x: 1050, y: 400 },
        { x: 1100, y: 400 },
        { x: 1100, y: 370 },
        { x: 1150, y: 370 }
      ]
    }
  ]
};
