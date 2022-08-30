Teams = []
Number_of_Teams = 5
for(i=1; i<=Number_of_Teams; i++){
    Teams.push("Team" + i)
}
console.log('Teams:',Teams)
slots = ['slot1', 'slot2'] 
Obj={}
array = []
count=0
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
for(i=0;i<Teams.length;i++){
    // console.log(i)
    for(j=i+1;j<Teams.length;j++){
        count++
        array.push([Teams[i] , Teams[j]])
    }
}

console.log('List of Matches:',array)
console.log('No. of Matches:',count)

console.log("-----------------------------------------------------------------------------------------------------------------------------------------")

function shuffle(array){                                                 // Shuffle Function
    for(i in array)
    return array.sort(() => Math.random() - 0.5)
}
shuffle(array)
console.log('Shuffled:', array)

// array.splice(1,0,Teams.pop())
// console.log(array)

function fixingInObject(array){                                             // Fixing the list of matches in Object
    // shuffle(array)
    count=1
    for(k in array){

        Obj[`Match${count}`]= array[k]
        
        count++
    }
    return Obj
}
fixingInObject(array)
console.log('Obj:',Obj)

array1=[]
array1.push(array[0])
// console.log(array1)

array2=[]
array2.push(array[0])
// console.log(array2)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Generating Unique ID for every Match

function generatingID(Obj){
    
}



// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Function for Finalized Schedule
Schedule2=[]
Schedule3=[]
if(Teams.length>4){
    function comparingWithTeams(array1){
        for(l=0;l<array.length;l++){
                for(m of array){
                    if(!(array1.includes(m))){
                        if((array1[array1.length-1][0] != m[0]) && (array1[array1.length-1][1] != m[0]) && (array1[array1.length-1][0] != m[1]) && (array1[array1.length-1][1] != m[1])){
                            array1.push(m);
                        }
                    }   
        }}
        return array1
    }
    temp=comparingWithTeams(array1)
    // Schedule2=[];
    for(i in temp){
        Schedule2.push(temp[i][0]+'vs'+temp[i][1])
    } 
    console.log('Finalized Schedule',Schedule2);
}


else if(Teams.length<=4){
    function checkingDiagonal(array2){
        for(n=0; n<array.length; n++){
            for(p of array){
                if(!(array2.includes(p))){
                    if((array2[array2.length-1][1] != p[1]) && (array2[array2.length-1][0] != p[1]) && (array2[array2.length-1][0] != p[0])/* && (array2[array2.length-1][1] != p[0]) */){
                        array2.push(p);
                    }
                }
            }}
            return array2
    }
    temp1 = checkingDiagonal(array2)
    // Schedule3 = []
    for(q in temp1){
        Schedule3.push(temp1[q][0] + 'vs' + temp1[q][1])
    }
    console.log('Finalized Schedule',Schedule3);
}

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Dividing the Finalized schedule into odd and even, based on index

// Final Schedule for more than 4 Teams
if(Teams.length > 4){
oddTeams=[]
evenTeams=[]
for(i in Schedule2){
    if(i%2==1){
        oddTeams.push(Schedule2[i])
        // console.log(oddTeams,'oddTeams');
    }else if(i%2==0){
        evenTeams.push(Schedule2[i])
        // console.log(evenTeams,'evenTeams')
    }
}

if(oddTeams.length%2!=0){
    oddTeams.push("noMatch")
}
console.log("--------------------------------------------------------------------------------------------------------------------------------------------")

// Date Function

Days  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

s=new Date('2022-08-20')

if(Teams.length%2 != 0){
    Teams.push("None")
}

// -----------------------------------------------------------------------------------------------------------------------------------------------

var d = new Date(s)
var date1 = new Date()
var date2 = new Date()
// ------------------------------------------------------------------------------------------------------------------------------------------------
date=[]                                                                            // Day
for (let i = 0; i <= 6; i++) {
    if (d.getDay() + i == 6) {
        date1.setDate(d.getDate() + i + 1)
        console.log(date1.setDate(d.getDate() + i + 1))
        date2.setDate(date1.getDate() - 1)
    }
}
// console.log(date1);
// console.log(date2);
// ----------------------------------------------------------------------------------------------------------------------------------------------

day=[]                                                                          // Date
var dt1 = new Date(date1);
var dt2 = new Date(date2)
for (a = 0; a<Schedule2.length; a++) {
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
Schedule = []                                                                // Final Schedule
match_No=1
for (b = 0; b<Schedule2.length/2; b = b + 1) {
    Obj2 = {}
    d = b
    Obj2["Date"] = date[count]
    Obj2["Day"]  = day[count]

    Obj2["Slot_no"]=1
    Obj2["Match_No"] =match_No
    match_No++
    Obj2["Morning_Batch"] =evenTeams[b]
    // Obj2["Match_Id"] = evenTeams[b].substring(0,5)
    // if(!(oddTeams[b]=="noMatch")){
        Obj2["Slot_No"]=2
        Obj2["Match_No"] = match_No
        match_No++
        Obj2["Evening_Batch"] = oddTeams[b]
        // Obj2["Match_id"] = "Team"+date[count]
    count++
    Schedule.push(Obj2)
}
console.log('Schedule:',Schedule)
}

// Final Schedule when There are Less Than (or) equal to 4 Teams
else if(Teams.length <= 4){
    oddTeams1  = []
    evenTeams1 = []
    for(i in Schedule3){
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
    Days1  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    ss=new Date('2022-08-20')

    if(Teams.length%2 != 0){
        Teams.push("None")
    }

    // -----------------------------------------------------------------------------------------------------------------------------------------------

    var d = new Date(ss)
    var date1 = new Date()
    var date2 = new Date()
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
    var dt1 = new Date(date1);
    var dt2 = new Date(date2)
    for (a = 0; a<Schedule3.length; a++) {
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
    Match_No=1
    for (b = 0; b<Schedule3.length/2; b = b + 1) {
        Obj2 = {}
        d = b
        Obj2["Date"] = date[count]
        Obj2["Day"]  = day[count]

        Obj2["Slot_no"]=1
        Obj2["Match_No"] =Match_No
        Match_No++
        Obj2["Morning_Batch"] =evenTeams1[b]
        Obj2["Match_id"] = evenTeams1[b][0] + date[count]
        // if(!(oddTeams[b]=="noMatch")){
            Obj2["Slot_No"]=2
            Obj2["Match_No"] = Match_No
            Match_No++
            Obj2["Evening_Batch"] = oddTeams1[b]
            Obj2["Match_Id"] = "team" + date[count]
        count++
        Schedule.push(Obj2)
    }
    // console.log(oddteams1,'lsgs')
    console.log('Schedule:',Schedule)
    // console.log(Schedule[0].Match_id,'gfg')
   
}
// console.log('Schdeule:',Schdeule)



