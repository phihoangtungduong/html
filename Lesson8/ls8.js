var titleTag = document.getElementById('title_id')
var contentTag = document.getElementById('content_id')
var imageTag = document.getElementById('img_id')

function saveData() {
	let title1 = titleTag.value
	let content1 = contentTag.value

	if(title1 == "" || content1 == "") {
		alert('Title | Content khong duoc de trong')
		return
	}

	alert('Tao bai viet thanh cong')
}

function resetData() {
	titleTag.value = ""
	contentTag.value = ""
    imageTag.value = ""
}