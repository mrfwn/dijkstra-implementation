
export const correlationListBase = [
    {
        source: 'A',
        destination: 'C',
        edgeWeight: 3
    },
    {
        source: 'A',
        destination: 'E',
        edgeWeight: 7
    },
    {
        source: 'A',
        destination: 'B',
        edgeWeight: 4
    },
    {
        source: 'B',
        destination: 'A',
        edgeWeight: 4
    },
    {
        source: 'B',
        destination: 'C',
        edgeWeight: 6
    },
    {
        source: 'B',
        destination: 'D',
        edgeWeight: 5
    },
    {
        source: 'C',
        destination: 'A',
        edgeWeight: 3
    },
    {
        source: 'C',
        destination: 'B',
        edgeWeight: 6
    },
    {
        source: 'C',
        destination: 'E',
        edgeWeight: 8
    },
    {
        source: 'C',
        destination: 'D',
        edgeWeight: 11
    },
    {
        source: 'D',
        destination: 'B',
        edgeWeight: 5
    },
    {
        source: 'D',
        destination: 'C',
        edgeWeight: 11
    },
    {
        source: 'D',
        destination: 'E',
        edgeWeight: 2
    },
    {
        source: 'D',
        destination: 'F',
        edgeWeight: 2
    },

    {
        source: 'E',
        destination: 'A',
        edgeWeight: 7
    },
    {
        source: 'E',
        destination: 'C',
        edgeWeight: 8
    },
    {
        source: 'E',
        destination: 'D',
        edgeWeight: 2
    },
    {
        source: 'E',
        destination: 'G',
        edgeWeight: 5
    },
    {
        source: 'F',
        destination: 'D',
        edgeWeight: 2
    },
    {
        source: 'F',
        destination: 'G',
        edgeWeight: 3
    },
    {
        source: 'G',
        destination: 'D',
        edgeWeight: 10
    },
    {
        source: 'G',
        destination: 'E',
        edgeWeight: 5
    },
    {
        source: 'G',
        destination: 'F',
        edgeWeight: 3
    }
]

export const correlationListStates = [
    {
        source: 'Pernambuco',
        destination: 'Brasilia',
        edgeWeight: 3
    },
    {
        source: 'Pernambuco',
        destination: 'Ceara',
        edgeWeight: 7
    },
    {
        source: 'Pernambuco',
        destination: 'Paraiba',
        edgeWeight: 4
    },
    {
        source: 'Paraiba',
        destination: 'Pernambuco',
        edgeWeight: 4
    },
    {
        source: 'Paraiba',
        destination: 'Brasilia',
        edgeWeight: 6
    },
    {
        source: 'Paraiba',
        destination: 'Santa Catarina',
        edgeWeight: 5
    },
    {
        source: 'Brasilia',
        destination: 'Pernambuco',
        edgeWeight: 3
    },
    {
        source: 'Brasilia',
        destination: 'Paraiba',
        edgeWeight: 6
    },
    {
        source: 'Brasilia',
        destination: 'Ceara',
        edgeWeight: 8
    },
    {
        source: 'Brasilia',
        destination: 'Santa Catarina',
        edgeWeight: 11
    },
    {
        source: 'Santa Catarina',
        destination: 'Paraiba',
        edgeWeight: 5
    },
    {
        source: 'Santa Catarina',
        destination: 'Brasilia',
        edgeWeight: 11
    },
    {
        source: 'Santa Catarina',
        destination: 'Ceara',
        edgeWeight: 2
    },
    {
        source: 'Santa Catarina',
        destination: 'Sao Paulo',
        edgeWeight: 2
    },

    {
        source: 'Ceara',
        destination: 'Pernambuco',
        edgeWeight: 7
    },
    {
        source: 'Ceara',
        destination: 'Brasilia',
        edgeWeight: 8
    },
    {
        source: 'Ceara',
        destination: 'Santa Catarina',
        edgeWeight: 2
    },
    {
        source: 'Ceara',
        destination: 'Rio de Janeiro',
        edgeWeight: 5
    },
    {
        source: 'Sao Paulo',
        destination: 'Santa Catarina',
        edgeWeight: 2
    },
    {
        source: 'Sao Paulo',
        destination: 'Rio de Janeiro',
        edgeWeight: 3
    },
    {
        source: 'Rio de Janeiro',
        destination: 'Santa Catarina',
        edgeWeight: 10
    },
    {
        source: 'Rio de Janeiro',
        destination: 'Ceara',
        edgeWeight: 5
    },
    {
        source: 'Rio de Janeiro',
        destination: 'Sao Paulo',
        edgeWeight: 3
    }
];

export const correlationListRouters = [
    {
        source: 'Router 1',
        destination: 'Router 3',
        edgeWeight: 3
    },
    {
        source: 'Router 1',
        destination: 'Router 5',
        edgeWeight: 7
    },
    {
        source: 'Router 1',
        destination: 'Router 2',
        edgeWeight: 4
    },
    {
        source: 'Router 2',
        destination: 'Router 1',
        edgeWeight: 4
    },
    {
        source: 'Router 2',
        destination: 'Router 3',
        edgeWeight: 6
    },
    {
        source: 'Router 2',
        destination: 'Router 4',
        edgeWeight: 5
    },
    {
        source: 'Router 3',
        destination: 'Router 1',
        edgeWeight: 3
    },
    {
        source: 'Router 3',
        destination: 'Router 2',
        edgeWeight: 6
    },
    {
        source: 'Router 3',
        destination: 'Router 5',
        edgeWeight: 8
    },
    {
        source: 'Router 3',
        destination: 'Router 4',
        edgeWeight: 11
    },
    {
        source: 'Router 4',
        destination: 'Router 2',
        edgeWeight: 5
    },
    {
        source: 'Router 4',
        destination: 'Router 3',
        edgeWeight: 11
    },
    {
        source: 'Router 4',
        destination: 'Router 5',
        edgeWeight: 2
    },
    {
        source: 'Router 4',
        destination: 'Router 6',
        edgeWeight: 2
    },

    {
        source: 'Router 5',
        destination: 'Router 1',
        edgeWeight: 7
    },
    {
        source: 'Router 5',
        destination: 'Router 3',
        edgeWeight: 8
    },
    {
        source: 'Router 5',
        destination: 'Router 4',
        edgeWeight: 2
    },
    {
        source: 'Router 5',
        destination: 'Router 7',
        edgeWeight: 5
    },
    {
        source: 'Router 6',
        destination: 'Router 4',
        edgeWeight: 2
    },
    {
        source: 'Router 6',
        destination: 'Router 7',
        edgeWeight: 3
    },
    {
        source: 'Router 7',
        destination: 'Router 4',
        edgeWeight: 10
    },
    {
        source: 'Router 7',
        destination: 'Router 5',
        edgeWeight: 5
    },
    {
        source: 'Router 7',
        destination: 'Router 6',
        edgeWeight: 3
    }
]

export const correlationListAddress = [
    {
        source: 'Address 1',
        destination: 'Address 3',
        edgeWeight: 3
    },
    {
        source: 'Address 1',
        destination: 'Address 5',
        edgeWeight: 7
    },
    {
        source: 'Address 1',
        destination: 'Address 2',
        edgeWeight: 4
    },
    {
        source: 'Address 2',
        destination: 'Address 1',
        edgeWeight: 4
    },
    {
        source: 'Address 2',
        destination: 'Address 3',
        edgeWeight: 6
    },
    {
        source: 'Address 2',
        destination: 'Address 4',
        edgeWeight: 5
    },
    {
        source: 'Address 3',
        destination: 'Address 1',
        edgeWeight: 3
    },
    {
        source: 'Address 3',
        destination: 'Address 2',
        edgeWeight: 6
    },
    {
        source: 'Address 3',
        destination: 'Address 5',
        edgeWeight: 8
    },
    {
        source: 'Address 3',
        destination: 'Address 4',
        edgeWeight: 11
    },
    {
        source: 'Address 4',
        destination: 'Address 2',
        edgeWeight: 5
    },
    {
        source: 'Address 4',
        destination: 'Address 3',
        edgeWeight: 11
    },
    {
        source: 'Address 4',
        destination: 'Address 5',
        edgeWeight: 2
    },
    {
        source: 'Address 4',
        destination: 'Address 6',
        edgeWeight: 2
    },

    {
        source: 'Address 5',
        destination: 'Address 1',
        edgeWeight: 7
    },
    {
        source: 'Address 5',
        destination: 'Address 3',
        edgeWeight: 8
    },
    {
        source: 'Address 5',
        destination: 'Address 4',
        edgeWeight: 2
    },
    {
        source: 'Address 5',
        destination: 'Address 7',
        edgeWeight: 5
    },
    {
        source: 'Address 6',
        destination: 'Address 4',
        edgeWeight: 2
    },
    {
        source: 'Address 6',
        destination: 'Address 7',
        edgeWeight: 3
    },
    {
        source: 'Address 7',
        destination: 'Address 4',
        edgeWeight: 10
    },
    {
        source: 'Address 7',
        destination: 'Address 5',
        edgeWeight: 5
    },
    {
        source: 'Address 7',
        destination: 'Address 6',
        edgeWeight: 3
    }
]