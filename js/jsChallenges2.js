document.querySelector('#sameAddress').addEventListener('click',function() {
    if(this.checked) {
        document.getElementById('home').value = document.getElementById('bill').value;
    }
    else {
        document.getElementById('home').value = '';
    }

});