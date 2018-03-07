function marks_Sheet() {
    console.log(document.getElementById('eng_Marks'));
    radio = document.querySelector('input[name="radio"]:checked');
    dropDown = document.getElementById('dropDown');

    marksSheet = {
        name: document.getElementById('name').value,
        fatherName: document.getElementById('fatherName').value,
        studentId: document.getElementById('studentId').value,
        cmsId: document.getElementById('cms').value,
        radioBtn: radio.value,
        list: dropDown.options[dropDown.selectedIndex].value,
        mathMarks: document.getElementById('math_Marks').value,
        engMarks: document.getElementById('eng_Marks').value,
        sciMarks: document.getElementById('sci_Marks').value,
        compMarks: document.getElementById('comp_Marks').value,
        gkMarks: document.getElementById('gk_Marks').value
    };
    localStorage.setItem('marksSheet', JSON.stringify(marksSheet));
    window.location.assign('about.html');
}