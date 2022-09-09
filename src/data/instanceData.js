export const INSTANCE_ARR = [
    {   id:1,
        name:'General Purpose',
        isSelected: true,
        cpu: ["1 Core","2 Core","4 Core"],
        memory: ["256MB", "512MB", "1GB" , "2GB" , "4GB"]
    },
    {   id:2,
        name:'CPU Optimised',
        isSelected: false,
        cpu: ["1 Core","2 Core","8 Core", "16 Core"],
        memory: ["16GB" , "32GB" , "64GB"]
    },
    {   id:3,
        name:'Storage Optimised',
        isSelected: false,
        cpu: ["1 Core","8 Core","16 Core"],
        memory: ["16GB" , "32GB" , "64GB"]
    },
    {   id:4,
        name:'Network Optimised',
        isSelected: false,
        cpu: ["1 Core","2 Core","4 Core","8 Core", "16 Core"],
        memory: ["256MB", "512MB", "1GB" , "2GB" , "4GB","16GB","32GB","64GB"]
    }
]
