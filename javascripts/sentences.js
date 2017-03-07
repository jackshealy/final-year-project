
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

//Simple Sentence (Subject + Verb)
/*{
 sentence: 'Tom was laughing',
 subject:{
 value: 'Tom'
 },
 verb:{
 value:'was laughing'
 }
 }*/

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

var simple_sentence_syn = {
    chart: {
        container: '#simple_sentence',

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

//More complex sentence (Subject, Verb and Adjective)
/*{
 sentence: 'The colourful bird flew',
 subject:{
 value: 'bird',
 modifiers:[
 {
 type:'adjective',
 value:'The colourful'
 }
 ]
 },
 verb:{
 value:'flew'
 }
 }*/

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

var adj_sentence_syn = {
    chart:  {
        container: '#adjective_sentence',

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

//More complex sentence (Subject, Verb and Adverb)
/*{
 sentence: 'The woman spoke very loudly',
 subject:{
 value: 'woman',
 modifiers:[
 {
 type:'determiner',
 value:'The'
 }
 ]
 },
 verb:{
 value:'spoke',
 modifiers:[
 {
 type:'adverb',
 value:'very loudly'
 }
 ]
 }
 }*/

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

var adv_sentence_syn = {
    chart:  {
        container: '#adverb_sentence',

        connectors: {
            type: 'straight'
        }
    },
//The woman spoke very loudly
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
                                text:{name: "spoke"},
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

//More complex sentence (Subject, Verb and prepositional phrase)
/*{
 sentence: 'The horse galloped through the empty field',
 subject:{
 value: 'horse',
 modifiers:[
 {
 type:'determiner',
 value:'The'
 }
 ]
 },
 verb:{
 value:'galloped',
 modifiers:[
 {
 type:'preposition',
 value:'through',
 modifiers:[
 {
 type:'object',
 value:'field',
 modifiers:[
 {
 type:'adjective',
 value:'the empty'

 }
 ]

 }
 ]
 }
 ]
 }
 }*/

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

var prep_sentence_syn = {
    chart:  {
        container: '#prepositional_sentence',

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

