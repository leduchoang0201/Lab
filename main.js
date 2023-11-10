
function addSubject(){
    let monhoc = document.getElementById('name').value;
    let mamonhoc = document.getElementById('ID').value;
    let phonghoc = document.getElementById('class').value;
    let khu = document.getElementById('building').value;
    let ca = document.getElementById('lesson').value;
    let tenGV = document.getElementById('nameGV').value;
    if (monhoc && mamonhoc && phonghoc && khu && ca && tenGV) {
        let subject = localStorage.getItem('subject') ? JSON.parse(localStorage.getItem('subject')) : [];
        
        subject.push({
            name: monhoc,
            ID: mamonhoc,
            class: phonghoc,
            building: khu,
            lesson: ca,
            nameGV: tenGV
        });
        let tableContent = `<tr>
            <td>#</td>
            <td>Tên môn học</td>
            <td>Mã môn học</td>
            <td>Phòng</td>
            <td>Khu</td>
            <td>Ca</td>
            <td>Tên GV</td>
            <td>Chức năng</td>
        </tr>`;

    subject.forEach((subject, index) => {
        
        let STTsubject = index;
        index ++;
        tableContent += `<tr>
            <td>${index}</td>
            <td>${subject.name}</td>
            <td>${subject.ID}</td>
            <td>${subject.class}</td>
            <td>${subject.building}</td>
            <td>${subject.lesson}</td>
            <td>${subject.nameGV}</td>
            <td>
                <a href= '#' >Sửa</a> | <a href= '#' onclick='deleteSubject(${STTsubject})'>Xóa</a>
            </td>
        </tr>`
    });
    document.getElementById('list-subject').innerHTML = tableContent;
        
        localStorage.setItem('subject', JSON.stringify(subject));
        this.saveSubject();
        updateSubjectTable();
        document.getElementById("name").value = "";
        document.getElementById("ID").value = "";
        document.getElementById("class").value = "";
        document.getElementById("building").value = "";
        document.getElementById("lesson").value = "";
        document.getElementById("nameGV").value = "";
    }
}
function saveSubject(){
    let subject = localStorage.getItem('subject') ? JSON.parse(localStorage.getItem('subject')) : [];
    if(subject.lenght === 0 ){
        document.getElementById('list').style.display= 'none';
        return false;
    }
    document.getElementById('list').style.display= 'block';
   
}
function deleteSubject(STT){
    let subject = localStorage.getItem('subject') ? JSON.parse(localStorage.getItem('subject')) : [];
    subject.splice(STT,1);
    localStorage.setItem('subject', JSON.stringify(subject));
    saveSubject();
    updateSubjectTable();
}
function updateSubjectTable() {
    let subject = localStorage.getItem('subject') ? JSON.parse(localStorage.getItem('subject')) : [];
    let tableContent = `<tr>
        <td>#</td>
        <td>Tên môn học</td>
        <td>Mã môn học</td>
        <td>Phòng</td>
        <td>Khu</td>
        <td>Ca</td>
        <td>Tên GV</td>
        <td>Chức năng</td>
    </tr>`;

    subject.forEach((subject, index) => {
        let STTsubject = index;
        index++;
        tableContent += `<tr>
            <td>${index}</td>
            <td>${subject.name}</td>
            <td>${subject.ID}</td>
            <td>${subject.class}</td>
            <td>${subject.building}</td>
            <td>${subject.lesson}</td>
            <td>${subject.nameGV}</td>
            <td>
                <a href='#' onclick='editSubject(${STTsubject})'>Sửa</a> | <a href='#' onclick='deleteSubject(${STTsubject})'>Xóa</a>
            </td>
        </tr>`;
    });

    document.getElementById('list-subject').innerHTML = tableContent;
}
function editSubject(STT){
    let subject = localStorage.getItem('subject') ? JSON.parse(localStorage.getItem('subject')) : [];
    if (subject.length > 0) {
        document.getElementById('name').value = subject[STT].name;
        document.getElementById('ID').value = subject[STT].ID;
        document.getElementById('class').value = subject[STT].class;
        document.getElementById('building').value = subject[STT].building;
        document.getElementById('lesson').value = subject[STT].lesson;
        document.getElementById('nameGV').value = subject[STT].nameGV;
    }
    
}
function button(STT){
    let monhoc = document.getElementById('name').value;
    let mamonhoc = document.getElementById('ID').value;
    let phonghoc = document.getElementById('class').value;
    let khu = document.getElementById('building').value;
    let ca = document.getElementById('lesson').value;
    let tenGV = document.getElementById('nameGV').value;
    if (monhoc && mamonhoc && phonghoc && khu && ca && tenGV) {
        let subject = localStorage.getItem('subject') ? JSON.parse(localStorage.getItem('subject')) : [];
        
        subject.push({
            name: monhoc,
            ID: mamonhoc,
            class: phonghoc,
            building: khu,
            lesson: ca,
            nameGV: tenGV
        });
        localStorage.setItem('subject', JSON.stringify(subject));
        this.saveSubject();
        updateSubjectTable();
    }
    let subject = localStorage.getItem('subject') ? JSON.parse(localStorage.getItem('subject')) : [];
}


function initPage() {
    updateSubjectTable();
    saveSubject();
}
window.addEventListener('load', initPage);