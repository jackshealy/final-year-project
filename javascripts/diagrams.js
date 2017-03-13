//Basic example
//sentence: Tom shouted
function example0(){

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

    drawTree0(subject,verb);
}

function drawTree0(subject, verb){
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
    draw.moveTo(285,100);
    draw.lineTo(315,140);
    //verb modifier placeholder
    draw.fillText(modifier,305,120);
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
    draw.moveTo(85,100);
    draw.lineTo(115,140);
    //subject modifier placeholder
    draw.fillText(modifier,105,120);
    draw.closePath();


    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();

}




//Adjective example
//sentence: The yellow ducks quacked
function example1(){

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

    drawTree(subject, verb, modArray);
}


function drawTree(subject, verb, modArray){
    //function to draw tree structure
    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');

    draw.clearRect(0, 0, canvas.width, canvas.height);
    draw.font = "17px Arial";

    //subject-verb relationship
    drawSubjectVerb(subject,verb);

    //subject modifier
    draw.beginPath();
    draw.moveTo(85,100);
    draw.lineTo(115,140);
    //subject modifier placeholder
    draw.fillText(modArray[0],105,120);

    //2nd subject modifier
    draw.moveTo(160,100);
    draw.lineTo(190,140);
    //2nd subject modifier placeholder
    draw.fillText(modArray[1],180,120);
    draw.closePath();

    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();
}

//Adverb example
//sentence: He ran very slowly
function example2(){

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

    drawTree2(subject, verb, modArray);

}

function drawTree2(subject, verb, modArray){

    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');

    draw.clearRect(0, 0, canvas.width, canvas.height);


    draw.font = "17px Arial";

    //subject-verb relationship
    drawSubjectVerb(subject,verb);

    //verb modifier (adverb)
    draw.beginPath();
    draw.moveTo(300,100);
    draw.lineTo(330,140);
    //verb modifier placeholder
    draw.fillText(modArray[1],320,120);

    //adverb modifier
    draw.moveTo(315,120);
    draw.lineTo(290,145);
    draw.lineTo(320,185);
    draw.moveTo(320,185);
    //verb modifier placeholder
    draw.fillText(modArray[0],310,165);
    draw.closePath();


    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();

}

//Prepositional phrase example
//sentence: The horse galloped through the empty field
function example3(){

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


    drawTree3(subject, verb, subjectMod, verbMod);

}

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


function drawTree3(subject, verb, subjectMod, verbMod){
    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');

    draw.clearRect(0, 0, canvas.width, canvas.height);


    draw.font = "17px Arial";

    //subject-verb relationship
    drawSubjectVerb(subject,verb);

    draw.beginPath();
    //subject modifier
    draw.moveTo(85,100);
    draw.lineTo(115,140);
    //subject modifier placeholder
    draw.fillText(subjectMod,105,120);

    //preposition modifier
    draw.moveTo(300,100);
    draw.lineTo(330,140);
    //prepostion modifier placeholder
    draw.fillText(verbMod[0],320,120);

    //object modifier
    draw.moveTo(330,140);
    draw.lineTo(345,160);
    draw.lineTo(450,160);
    //object modifier placeholder
    draw.fillText(verbMod[1],370,150);

    //determiner modifier
    draw.moveTo(355,160);
    draw.lineTo(385,200);
    //object modifier placeholder
    draw.fillText(verbMod[2],375,180);

    //adjective modifier
    draw.moveTo(420,160);
    draw.lineTo(450,200);

    //object modifier placeholder
    draw.fillText(verbMod[3],440,180);
    draw.closePath();

    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();
}

//Direct object example
//sentence: David drove home
function example4(){

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

    drawTree4(subject, verb, directObject);

}

function drawTree4(subject, verb, directObject){

    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');

    draw.clearRect(0, 0, canvas.width, canvas.height);


    draw.font = "17px Arial";

    //subject-verb relationship
    drawSubjectVerb(subject,verb);

    //verb modifier (direct object)
    draw.beginPath();
    draw.moveTo(380,100);
    draw.lineTo(380,70);
    draw.moveTo(430,100);
    draw.lineTo(460,100);
    //verb modifier placeholder
    draw.fillText(directObject,400,90);
    draw.closePath();
    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();

}

//Predicate noun example
//sentence: blue is a colour
function example5(){

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

    drawTree5(subject, verb, modArray);

}

function drawTree5(subject, verb, modArray){

    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');

    draw.clearRect(0, 0, canvas.width, canvas.height);


    draw.font = "17px Arial";

    //subject-verb relationship
    drawSubjectVerb(subject,verb);

    //verb modifier (pronoun) - copula construction
    draw.beginPath();
    draw.moveTo(370,100);
    draw.lineTo(345,70);
    //verb modifier placeholder
    draw.fillText(modArray[0],375,90);

    //verb modifier (determiner)
    draw.moveTo(375,100);
    draw.lineTo(405,140);

    //verb modifier placeholder
    draw.fillText(modArray[1],395,120);
    draw.closePath();


    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();

}


function example6(){

    var sen6_JSON =
        {
            sentence: 'Sean plays soccer,rugby and golf',
            subject:{
                value:'Sean'
            },
            verb:{
                value:'plays',
                modifiers:[
                    {
                        type:'conjunction',
                        value:'and',
                        modifiers:[
                            {
                                type:'object',
                                value:'soccer'
                            },
                            {
                                type:'object',
                                value:'rugby'
                            },
                            {
                                type:'object',
                                value:'golf'
                            }
                        ]
                    }
                ]
            }
        };

    var subject = sen6_JSON["subject"].value;

    var verb = sen6_JSON["verb"].value;

    var conjunction = sen6_JSON["verb"].modifiers[0].value;

    var typeArr = [], valueArr = [];
    for(var i=0; i<sen6_JSON["verb"].modifiers.length; i++){
        if(sen6_JSON["verb"].modifiers[0].type){typeArr.push(sen6_JSON["verb"].modifiers[0].type)}
        if(sen6_JSON["verb"].modifiers[0].value){valueArr.push(sen6_JSON["verb"].modifiers[0].value)}
        if(sen6_JSON["verb"].modifiers[0].modifiers){modRecursive(sen6_JSON["verb"].modifiers[0].modifiers,typeArr,valueArr)}
    }

    var conjunctionMod = [];
    for(var j=0; i<valueArr.length; i++)
    {
        conjunctionMod.push(valueArr[j]);
    }

    drawTree6(subject, verb, conjunction, conjunctionMod);

}

function drawTree6(subject, verb, conjunction, conjunctionMod){

    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');

    draw.clearRect(0, 0, canvas.width, canvas.height);

    draw.font = "17px Arial";

    //subject-verb relationship
    drawSubjectVerb(subject,verb);

    draw.beginPath();
    draw.moveTo(430,100);
    draw.lineTo(430,70);
    //first object
    draw.moveTo(430,100);
    draw.lineTo(440,100);
    draw.lineTo(480,60);
    draw.lineTo(570,60);
    draw.fillText(conjunctionMod[1],510,50);

    //second object
    draw.moveTo(440,100);
    draw.lineTo(480,140);
    draw.lineTo(570,140);
    draw.fillText(conjunctionMod[2],510,90);
    //third object
    draw.moveTo(480,100);
    draw.lineTo(570,100);
    draw.moveTo(570,100);
    draw.fillText(conjunctionMod[3],510,130);

    draw.closePath();


    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();

    /*draw.beginPath();
    draw.setLineDash([5, 4]);
    draw.moveTo(480,60);
    draw.lineTo(480,140);
    draw.closePath();
    draw.fillText(conjunction,450,105);
    draw.stroke();*/


}

function drawSubjectVerb(sub, verb){
    var canvas = document.getElementById('displayCanvas');
    var draw = canvas.getContext('2d');
    draw.beginPath();
    draw.moveTo(70,100);
    draw.lineTo(250,100);
    draw.lineTo(250,70);
    draw.moveTo(250,100);
    draw.lineTo(250,130);
    draw.moveTo(250,100);
    draw.lineTo(430,100);
    draw.closePath();
    draw.lineWidth = 2;
    draw.strokeStyle = 'black';
    draw.stroke();
    //subject placeholder
    draw.fillText(sub,135,90);
    //verb placeholder
    draw.fillText(verb,315,90);

}