    console.log("get_data");
    let obj=JSON.parse(localStorage.getItem('marksSheet'));
    document.getElementById('name').innerHTML=obj.name;
    document.getElementById('father_Name').innerHTML=obj.fatherName;
    document.getElementById('st_Id').innerHTML=obj.studentId;
    document.getElementById('cms').innerHTML=obj.cmsId;
    document.getElementById('courses').innerHTML=obj.radioBtn;
    document.getElementById('insitute').innerHTML=obj.list;
    document.getElementById('math').innerHTML=obj.mathMarks;
    document.getElementById('eng').innerHTML=obj.engMarks;
    document.getElementById('comp').innerHTML=obj.compMarks;
    document.getElementById('sci').innerHTML=obj.sciMarks;
    document.getElementById('gk').innerHTML=obj.gkMarks;
    total=parseInt(obj.mathMarks)+parseInt(obj.engMarks)+parseInt(obj.compMarks)+parseInt(obj.sciMarks)+parseInt(obj.gkMarks);
    percentage=(total/document.getElementById('total_Marks').innerHTML)*100;
    document.getElementById('obtained_Marks').innerHTML=total;
    document.getElementById('percentage').innerHTML=percentage;
   /* console.log(percentage); 
   if(percentage<=50.0)
    {
        document.getElementById('status').innerHTML='Pass';
    } */
    
    switch(true)
    {
        
        case percentage===50.0:
        console.log('in switch')
        document.getElementById('status').innerHTML='Pass';
        document.getElementById('division').innerHTML='D';
        break;
        case percentage>50.0 && percentage<60.0:
        document.getElementById('status').innerHTML='Pass';
        document.getElementById('division').innerHTML='C';
        break;
        case percentage>60.0 && percentage<70.0:
        document.getElementById('status').innerHTML='Pass';
        document.getElementById('division').innerHTML='B';
        break;
        case percentage>70.0 && percentage<80.0:
        document.getElementById('status').innerHTML='Pass';
        document.getElementById('division').innerHTML='A';
        break;
        case percentage>80 && percentage<=100:
        document.getElementById('status').innerHTML='Pass';
        document.getElementById('division').innerHTML='A+';
        break;
        default:
        document.getElementById('status').innerHTML='Fail';
        document.getElementById('division').innerHTML='F';
        break;

    }
