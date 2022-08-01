		var buttonEncryp = document.querySelector ("#criptografar");
		buttonEncryp.onclick = encriptar;
		var buttonDesencryp = document.querySelector ("#descriptografar");
		buttonDesencryp.onclick = desencriptar;
		var copiar = document.querySelector("#copiar");
		copiar.onclick = copy;
		
		function encriptar(){
			var textarea1 = document.getElementById('t1').value.toLowerCase();
			var txtCifrado = textarea1.replace(/e/igm,'enter');
			var txtCifrado = txtCifrado.replace(/o/igm,'ober');
			var txtCifrado = txtCifrado.replace(/i/igm,'imes');
			var txtCifrado = txtCifrado.replace(/a/igm,'ai');
			var txtCifrado = txtCifrado.replace(/u/igm,'ufat');

			document.getElementById('t2').innerHTML = txtCifrado;
			document.getElementById('copiar').style.display = "show";
			document.getElementById('copiar').style.display = "inherit";
		}

		function desencriptar(){
			var textarea1 = document.getElementById('t1').value.toLowerCase();
			var txtCifrado = textarea1.replace(/enter/igm,'e');
			var txtCifrado = txtCifrado.replace(/ober/igm,'o');
			var txtCifrado = txtCifrado.replace(/imes/igm,'i');
			var txtCifrado = txtCifrado.replace(/ai/igm,'a');
			var txtCifrado = txtCifrado.replace(/ufat/igm,'u');

			document.getElementById('t2').innerHTML = txtCifrado;
			document.getElementById('copiar').style.display = "show";
			document.getElementById('copiar').style.display = "inherit";
		}

		function copy(){
			var conteudo = document.querySelector('#t2');
			conteudo.select();
			document.execCommand("copy");
			alert("copiado para area de transferência");
		}