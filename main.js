function toggleDetail(e) {
    const target = $(e.target)
    // const di js artinya tidak boleh melakukan assigment
    // ulang terhadap variable yang sama, tapii, boleh melakukan
    // mutasi pada value variable tersebut

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
        // pernyataan if adalah pernyataan kontrol utama yang memungkinkan
        // javascript untuk membuat keputusan dan melaksanakan pernyataan kondisional.
    } else {
        $(target).html("Less Info").addClass("active")
    }

    const item = $(target).parents(".about-exp-item");
    const detail = $(item).children(".about-exp-item-detail");
    $(detail).slideToggle();
}

function onFormSubmit(e) {
    // fungsi adalah blok kode yang dapat dipanggil atau dijalankan secara berulang 
    // dan dapat dijalankan secara berulang, dan dapat mengembalikan nilai atau
    // melakukan tugas tertentu di dalam program
    e.preventDefault();
    const email = $("#inp_email");
    const subject = $("#inp_subject");
    const message = $("#inp_message");
    
    if(!$(email).val()) {
        alert("Email is required");
    } else if (!$(subject).val()) {
        alert("Subject is required");
        // pernyataan else if digunakan untuk mengontrol
        // percabangan kodisional
    } else if (!$(message).val()) {
        alert("Message is required");
    } else {
        alert("Form Submitted");
        $(email).val("");
        $(subject).val("");
        $(message).val("");
    }

}
// finding html elements 
// 1. document.getElementById(id)
// 2. document.getElementByTagNmane(TagName)
// 3. document.getElementByClassName(classname)
// 4. document.querySelector(id|classname|tagname)