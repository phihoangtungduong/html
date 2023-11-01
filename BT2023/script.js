var productTag = document.getElementById('product')
var quantityTag = document.getElementById('quantity')
var unitPriceTag = document.getElementById('unit_price')
var totalPriceTag = document.getElementById('total_price')
var fullnameTag = document.getElementById('fullname')
var shippingAddressTag = document.getElementById('shipping_address')
var creditCardTag = document.getElementById('credit_card')
var num1Tag = document.getElementById('card-number-1')
var num2Tag = document.getElementById('card-number-2')
var num3Tag = document.getElementById('card-number-3')
var num4Tag = document.getElementById('card-number-4')

// loadData();

function changeProduct() {
	let product = productTag.value
	if(product == "") {
		quantityTag.disabled = true
		unitPriceTag.value = ""
		totalPriceTag.value = ""
		quantityTag.value = ""
	} else {
		quantityTag.disabled = false
		unitPriceTag.value = product
		totalPriceTag.value = product * quantityTag.value
	}
}

function calTotalPrice() {
	totalPriceTag.value = productTag.value * quantityTag.value
}

function updateStatusNumber() {
	let creditCard = creditCardTag.value
	if(creditCard == "") {
		num1Tag.disabled = true
		num2Tag.disabled = true
		num3Tag.disabled = true
		num4Tag.disabled = true
	} else {
		num1Tag.disabled = false
		num2Tag.disabled = false
		num3Tag.disabled = false
		num4Tag.disabled = false
	}
}

function saveData() {
	let product = productTag.value
	let unit_price = unitPriceTag.value
	let quantity = quantityTag.value
	let total_price = totalPriceTag.value
	let fullname = fullnameTag.value
	let shipping_address = shippingAddressTag.value
	let credit_card = creditCardTag.value
	let num1 = num1Tag.value
	let num2 = num2Tag.value
	let num3 = num3Tag.value
	let num4 = num4Tag.value

	localStorage.setItem('product', product)
	localStorage.setItem('unit_price', unit_price)
	localStorage.setItem('quantity', quantity)
	localStorage.setItem('total_price', total_price)
	localStorage.setItem('fullname', fullname)
	localStorage.setItem('shipping_address', shipping_address)
	localStorage.setItem('credit_card', credit_card)
	localStorage.setItem('num1', num1)
	localStorage.setItem('num2', num2)
	localStorage.setItem('num3', num3)
	localStorage.setItem('num4', num4)

	return true
}

function loadData() {
	productTag.value = localStorage.getItem('product')
	unitPriceTag.value = localStorage.getItem('unit_price')
	quantityTag.value = localStorage.getItem('quantity')
	totalPriceTag.value = localStorage.getItem('total_price')
	fullnameTag.value = localStorage.getItem('fullname')
	shippingAddressTag.value = localStorage.getItem('shipping_address')
	creditCardTag.value = localStorage.getItem('credit_card')
	num1Tag.value = localStorage.getItem('num1')
	num2Tag.value = localStorage.getItem('num2')
	num3Tag.value = localStorage.getItem('num3')
	num4Tag.value = localStorage.getItem('num4')
}

function deleteData() {
	localStorage.removeItem('product')
	localStorage.removeItem('unit_price')
	localStorage.removeItem('quantity')
	localStorage.removeItem('total_price')
	localStorage.removeItem('fullname')
	localStorage.removeItem('shipping_address')
	localStorage.removeItem('credit_card')
	localStorage.removeItem('num1')
	localStorage.removeItem('num2')
	localStorage.removeItem('num3')
	localStorage.removeItem('num4')
}