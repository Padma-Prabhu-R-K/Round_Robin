let Teams:any[] = ['Team1','Team2','Team3','Team4','Team5','Team6','Team7']
let slots:any[] = ['slot1', 'slot2'] 
let Obj:any={}
var array:any[] = []
var count:any=0
console.log('Teams:',Teams)
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
for(let i=0;i<Teams.length;i++){
    // console.log(i)
    for(let j=i+1;j<Teams.length;j++){
        count++
        array.push([Teams[i] , Teams[j]])
    }
}

console.log('List of Matches:',array)
console.log('No. of Matches:',count)

console.log("-----------------------------------------------------------------------------------------------------------------------------------------")

function shuffle(array:any){                                                 // Shuffle Function
    for(let i in array)
    return array.sort(() => Math.random() - 0.5)
}
shuffle(array)
console.log('Shuffled:', array)

// array.splice(1,0,Teams.pop())
// console.log(array)


function fixingInObject(array:any){                                             // Fixing the list of matches in Object
    // shuffle(array)
    count=1
    for(let k in array){
        Obj[`Match${count}`] = array[k]
        
        count++
    }
    return Obj
}
fixingInObject(array)

var array1:any[]=[]
array1.push(array[0])
console.log(array1)

var array2:any[]=[]
array2.push(array[0])
console.log(array2)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Function for Finalized Schedule
var Schedule2:any[]=[]
var Schedule3:any[]=[]
if(Teams.length>4){
    function comparingWithTeams(array1:any){
        for(let l=0;l<array.length;l++){
                for(let m of array){
                    if(!(array1.includes(m))){
                        if((array1[array1.length-1][0] != m[0]) && (array1[array1.length-1][1] != m[0]) && (array1[array1.length-1][1] != m[1]) && (array1[array1.length-1][0] != m[1])){
                            array1.push(m);
                        }
                    }   
        }}
        return array1
    }
    let temp=comparingWithTeams(array1)
    // Schedule2=[];
    for(let i in temp){
        Schedule2.push(temp[i][0]+'vs'+temp[i][1])
    } 
    console.log('Finalized Schedule',Schedule2);
}


else if(Teams.length<=4){
    function checkingDiagonal(array2:any){
        for(let n=0; n<array.length; n++){
            for(let p of array){
                if(!(array2.includes(p))){
                    if((array2[array2.length-1][1] != p[1]) && (array2[array2.length-1][0] != p[1]) && (array2[array2.length-1][0] != p[0])/* && (array2[array2.length-1][1] != p[0]) */){
                        array2.push(p);
                    }
                }
            }}
            return array2
    }
    var temp1 = checkingDiagonal(array2)
    // Schedule3 = []
    for(let q in temp1){
        Schedule3.push(temp1[q][0] + 'vs' + temp1[q][1])
    }
    console.log('Finalized Schedule',Schedule3);
}

// Schedule = []
// Schedule.push(Schedule2,Schedule3)
// ---------------------------------------------------------------------------------------------------------------------------------------------
// Dividing the Finalized schedule into odd and even, based on index

// Final Schedule for more than 4 Teams
if(Teams.length > 4){
let oddTeams=[]
let evenTeams=[]
for(let i=0; i<Schedule2.length; i++){
    if(i%2==1){
        oddTeams.push(Schedule2[i])
    }else if(i%2==0){
        evenTeams.push(Schedule2[i])
    }
}

if(oddTeams.length%2!=0){
    oddTeams.push("noMatch")
}
console.log("--------------------------------------------------------------------------------------------------------------------------------------------")

// Date Function

let Days:any[]  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let s=new Date('2022-08-20')

if(Teams.length%2 != 0){
    Teams.push("None")
}

// -----------------------------------------------------------------------------------------------------------------------------------------------

var d = new Date(s)
var date1:any = new Date()
var date2:any = new Date()
// ------------------------------------------------------------------------------------------------------------------------------------------------
var date:any[]=[]                                                                            // Day
for (let i = 0; i <= 6; i++) {
    if (d.getDay() + i == 6) {
        date1.setDate(d.getDate() + i + 1)
        date2.setDate(date1.getDate() - 1)
    }
}
// console.log(date1);
// console.log(date2);
// ----------------------------------------------------------------------------------------------------------------------------------------------

var day:any[]=[]                                                                          // Date
var dt1:any = new Date(date1);
var dt2:any = new Date(date2)
for (let a = 0; a<Schedule2.length; a++) {
    date.push((new Date(dt2)).toString().substring(4, 15))
    date.push((new Date(dt1)).toString().substring(4, 15))
    day.push(Days[dt2.getDay(date2)])
    day.push(Days[dt1.getDay(date1)])
    dt1.setDate(dt1.getDate() + 7)
    dt2.setDate(dt2.getDate() + 7)
}
// console.log('Date:',date)
// console.log('Day:',day)
// -----------------------------------------------------------------------------------------------------------------------------------------------
count = 0
var Schedule:any[] = []                                                                // Final Schedule
let match_No=1
for (let b = 0; b<Schedule2.length/2; b = b + 1) {
    var Obj2:any = {}
    let d = b
    Obj2["Date"] = date[count]
    Obj2["Day"]  = day[count]

    Obj2["Slot_no"]=1
    Obj2["Match_No"] =match_No
    match_No++
    Obj2["Morning_Batch"] =evenTeams[b]
    // if(!(oddTeams[b]=="noMatch")){
        Obj2["Slot_No"]=2
        Obj2["match_No"] = match_No
        match_No++
        Obj2["Evening_Batch"] = oddTeams[b]
    count++
    Schedule.push(Obj2)
}
console.log('Schedule:',Schedule)
}

// Final Schedule when the Thre are Less Than (or) equal to 4 Teams
else if(Teams.length <= 4){
    let oddTeams1:any[]  = []
    let evenTeams1:any[] = []
    for(let i=0;i<Schedule3.length;i++){
        if(i%2==1){
            oddTeams1.push(Schedule3[i])
        }else if(i%2==0){
            evenTeams1.push(Schedule3[i])
        }
    }

    if(oddTeams1.length%2!=0){
        oddTeams1.push("noMatch")
    }
    console.log("--------------------------------------------------------------------------------------------------------------------------------------------")
    // Date Function
    var Days1:any[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let ss=new Date('2022-08-20')

    if(Teams.length%2 != 0){
        Teams.push("None")
    }

    // -----------------------------------------------------------------------------------------------------------------------------------------------

    var d = new Date(ss)
    var date1:any = new Date()
    var date2:any = new Date()
    // ------------------------------------------------------------------------------------------------------------------------------------------------
    date=[]                                                                            // Day
    for (let i = 0; i <= 6; i++) {
        if (d.getDay() + i == 6) {
            date1.setDate(d.getDate() + i + 1)
            date2.setDate(date1.getDate() - 1)
        }
    }
    // console.log(date1);
    // console.log(date2);
    // ----------------------------------------------------------------------------------------------------------------------------------------------

    day=[]                                                                          // Date
    var dt1:any = new Date(date1);
    var dt2:any = new Date(date2)
    for (let a = 0; a<Schedule3.length; a++) {
        date.push((new Date(dt2)).toString().substring(4, 15))
        date.push((new Date(dt1)).toString().substring(4, 15))
        day.push(Days1[dt2.getDay(date2)])
        day.push(Days1[dt1.getDay(date1)])
        dt1.setDate(dt1.getDate() + 7)
        dt2.setDate(dt2.getDate() + 7)
    }
    // console.log('Date:',date)
    // console.log('Day:',day)
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    count = 0
    Schedule = []                                                                // Final Schedule
    let Match_No=1
    for (let b = 0; b<Schedule3.length/2; b = b + 1) {
        Obj2 = {}
        let  d = b
        Obj2["Date"] = date[count]
        Obj2["Day"]  = day[count]

        Obj2["Slot_no"]=1
        Obj2["Match_No"] =Match_No
        Match_No++
        Obj2["Morning_Batch"] =evenTeams1[b]
        // if(!(oddTeams[b]=="noMatch")){
            Obj2["Slot_No"]=2
            Obj2["match_No"] = Match_No
            Match_No++
            Obj2["Evening_Batch"] = oddTeams1[b]
        count++
        Schedule.push(Obj2)
    }
    console.log('Schedule:',Schedule)
}


// OUTPUT:

// Output for 4 Teams:

    // [LOG]: "List of Matches:",  [["Team1", "Team2"], ["Team1", "Team3"], ["Team1", "Team4"], ["Team2", "Team3"], ["Team2", "Team4"], ["Team3", "Team4"]] 
    // [LOG]: "No. of Matches:",  6 
    // [LOG]: "-----------------------------------------------------------------------------------------------------------------------------------------" 
    // [LOG]: "Shuffled:",  [["Team1", "Team4"], ["Team3", "Team4"], ["Team1", "Team3"], ["Team2", "Team3"], ["Team2", "Team4"], ["Team1", "Team2"]] 
    // [LOG]: [["Team1", "Team4"]] 
    // [LOG]: [["Team1", "Team4"]] 
    // [LOG]: "Finalized Schedule",  ["Team1vsTeam4", "Team2vsTeam3", "Team3vsTeam4", "Team1vsTeam2", "Team2vsTeam4", "Team1vsTeam3"] 
    // [LOG]: "--------------------------------------------------------------------------------------------------------------------------------------------" 
    // [LOG]: "Schedule:",  [{
    //   "Date": "Aug 20 2022",
    //   "Day": "Saturday",
    //   "Slot_no": 1,
    //   "Match_No": 1,
    //   "Morning_Batch": "Team1vsTeam4",
    //   "Slot_No": 2,
    //   "match_No": 2,
    //   "Evening_Batch": "Team2vsTeam3"
    // }, {
    //   "Date": "Aug 21 2022",
    //   "Day": "Sunday",
    //   "Slot_no": 1,
    //   "Match_No": 3,
    //   "Morning_Batch": "Team3vsTeam4",
    //   "Slot_No": 2,
    //   "match_No": 4,
    //   "Evening_Batch": "Team1vsTeam2"
    // }, {
    //   "Date": "Aug 27 2022",
    //   "Day": "Saturday",
    //   "Slot_no": 1,
    //   "Match_No": 5,
    //   "Morning_Batch": "Team2vsTeam4",
    //   "Slot_No": 2,
    //   "match_No": 6,
    //   "Evening_Batch": "Team1vsTeam3"
    // }] 


// Output for 5 Teams:

    // [LOG]: "Teams:",  ["Team1", "Team2", "Team3", "Team4", "Team5"] 
    // [LOG]: "------------------------------------------------------------------------------------------------------------------------------------------" 
    // [LOG]: "List of Matches:",  [["Team1", "Team2"], ["Team1", "Team3"], ["Team1", "Team4"], ["Team1", "Team5"], ["Team2", "Team3"], ["Team2", "Team4"], ["Team2", "Team5"], ["Team3", "Team4"], ["Team3", "Team5"], ["Team4", "Team5"]] 
    // [LOG]: "No. of Matches:",  10 
    // [LOG]: "-----------------------------------------------------------------------------------------------------------------------------------------" 
    // [LOG]: "Shuffled:",  [["Team3", "Team5"], ["Team1", "Team2"], ["Team1", "Team3"], ["Team1", "Team4"], ["Team4", "Team5"], ["Team2", "Team5"], ["Team1", "Team5"], ["Team3", "Team4"], ["Team2", "Team3"], ["Team2", "Team4"]] 
    // [LOG]: [["Team3", "Team5"]] 
    // [LOG]: [["Team3", "Team5"]] 
    // [LOG]: "Finalized Schedule",  ["Team3vsTeam5", "Team1vsTeam2", "Team4vsTeam5", "Team2vsTeam3", "Team1vsTeam4", "Team2vsTeam5", "Team3vsTeam4", "Team1vsTeam5", "Team2vsTeam4", "Team1vsTeam3"] 
    // [LOG]: "--------------------------------------------------------------------------------------------------------------------------------------------" 
    // [LOG]: "Schedule:",  [{
    // "Date": "Aug 20 2022",
    // "Day": "Saturday",
    // "Slot_no": 1,
    // "Match_No": 1,
    // "Morning_Batch": "Team3vsTeam5",
    // "Slot_No": 2,
    // "match_No": 2,
    // "Evening_Batch": "Team1vsTeam2"
    // }, {
    // "Date": "Aug 21 2022",
    // "Day": "Sunday",
    // "Slot_no": 1,
    // "Match_No": 3,
    // "Morning_Batch": "Team4vsTeam5",
    // "Slot_No": 2,
    // "match_No": 4,
    // "Evening_Batch": "Team2vsTeam3"
    // }, {
    // "Date": "Aug 27 2022",
    // "Day": "Saturday",
    // "Slot_no": 1,
    // "Match_No": 5,
    // "Morning_Batch": "Team1vsTeam4",
    // "Slot_No": 2,
    // "match_No": 6,
    // "Evening_Batch": "Team2vsTeam5"
    // }, {
    // "Date": "Aug 28 2022",
    // "Day": "Sunday",
    // "Slot_no": 1,
    // "Match_No": 7,
    // "Morning_Batch": "Team3vsTeam4",
    // "Slot_No": 2,
    // "match_No": 8,
    // "Evening_Batch": "Team1vsTeam5"
    // }, {
    // "Date": "Sep 03 2022",
    // "Day": "Saturday",
    // "Slot_no": 1,
    // "Match_No": 9,
    // "Morning_Batch": "Team2vsTeam4",
    // "Slot_No": 2,
    // "match_No": 10,
    // "Evening_Batch": "Team1vsTeam3"
    // }]
    

// Output for 7 Teams

    // [LOG]: "Teams:",  ["Team1", "Team2", "Team3", "Team4", "Team5", "Team6", "Team7"] 
    // [LOG]: "------------------------------------------------------------------------------------------------------------------------------------------" 
    // [LOG]: "List of Matches:",  [["Team1", "Team2"], ["Team1", "Team3"], ["Team1", "Team4"], ["Team1", "Team5"], ["Team1", "Team6"], ["Team1", "Team7"], ["Team2", "Team3"], ["Team2", "Team4"], ["Team2", "Team5"], ["Team2", "Team6"], ["Team2", "Team7"], ["Team3", "Team4"], ["Team3", "Team5"], ["Team3", "Team6"], ["Team3", "Team7"], ["Team4", "Team5"], ["Team4", "Team6"], ["Team4", "Team7"], ["Team5", "Team6"], ["Team5", "Team7"], ["Team6", "Team7"]] 
    // [LOG]: "No. of Matches:",  21 
    // [LOG]: "-----------------------------------------------------------------------------------------------------------------------------------------" 
    // [LOG]: "Shuffled:",  [["Team1", "Team7"], ["Team1", "Team2"], ["Team1", "Team5"], ["Team2", "Team7"], ["Team4", "Team5"], ["Team2", "Team6"], ["Team1", "Team3"], ["Team5", "Team7"], ["Team4", "Team6"], ["Team2", "Team5"], ["Team3", "Team6"], ["Team3", "Team5"], ["Team3", "Team7"], ["Team3", "Team4"], ["Team2", "Team4"], ["Team1", "Team4"], ["Team2", "Team3"], ["Team6", "Team7"], ["Team4", "Team7"], ["Team5", "Team6"], ["Team1", "Team6"]] 
    // [LOG]: [["Team1", "Team7"]] 
    // [LOG]: [["Team1", "Team7"]] 
    // [LOG]: "Finalized Schedule",  ["Team1vsTeam7", "Team4vsTeam5", "Team2vsTeam6", "Team1vsTeam3", "Team5vsTeam7", "Team4vsTeam6", "Team2vsTeam5", "Team3vsTeam6", "Team2vsTeam4", "Team6vsTeam7", "Team1vsTeam2", "Team3vsTeam5", "Team1vsTeam4", "Team2vsTeam3", "Team4vsTeam7", "Team5vsTeam6", "Team2vsTeam7", "Team3vsTeam4", "Team1vsTeam6", "Team3vsTeam7", "Team1vsTeam5"] 
    // [LOG]: "--------------------------------------------------------------------------------------------------------------------------------------------" 
    // [LOG]: "Schedule:",  [{
    // "Date": "Aug 20 2022",
    // "Day": "Saturday",
    // "Slot_no": 1,
    // "Match_No": 1,
    // "Morning_Batch": "Team1vsTeam7",
    // "Slot_No": 2,
    // "match_No": 2,
    // "Evening_Batch": "Team4vsTeam5"
    // }, {
    // "Date": "Aug 21 2022",
    // "Day": "Sunday",
    // "Slot_no": 1,
    // "Match_No": 3,
    // "Morning_Batch": "Team2vsTeam6",
    // "Slot_No": 2,
    // "match_No": 4,
    // "Evening_Batch": "Team1vsTeam3"
    // }, {
    // "Date": "Aug 27 2022",
    // "Day": "Saturday",
    // "Slot_no": 1,
    // "Match_No": 5,
    // "Morning_Batch": "Team5vsTeam7",
    // "Slot_No": 2,
    // "match_No": 6,
    // "Evening_Batch": "Team4vsTeam6"
    // }, {
    // "Date": "Aug 28 2022",
    // "Day": "Sunday",
    // "Slot_no": 1,
    // "Match_No": 7,
    // "Morning_Batch": "Team2vsTeam5",
    // "Slot_No": 2,
    // "match_No": 8,
    // "Evening_Batch": "Team3vsTeam6"
    // }, {
    // "Date": "Sep 03 2022",
    // "Day": "Saturday",
    // "Slot_no": 1,
    // "Match_No": 9,
    // "Morning_Batch": "Team2vsTeam4",
    // "Slot_No": 2,
    // "match_No": 10,
    // "Evening_Batch": "Team6vsTeam7"
    // }, {
    // "Date": "Sep 04 2022",
    // "Day": "Sunday",
    // "Slot_no": 1,
    // "Match_No": 11,
    // "Morning_Batch": "Team1vsTeam2",
    // "Slot_No": 2,
    // "match_No": 12,
    // "Evening_Batch": "Team3vsTeam5"
    // }, {
    // "Date": "Sep 10 2022",
    // "Day": "Saturday",
    // "Slot_no": 1,
    // "Match_No": 13,
    // "Morning_Batch": "Team1vsTeam4",
    // "Slot_No": 2,
    // "match_No": 14,
    // "Evening_Batch": "Team2vsTeam3"
    // }, {
    // "Date": "Sep 11 2022",
    // "Day": "Sunday",
    // "Slot_no": 1,
    // "Match_No": 15,
    // "Morning_Batch": "Team4vsTeam7",
    // "Slot_No": 2,
    // "match_No": 16,
    // "Evening_Batch": "Team5vsTeam6"
    // }, {
    // "Date": "Sep 17 2022",
    // "Day": "Saturday",
    // "Slot_no": 1,
    // "Match_No": 17,
    // "Morning_Batch": "Team2vsTeam7",
    // "Slot_No": 2,
    // "match_No": 18,
    // "Evening_Batch": "Team3vsTeam4"
    // }, {
    // "Date": "Sep 18 2022",
    // "Day": "Sunday",
    // "Slot_no": 1,
    // "Match_No": 19,
    // "Morning_Batch": "Team1vsTeam6",
    // "Slot_No": 2,
    // "match_No": 20,
    // "Evening_Batch": "Team3vsTeam7"
    // }, {
    // "Date": "Sep 24 2022",
    // "Day": "Saturday",
    // "Slot_no": 1,
    // "Match_No": 21,
    // "Morning_Batch": "Team1vsTeam5",
    // "Slot_No": 2,
    // "match_No": 22,
    // "Evening_Batch": undefined
    // }] ,

    // [LOG]: "Teams:",  ["Team1", "Team2", "Team3", "Team4", "Team5", "Team6", "Team7"] 
    // [LOG]: "------------------------------------------------------------------------------------------------------------------------------------------" 
    // [LOG]: "List of Matches:",  [["Team1", "Team2"], ["Team1", "Team3"], ["Team1", "Team4"], ["Team1", "Team5"], ["Team1", "Team6"], ["Team1", "Team7"], ["Team2", "Team3"], ["Team2", "Team4"], ["Team2", "Team5"], ["Team2", "Team6"], ["Team2", "Team7"], ["Team3", "Team4"], ["Team3", "Team5"], ["Team3", "Team6"], ["Team3", "Team7"], ["Team4", "Team5"], ["Team4", "Team6"], ["Team4", "Team7"], ["Team5", "Team6"], ["Team5", "Team7"], ["Team6", "Team7"]] 
    // [LOG]: "No. of Matches:",  21 
    // [LOG]: "-----------------------------------------------------------------------------------------------------------------------------------------" 
    // [LOG]: "Shuffled:",  [["Team2", "Team6"], ["Team2", "Team7"], ["Team4", "Team5"], ["Team1", "Team7"], ["Team1", "Team2"], ["Team6", "Team7"], ["Team4", "Team6"], ["Team5", "Team7"], ["Team2", "Team5"], ["Team3", "Team4"], ["Team2", "Team3"], ["Team3", "Team5"], ["Team3", "Team6"], ["Team2", "Team4"], ["Team5", "Team6"], ["Team1", "Team3"], ["Team1", "Team6"], ["Team1", "Team4"], ["Team3", "Team7"], ["Team1", "Team5"], ["Team4", "Team7"]] 
    // [LOG]: [["Team2", "Team6"]] 
    // [LOG]: [["Team2", "Team6"]] 
    // [LOG]: "Finalized Schedule",  ["Team2vsTeam6", "Team4vsTeam5", "Team1vsTeam7", "Team4vsTeam6", "Team5vsTeam7", "Team3vsTeam4", "Team5vsTeam6", "Team1vsTeam3", "Team4vsTeam7", "Team1vsTeam2", "Team6vsTeam7", "Team2vsTeam5", "Team3vsTeam6", "Team2vsTeam4", "Team1vsTeam6", "Team3vsTeam7", "Team1vsTeam5", "Team2vsTeam7", "Team3vsTeam5", "Team1vsTeam4", "Team2vsTeam3"] 
    // [LOG]: "--------------------------------------------------------------------------------------------------------------------------------------------" 
    // [LOG]: "Schedule:",  [{
    // "Date": "Aug 20 2022",
    // "Day": "Saturday",
    // "Slot_no": 1,
    // "Match_No": 1,
    // "Morning_Batch": "Team2vsTeam6",
    // "Slot_No": 2,
    // "match_No": 2,
    // "Evening_Batch": "Team4vsTeam5"
    // }, {
    // "Date": "Aug 21 2022",
    // "Day": "Sunday",
    // "Slot_no": 1,
    // "Match_No": 3,
    // "Morning_Batch": "Team1vsTeam7",
    // "Slot_No": 2,
    // "match_No": 4,
    // "Evening_Batch": "Team4vsTeam6"
    // }, {
    // "Date": "Aug 27 2022",
    // "Day": "Saturday",
    // "Slot_no": 1,
    // "Match_No": 5,
    // "Morning_Batch": "Team5vsTeam7",
    // "Slot_No": 2,
    // "match_No": 6,
    // "Evening_Batch": "Team3vsTeam4"
    // }, {
    // "Date": "Aug 28 2022",
    // "Day": "Sunday",
    // "Slot_no": 1,
    // "Match_No": 7,
    // "Morning_Batch": "Team5vsTeam6",
    // "Slot_No": 2,
    // "match_No": 8,
    // "Evening_Batch": "Team1vsTeam3"
    // }, {
    // "Date": "Sep 03 2022",
    // "Day": "Saturday",
    // "Slot_no": 1,
    // "Match_No": 9,
    // "Morning_Batch": "Team4vsTeam7",
    // "Slot_No": 2,
    // "match_No": 10,
    // "Evening_Batch": "Team1vsTeam2"
    // }, {
    // "Date": "Sep 04 2022",
    // "Day": "Sunday",
    // "Slot_no": 1,
    // "Match_No": 11,
    // "Morning_Batch": "Team6vsTeam7",
    // "Slot_No": 2,
    // "match_No": 12,
    // "Evening_Batch": "Team2vsTeam5"
    // }, {
    // "Date": "Sep 10 2022",
    // "Day": "Saturday",
    // "Slot_no": 1,
    // "Match_No": 13,
    // "Morning_Batch": "Team3vsTeam6",
    // "Slot_No": 2,
    // "match_No": 14,
    // "Evening_Batch": "Team2vsTeam4"
    // }, {
    // "Date": "Sep 11 2022",
    // "Day": "Sunday",
    // "Slot_no": 1,
    // "Match_No": 15,
    // "Morning_Batch": "Team1vsTeam6",
    // "Slot_No": 2,
    // "match_No": 16,
    // "Evening_Batch": "Team3vsTeam7"
    // }, {
    // "Date": "Sep 17 2022",
    // "Day": "Saturday",
    // "Slot_no": 1,
    // "Match_No": 17,
    // "Morning_Batch": "Team1vsTeam5",
    // "Slot_No": 2,
    // "match_No": 18,
    // "Evening_Batch": "Team2vsTeam7"
    // }, {
    // "Date": "Sep 18 2022",
    // "Day": "Sunday",
    // "Slot_no": 1,
    // "Match_No": 19,
    // "Morning_Batch": "Team3vsTeam5",
    // "Slot_No": 2,
    // "match_No": 20,
    // "Evening_Batch": "Team1vsTeam4"
    // }, {
    // "Date": "Sep 24 2022",
    // "Day": "Saturday",
    // "Slot_no": 1,
    // "Match_No": 21,
    // "Morning_Batch": "Team2vsTeam3",
    // "Slot_No": 2,
    // "match_No": 22,
    // "Evening_Batch": undefined
    // }] 


