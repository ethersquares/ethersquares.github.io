export default [ {
  'constant': true,
  'inputs': [],
  'name': 'totalVotes',
  'outputs': [ { 'name': '', 'type': 'uint256' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'affirmations',
  'outputs': [ { 'name': '', 'type': 'uint256' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'winsReported',
  'outputs': [ { 'name': '', 'type': 'uint256' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [],
  'name': 'accept',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [ { 'name': '', 'type': 'uint256' }, { 'name': '', 'type': 'uint256' } ],
  'name': 'squareWins',
  'outputs': [ { 'name': '', 'type': 'uint256' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'votingPeriodBlockNumber',
  'outputs': [ { 'name': '', 'type': 'uint256' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [ { 'name': 'affirm', 'type': 'bool' } ],
  'name': 'vote',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [],
  'name': 'finalize',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [ { 'name': '_voterStakes', 'type': 'address' } ],
  'name': 'setVoterStakesContract',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'accepted',
  'outputs': [ { 'name': '', 'type': 'bool' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [ { 'name': 'home', 'type': 'uint256' }, { 'name': 'away', 'type': 'uint256' }, {
    'name': 'wins',
    'type': 'uint256'
  } ],
  'name': 'setSquareWins',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'VOTING_PERIOD_DURATION',
  'outputs': [ { 'name': '', 'type': 'uint256' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'isFinalized',
  'outputs': [ { 'name': '', 'type': 'bool' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'owner',
  'outputs': [ { 'name': '', 'type': 'address' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'voterStakes',
  'outputs': [ { 'name': '', 'type': 'address' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'finalized',
  'outputs': [ { 'name': '', 'type': 'bool' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'SCORE_REPORT_START_TIME',
  'outputs': [ { 'name': '', 'type': 'uint256' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [],
  'name': 'unfinalize',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'TOTAL_WINS',
  'outputs': [ { 'name': '', 'type': 'uint256' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'currentTime',
  'outputs': [ { 'name': '', 'type': 'uint256' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [ { 'name': 'home', 'type': 'uint256' }, { 'name': 'away', 'type': 'uint256' } ],
  'name': 'getSquareWins',
  'outputs': [ { 'name': 'numSquareWins', 'type': 'uint256' }, { 'name': 'totalWins', 'type': 'uint256' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'votingPeriodStartTime',
  'outputs': [ { 'name': '', 'type': 'uint256' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'GAME_START_TIME',
  'outputs': [ { 'name': '', 'type': 'uint256' } ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [ { 'name': 'newOwner', 'type': 'address' } ],
  'name': 'transferOwnership',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'anonymous': false,
  'inputs': [ { 'indexed': false, 'name': 'time', 'type': 'uint256' } ],
  'name': 'LogAccepted',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [ { 'indexed': false, 'name': 'time', 'type': 'uint256' } ],
  'name': 'LogUnfinalized',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [ { 'indexed': true, 'name': 'voter', 'type': 'address' }, {
    'indexed': true,
    'name': 'affirm',
    'type': 'bool'
  }, { 'indexed': false, 'name': 'stake', 'type': 'uint256' } ],
  'name': 'LogVote',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [ { 'indexed': false, 'name': 'home', 'type': 'uint256' }, {
    'indexed': false,
    'name': 'away',
    'type': 'uint256'
  }, { 'indexed': false, 'name': 'wins', 'type': 'uint256' } ],
  'name': 'LogSquareWinsUpdated',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [ { 'indexed': false, 'name': 'time', 'type': 'uint256' } ],
  'name': 'LogFinalized',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [ { 'indexed': true, 'name': 'previousOwner', 'type': 'address' }, {
    'indexed': true,
    'name': 'newOwner',
    'type': 'address'
  } ],
  'name': 'OwnershipTransferred',
  'type': 'event'
} ];