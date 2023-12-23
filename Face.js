var text = "Mercedes - окунитесь в мир роскоши"; 
var delay = 129; 
var elem = document.getElementById("result"); 

function print_text (text, elem, delay) {
		
	if(text.length > 0) {
		
		elem.innerHTML += text[0];
			
		setTimeout(
			
			function() {
				
					print_text(text.slice(1), elem, delay);  
					
            }, delay
				
		);
			
	}
		
}

print_text(text, elem, delay);