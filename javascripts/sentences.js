//Test
var test_config = {
    chart: {
        container: "#tree-structure",
        node: {
            HTMLclass: 'test_example'
        }
    },

    nodeStructure: {
        text: { name: "Parent node"

        },
        HTMLclass: 'parentNode',
        children: [
            {
                text: { name: "First Child"}
            },
            {
                text: { name: "Second Child"}
            }
        ]
    }
};

//Simple sentence
//dependency tree
var simple_sentence = {
    chart:  {
        container: '#tree-structure',

        connectors: {
            type: 'bCurve'
        }
    },

    nodeStructure: {
        text: { name: "Tom was laughing"},
        HTMLclass: 'parentNode',
        children: [
            {
                text: { name: "Tom"}

            },
            {
                text: { name: "was laughing"}
            }
        ]
    }
};

//syntax tree
var simple_sentence_syn = {
    chart: {
        container: '#simple_sentence',

        animateOnInit: false,
        nodeAlign: "Top",

        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 800,
            connectorsAnimation: "bounce",
            connectorsSpeed: 800
        },

        connectors: {
            type: 'straight'

        }
    },
//Sentence: Tom was laughing
    nodeStructure: {
        text: { name: "S"},
        HTMLclass: 'parentNode',
        children: [
            {
                text: { name: "NP"},
                children: [
                    {
                        text:{name: "NN"},
                        children: [
                            {
                                text:{name: "Tom"},
                                HTMLclass: 'value'
                            }
                        ]
                    }
                ]

            },
            {
                text: { name: "VP"},
                children: [
                    {
                        text:{name: "was"},
                        HTMLclass: 'value'
                    },
                    {
                        text:{name: "VP"},
                        children: [
                            {
                                text:{name: "laughing"},
                                HTMLclass: 'value'
                            }


                        ]
                    }



                ]

            }
        ]
    }
};

//Sentence with an adjective
//dependency tree
var adj_sentence = {
    chart:  {
        container: '#tree-structure',

        connectors: {
            type: 'straight'
        }
    },

    nodeStructure: {
        text: { name: "The colourful bird flew"},
        HTMLclass: 'parentNode',
        children: [
            {
                text: { name: "bird"},
                children: [
                    {
                        text:{
                            name: "The colourful"
                        }
                    }
                ]
            },
            {
                text: { name: "flew"}
            }
        ]
    }
};

//syntax tree
var adj_sentence_syn = {
    chart:  {
        container: '#adjective_sentence',

        animateOnInit: false,
        nodeAlign: "Top",

        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 800,
            connectorsAnimation: "bounce",
            connectorsSpeed: 800
        },

        connectors: {
            type: 'straight'
        }
    },
//The colourful bird flew
    nodeStructure: {
        text: { name: "S"},
        HTMLclass: 'parentNode',
        children: [
            {
                text: { name: "NP"},
                children: [
                    {
                        text:{
                            name: "DT"
                        },
                        children: [
                            {
                                text:{name: "The"},
                                HTMLclass: 'value'
                            }
                        ]

                    },
                    {
                        text:{
                            name: "JJ"
                        },
                        children: [
                            {
                                text:{name: "colourful"},
                                HTMLclass: 'value'
                            }
                        ]
                    },
                    {
                        text:{
                            name: "NN"
                        },
                        children: [
                            {
                                text:{name: "bird"},
                                HTMLclass: 'value'
                            }
                        ]
                    }
                ]
            },
            {
                text: { name: "VP"},
                children: [
                    {
                        text:{name: "flew"},
                        HTMLclass: 'value'
                    }
                ]

            }
        ]
    }
};

//sentence with an adverb
//dependency tree
var adv_sentence = {
    chart:  {
        container: '#tree-structure',

        connectors: {
            type: 'straight'
        }
    },

    nodeStructure: {
        text: { name: "The woman spoke very loudly"},
        HTMLclass: 'parentNode',
        children: [
            {
                text: { name: "woman"},
                children: [
                    {
                        text:{
                            name: "The"
                        }
                    }
                ]
            },
            {
                text: { name: "spoke"},
                children: [
                    {
                        text:{
                            name: "very loudly"
                        }
                    }
                ]
            }
        ]
    }
};

//syntax tree
var adv_sentence_syn = {
    chart:  {
        container: '#adverb_sentence',

        animateOnInit: false,
        nodeAlign: "Top",

        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 800,
            connectorsAnimation: "bounce",
            connectorsSpeed: 800
        },

        connectors: {
            type: 'straight'
        }
    },
//The woman speaks very loudly
    nodeStructure: {
        text: { name: "S"},
        HTMLclass: 'parentNode',
        children: [
            {
                text: { name: "NP"},
                children: [
                    {
                        text:{
                            name: "DT"
                        },
                        children: [
                            {
                                text:{name: "The"},
                                HTMLclass: 'value'
                            }
                        ]
                    },
                    {
                        text:{
                            name: "NN"
                        },
                        children: [
                            {
                                text:{name: "woman"},
                                HTMLclass: 'value'
                            }
                        ]
                    }
                ]
            },
            {
                text: { name: "VP"},
                children: [
                    {
                        text:{
                            name: "V"
                        },
                        children: [
                            {
                                text:{name: "speaks"},
                                HTMLclass: 'value'
                            }
                        ]
                    },
                    {
                        text:{
                            name: "ADVP"
                        },
                        children: [
                            {
                                text:{name: "RB"},
                                children: [
                                    {
                                        text:{name: "very"},
                                        HTMLclass: 'value'
                                    }
                                ]
                            },
                            {
                                text:{name: "RB"},
                                children: [
                                    {
                                        text:{name: "loudly"},
                                        HTMLclass: 'value'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

//sentence with a prepositional phrase
//dependency tree
var prep_sentence = {
    chart:  {
        container: '#tree-structure',

        connectors: {
            type: 'straight'
        }
    },

    nodeStructure: {
        text: { name: "The horse galloped through the empty field"},
        HTMLclass: 'parentNode',
        children: [
            {
                text: { name: "horse"},
                children: [
                    {
                        text:{
                            name: "The"
                        }
                    }
                ]
            },
            {
                text: { name: "galloped"},
                children: [
                    {
                        text:{
                            name: "through"
                        },
                        children: [
                            {
                                text:{
                                    name: "garden"
                                },
                                children: [
                                    {
                                        text:{
                                            name: "the empty"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

//syntax tree
var prep_sentence_syn = {
    chart:  {
        container: '#prepositional_sentence',

        animateOnInit: false,
        nodeAlign: "Top",

        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 800,
            connectorsAnimation: "bounce",
            connectorsSpeed: 800
        },

        connectors: {
            type: 'straight'
        }
    },
//Sentence: The horse galloped through the empty field
    nodeStructure: {
        text: { name: "S"},
        HTMLclass: 'parentNode',
        children: [
            {
                text: { name: "NP"},
                children: [
                    {
                        text:{
                            name: "DT"
                        },
                        children: [
                            {
                                text:{
                                    name: "The"
                                },
                                HTMLclass: 'value'
                            }
                        ]
                    },
                    {
                        text:{
                            name: "NN"
                        },
                        children: [
                            {
                                text:{
                                    name: "horse"
                                },
                                HTMLclass: 'value'
                            }
                        ]
                    }
                ]
            },
            {
                text: { name: "VP"},
                children: [
                    {
                        text:{
                            name: "V"
                        },
                        children: [
                            {
                                text:{
                                    name: "galloped"
                                },
                                HTMLclass: 'value'
                            }
                        ]
                    },
                    {
                        text:{
                            name: "PP"
                        },
                        children: [
                            {
                                text:{
                                    name: "IN"
                                },
                                children:[
                                    {
                                        text:{name:"through"},
                                        HTMLclass: 'value'
                                    }
                                ]
                            },
                            {
                                text:{
                                    name: "NP"
                                },
                                children:[
                                    {
                                        text:{
                                            name: "DT"
                                        },
                                        children: [
                                            {
                                                text:{name: "The"},
                                                HTMLclass: 'value'
                                            }
                                        ]

                                    },
                                    {
                                        text:{
                                            name: "JJ"
                                        },
                                        children: [
                                            {
                                                text:{name: "empty"},
                                                HTMLclass: 'value'
                                            }
                                        ]
                                    },
                                    {
                                        text:{
                                            name: "NN"
                                        },
                                        children: [
                                            {
                                                text:{name: "field"},
                                                HTMLclass: 'value'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }

                ]
            }
        ]
    }
};