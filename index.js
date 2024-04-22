function showContents(id) {
    if (id == 'summaryContent1') {
        showContent.content1 = !showContent.content1;
        document.getElementById("content1").style.display = showContent.content1 ? "block" : "none";
        document.getElementById("icon1").style.display = showContent.content1 ? "block" : "none";
    }
    else if (id == 'summaryContent2') {
        showContent.content2 = !showContent.content2;
        document.getElementById("content2").style.display = showContent.content2 ? "block" : "none";
    }
    else if (id == 'summaryContent3') {
        showContent.content3 = !showContent.content3;
        document.getElementById("content3").style.display = showContent.content3 ? "block" : "none";
    }
}

var showContent = {
    content1: false,
    content2: false,
    content3: false
};