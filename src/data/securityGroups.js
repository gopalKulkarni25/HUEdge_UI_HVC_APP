

export const SECURITY_GROUPS = [
    {
        id:1,
        name:'Security SG 1',
        rules:[{
            type:'SSH',
            protocol:'TCP',
            port:'22',
            source:'0.0.0.0',
        },
        {
            type:'HTTPS',
            protocol:'TCP',
            port:'22',
            source:'0.0.0.0',
        }
        ]
    },
    {
        id:1,
        name:'Security SG 2',
        rules:[{
            type:'HTTPS',
            protocol:'UDP',
            port:'443',
            source:'0.0.0.0',
        }]
    },
    {
        id:1,
        name:'Security SG 3',
        rules:[{
            type:'SSH',
            protocol:'UDP',
            port:'8080',
            source:'0.0.0.0',
        }]
    }
]