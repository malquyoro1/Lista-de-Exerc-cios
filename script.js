var listaExercicios = document.getElementById("ulExercicios");
var listaCanais = document.getElementById("ulCanais");

var linksAdicionados = [];
var imgAdicionadas = [];

var exercicios = [
	 "Pular corda", 
  "Agachamento", 
  "Panturrilha em pé", 
  "Salto alternado", 
  "Flexão de braços", 
  "Burpee"
];

var linkExercicios = [
	"https://treinodecorrida.com.br/wp-content/uploads/2019/01/sid0171.gif",
  "https://treinodecorrida.com.br/wp-content/uploads/2018/12/Body-Weight-Squat.gif",
  "https://treinodecorrida.com.br/wp-content/uploads/2019/01/Panturrilha-no-Banco.gif",
  "https://treinodecorrida.com.br/wp-content/uploads/2019/01/Salto-afundo-alternando.gif",
  "https://treinodecorrida.com.br/wp-content/uploads/2019/01/Flex%C3%A3o-de-Bra%C3%A7o.gif",
  "https://treinodecorrida.com.br/wp-content/uploads/2019/01/Burpee.gif"
];


var imgExercicios = [
	  "https://img.freepik.com/fotos-gratis/homem-jovem-forte-esportes-pulando-com-pular-corda_171337-7983.jpg?size=338&ext=jpg", 
  "https://www.elhombre.com.br/wp-content/uploads/2014/02/a-agachamento.jpg",
  "https://i1.wp.com/hipertrofia.net/wp-content/uploads/2016/03/Panturrilha.jpg?fit=250%2C300&ssl=1", 
  "https://shopee.com.br/blog/wp-content/uploads/2020/09/afundo-alternado.jpg", 
"https://www.smartfit.com.br/news/wp-content/uploads/2014/10/flex%C3%A3o-de-bra%C3%A7o-parte-1-e-3.jpg",
"https://assets.almanaquesos.com/wp-content/uploads/2016/02/burpee-500x302.jpg"
];



var Canais = [
	"Exercícios em Casa", 
  "Musculos e Corpo Definido", 
  "Roberta's Gym Brasil" 
];

var linkCanais = [
"https://www.youtube.com/c/exercicioemcasa",
"https://www.youtube.com/channel/UC6QSBmXiK7vwW3DcQpop31g",
"https://www.youtube.com/channel/UC5KN7SPqLxNUvaKGwHRMYiw"
];

var imgCanais = [
	"https://yt3.ggpht.com/ytc/AKedOLSuj6JhPT0aH-K2sxaqHth5266uJ9VJ1r8L3XAq-Q=s176-c-k-c0x00ffffff-no-rj-mo", 
"https://yt3.ggpht.com/ytc/AKedOLR0rphMlRzhdmxnLtyCsKgjAc1Q3gamC_qibxQdtg=s88-c-k-c0x00ffffff-no-rj", 
"https://yt3.ggpht.com/ytc/AKedOLT61HHbRezRSldDBQyRMUA-yKpTXQRT2Ev1dZ3N=s88-c-k-c0x00ffffff-no-rj"
];



for (var i = 0; i < linkExercicios.length; i++) {
	listaExercicios.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkExercicios[i]}" target="_blank"><img src="${imgExercicios[i]}" ></a><label>${exercicios[i]}</label></li>`;
}

for (i = 0; i < linkCanais.length; i++) {
	listaCanais.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${linkCanais[i]}" target="_blank"><img src="${imgCanais[i]}"></a><label>${Canais[i]}</label></li>`;
}



function adicionar() {
	var nome = document.getElementById("nome");
	var url = document.getElementById("url");
	var imagem = document.getElementById("imagem");
	var categoria = document.getElementById("opcoesCategoria").value;

	if (nome.value != "" && url.value != "" && imagem.value != "") {
				if (
			linksAdicionados.indexOf(url.value) == -1 &&
			imgAdicionadas.indexOf(imagem.value) == -1
		) {
			var elemento = `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><button id="btnDeletar" onclick="deletar()"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiH98AdtCMgMEEQQAHZFLrwbu32iVZ5YEPTuBGHLuCQdjkxr_3MS7n81e8VMiZK2dSSgQ&usqp=CAU"></button><a href="${url.value}" target="_blank"><img src="${imagem.value}" onerror="removerImagem()"></a><label>${nome.value}</label></li>`;
			switch (categoria) {
				case "ulExercicios":
					listaExercicios.innerHTML += elemento;
					break;
				case "ulCanais":
					listaCanais.innerHTML += elemento;
				
			}
			linksAdicionados.push(url.value);
			imgAdicionadas.push(imagem.value);
		} else {
			alert("Esta url/imagem já existe");
		}
	} else {
		alert("Preencha todos os campos!");
	}
	nome.value = "";
	url.value = "";
	imagem.value = "";
}

function deletar() {
	
	var target = event.currentTarget;
	var li = target.parentElement;
	var ul = li.parentElement;
	var url = li.children[1].href;
	var img = li.children[1].firstChild.src;
	linksAdicionados.splice(linksAdicionados.indexOf(url), 1);
	imgAdicionadas.splice(imgAdicionadas.indexOf(img), 1);
	ul.removeChild(li);
}

function removerImagem() {
	
	var ul = event.currentTarget.parentElement.parentElement.parentElement;
	var li = event.currentTarget.parentElement.parentElement;
	ul.removeChild(li);

	linksAdicionados.splice(linksAdicionados.indexOf(url), 1);
	imgAdicionadas.splice(imgAdicionadas.indexOf(imagem), 1);
	alert("Coloque uma imagem válida!");
}

function mostrarTexto() {
	var target = event.currentTarget;
	target.lastChild.style.opacity = "1";
	if (target.firstChild.id == "btnDeletar") {
		target.firstChild.style.opacity = "1";
	}
}

function ocultarTexto() {
	var target = event.currentTarget;
	target.lastChild.style.opacity = "0";
	if (target.firstChild.id == "btnDeletar") {
		target.firstChild.style.opacity = "0";
	}
}