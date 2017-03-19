//Basic example
//sentence: Tom shouted
function Basic(){

    var sen_JSON =
        {
            sentence:'Tom shouted',
            subject:{
                value:'Tom'
            },
            verb:{
                value:'shouted'
            }
        };

    var subject = sen_JSON["subject"].value;

    var verb = sen_JSON["verb"].value;

    drawBasic(subject,verb);
}

function drawBasic(subject, verb){
    //function to draw tree structure
    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');

    draw.clearRect(0, 0, canvas.width, canvas.height);
    draw.font = "17px Arial";

    //subject-verb relationship
    drawSubjectVerb(subject,verb);
}
//Question example
//sentence: why are you laughing?
function Question(){
    var ques_JSON =
        {
        sentence:'why are you laughing',
        subject:{
            value:'you'
        },
        verb:{
            value:'are lauging',
            modifiers:[
                {
                    type:'adverb',
                    value:'why'
                }
            ]
        }
    };

    var subject = ques_JSON["subject"].value;

    var verb = ques_JSON["verb"].value;

    var verbModifier = ques_JSON["verb"].modifiers[0].value;

    drawQuestion(subject,verb,verbModifier);

}

function drawQuestion(subject,verb,modifier){
    //function to draw tree structure
    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');

    draw.clearRect(0, 0, canvas.width, canvas.height);
    draw.font = "17px Arial";

    //subject-verb relationship
    drawSubjectVerb(subject,verb);

    //verb modifier
    draw.beginPath();
    draw.moveTo(335,100);
    draw.lineTo(365,140);
    //verb modifier placeholder
    draw.fillText(modifier,355,120);
    draw.closePath();


    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();

}

//Passive Verb example
//sentence: The sun is shining

function passiveVerb(){
    var pVerb_JSON =
        {
            sentence:'The sun is shining',
            subject:{
                value:'sun',
                modifiers:[
                    {
                        type:'determiner',
                        value:'The'
                    }
                ]
            },
            verb:{
                value:'is shining'
            }
        };

    var subject = pVerb_JSON["subject"].value;

    var verb = pVerb_JSON["verb"].value;

    var subjectMod = pVerb_JSON["subject"].modifiers[0].value;

    drawPassiveVerb(subject,verb,subjectMod);
}
function drawPassiveVerb(subject,verb,modifier){
    //function to draw tree structure
    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');

    draw.clearRect(0, 0, canvas.width, canvas.height);
    draw.font = "17px Arial";

    //subject-verb relationship
    drawSubjectVerb(subject,verb);

    //subject modifier
    draw.beginPath();
    draw.moveTo(135,100);
    draw.lineTo(165,140);
    //subject modifier placeholder
    draw.fillText(modifier,155,120);
    draw.closePath();


    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();

}




//Adjective example
//sentence: The yellow ducks quacked
function Adjective(){

    var sen1_JSON =
        {
            sentence:'The yellow ducks quacked',
            subject:{
                value:'ducks',
                modifiers:[
                    {
                        type:'determiner',
                        value:'The'
                    },
                    {
                        type:'adjective',
                        value:'yellow'}
                ]
            },
            verb:{
                value:'quacked'
            }
        };

    var subject = sen1_JSON["subject"].value;

    var verb = sen1_JSON["verb"].value;

    var modArray = [];

    for(var i=0; i < sen1_JSON["subject"].modifiers.length; i++){
        modArray.push(sen1_JSON["subject"].modifiers[i].value);
    }

    drawAdjective(subject, verb, modArray);
}


function drawAdjective(subject, verb, modArray){
    //function to draw tree structure
    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');

    draw.clearRect(0, 0, canvas.width, canvas.height);
    draw.font = "17px Arial";

    //subject-verb relationship
    drawSubjectVerb(subject,verb);

    //subject modifier
    draw.beginPath();
    draw.moveTo(135,100);
    draw.lineTo(165,140);
    //subject modifier placeholder
    draw.fillText(modArray[0],155,120);

    //2nd subject modifier
    draw.moveTo(210,100);
    draw.lineTo(240,140);
    //2nd subject modifier placeholder
    draw.fillText(modArray[1],230,120);
    draw.closePath();

    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();
}

//Adverb example
//sentence: He ran very slowly
function Adverb(){

    var sen2_JSON =
        {
            sentence: 'He ran very slowly',
            subject:{
                value:'He'
            },
            verb:{
                value:'ran',
                modifiers:[
                    {
                        type:'adverb',
                        value:'very'
                    },
                    {
                        type:'adverb',
                        value:'slowly'
                    }
                ]
            }
        };

    var subject = sen2_JSON["subject"].value;

    var verb = sen2_JSON["verb"].value;

    var modArray = [];

    for(var i=0; i < sen2_JSON["verb"].modifiers.length; i++){
        modArray.push(sen2_JSON["verb"].modifiers[i].value);
    }

    drawAdverb(subject, verb, modArray);

}

function drawAdverb(subject, verb, modArray){

    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');

    draw.clearRect(0, 0, canvas.width, canvas.height);


    draw.font = "17px Arial";

    //subject-verb relationship
    drawSubjectVerb(subject,verb);

    //verb modifier (adverb)
    draw.beginPath();
    draw.moveTo(350,100);
    draw.lineTo(380,140);
    //verb modifier placeholder
    draw.fillText(modArray[1],370,120);

    //adverb modifier
    draw.moveTo(365,120);
    draw.lineTo(340,145);
    draw.lineTo(370,185);
    draw.moveTo(370,185);
    //verb modifier placeholder
    draw.fillText(modArray[0],360,165);
    draw.closePath();


    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();

}

//Prepositional phrase example
//sentence: The horse galloped through the empty field
function Preposition(){

    var sen3_JSON =
        {
            sentence:'The horse galloped through the empty field',
            subject:{
                value:'horse',
                modifiers:[
                    {
                        type:'determiner',
                        value: 'The'
                    }
                ]
            },
            verb:{
                value:'galloped',
                modifiers:[
                    {
                        type:'prepositional',
                        value:'through',
                        modifiers:[
                            {
                                type:'object',
                                value:'field',
                                modifiers:[
                                    {
                                        type:'determiner',
                                        value:'the'
                                    },
                                    {
                                        type:'adjective',
                                        value: 'empty'
                                    }

                                ]
                            }
                        ]
                    }
                ]
            }
        };

    var subject = sen3_JSON["subject"].value;

    var verb = sen3_JSON["verb"].value;

    var subjectMod = sen3_JSON["subject"].modifiers[0].value;


    //The type and value array will store the type and value attributes of the JSON object in PAIRS.
    var typeArr = [], valueArr = [];
    //We do a for loop on the initial modifier of the verb if it exists.
    for(var i=0; i<sen3_JSON["verb"].modifiers.length; i++){
        //If the type attribute exists then push that type string into the type array
        if(sen3_JSON["verb"].modifiers[0].type){typeArr.push(sen3_JSON["verb"].modifiers[0].type)}
        //If the verb attribute exists then push that verb string into the verb array
        if(sen3_JSON["verb"].modifiers[0].value){valueArr.push(sen3_JSON["verb"].modifiers[0].value)}
        //If the modifier exists then we want to push that modifier into the recursive function along with the typeArr and valueArr
        if(sen3_JSON["verb"].modifiers[0].modifiers){modRecursive(sen3_JSON["verb"].modifiers[0].modifiers,typeArr,valueArr)}
    }

    //array to store valueArr elements. Allows for function to be used for sentence's of different lengths
    var verbMod = [];
    for(var j=0; j<valueArr.length; j++)
    {
        verbMod.push(valueArr[j]);
    }


    drawPreposition(subject, verb, subjectMod, verbMod);

}

//recursive function to traverse through modifiers in JSON
//This function takes in a modifier, typeArr and valueArr.
function modRecursive(modifier,typeArr,valueArr){
    for(var i=0; i<modifier.length; i++){
        //If the type attribute exists then push that type string into the type array
        if(modifier[i].type){typeArr.push(modifier[i].type)}
        //If the verb attribute exists then push that verb string into the verb array
        if(modifier[i].value){valueArr.push(modifier[i].value)}
        //If the modifier exists then we want to call this function again but with the modifier just found.
        if(modifier[i].modifiers){modRecursive(modifier[i].modifiers,typeArr,valueArr)}
    }
}


function drawPreposition(subject, verb, subjectMod, verbMod){
    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');

    draw.clearRect(0, 0, canvas.width, canvas.height);


    draw.font = "17px Arial";

    //subject-verb relationship
    drawSubjectVerb(subject,verb);

    draw.beginPath();
    //subject modifier
    draw.moveTo(135,100);
    draw.lineTo(165,140);
    //subject modifier placeholder
    draw.fillText(subjectMod,155,120);

    //preposition modifier
    draw.moveTo(350,100);
    draw.lineTo(380,140);
    //prepostion modifier placeholder
    draw.fillText(verbMod[0],370,120);

    //object modifier
    draw.moveTo(380,140);
    draw.lineTo(395,160);
    draw.lineTo(500,160);
    //object modifier placeholder
    draw.fillText(verbMod[1],420,150);

    //determiner modifier
    draw.moveTo(405,160);
    draw.lineTo(435,200);
    //object modifier placeholder
    draw.fillText(verbMod[2],425,180);

    //adjective modifier
    draw.moveTo(470,160);
    draw.lineTo(500,200);

    //object modifier placeholder
    draw.fillText(verbMod[3],490,180);
    draw.closePath();

    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();
}

//Direct object example
//sentence: David drove home
function directObject(){

    var sen4_JSON =
        {
            sentence: 'David drove home',
            subject:{
                value:'David'
            },
            verb:{
                value:'drove',
                modifiers:[
                    {
                        type:'object',
                        value:'home'
                    }
                ]
            }
        };

    var subject = sen4_JSON["subject"].value;

    var verb = sen4_JSON["verb"].value;

    var directObject = sen4_JSON["verb"].modifiers[0].value;

    drawDirectObject(subject, verb, directObject);

}

function drawDirectObject(subject, verb, directObject){

    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');

    draw.clearRect(0, 0, canvas.width, canvas.height);


    draw.font = "17px Arial";

    //subject-verb relationship
    drawSubjectVerb(subject,verb);

    //verb modifier (direct object)
    draw.beginPath();
    draw.moveTo(430,100);
    draw.lineTo(430,70);
    draw.moveTo(480,100);
    draw.lineTo(510,100);
    //verb modifier placeholder
    draw.fillText(directObject,450,90);
    draw.closePath();
    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();

}

//Predicate noun example
//sentence: blue is a colour
function predicateNoun(){

    var sen5_JSON =
        {
            sentence: 'Blue is a colour',
            subject:{
                value:'Blue'
            },
            verb:{
                value:'is',
                modifiers:[
                    {
                        type:'noun',
                        value:'colour'
                    },
                    {
                        type:'determiner',
                        value:'a'
                    }
                ]
            }
        };

    var subject = sen5_JSON["subject"].value;

    var verb = sen5_JSON["verb"].value;

    var modArray = [];

    for(var i=0; i < sen5_JSON["verb"].modifiers.length; i++){
        modArray.push(sen5_JSON["verb"].modifiers[i].value);
    }

    drawPredicateNoun(subject, verb, modArray);

}

function drawPredicateNoun(subject, verb, modArray){

    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');

    draw.clearRect(0, 0, canvas.width, canvas.height);


    draw.font = "17px Arial";

    //subject-verb relationship
    drawSubjectVerb(subject,verb);

    //verb modifier (pronoun) - copula construction
    draw.beginPath();
    draw.moveTo(420,100);
    draw.lineTo(395,70);
    //verb modifier placeholder
    draw.fillText(modArray[0],425,90);

    //verb modifier (determiner)
    draw.moveTo(425,100);
    draw.lineTo(455,140);

    //verb modifier placeholder
    draw.fillText(modArray[1],445,120);
    draw.closePath();


    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();

}

function drawSubjectVerb(sub, verb){
    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');
    draw.beginPath();
    draw.moveTo(120,100);
    draw.lineTo(300,100);
    draw.lineTo(300,70);
    draw.moveTo(300,100);
    draw.lineTo(300,130);
    draw.moveTo(300,100);
    draw.lineTo(480,100);
    draw.closePath();
    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();
    //subject placeholder
    draw.fillText(sub,185,90);
    //verb placeholder
    draw.fillText(verb,365,90);

}