document.querySelector("#nomeFilme").style.display = "none";
document.querySelector("#imgFilme").style.display = "none";
document.querySelector("#trailerFilme").style.display = "none";
document.querySelector("#btnAdicionar").style.display = "none";
var imagemOuTrailer;
var qtdImagens = 0,
  qtdTrailers = 0;

function setarOpcao() {
  var selectImagemOuTrailer = document.querySelector("#opcoes");
  imagemOuTrailer = selectImagemOuTrailer.value;
  if (imagemOuTrailer == "imagem") {
    document.querySelector("#imgFilme").style.display = "block";
    document.querySelector("#trailerFilme").style.display = "none";
  } else if (imagemOuTrailer == "trailer") {
    document.querySelector("#trailerFilme").style.display = "block";
    document.querySelector("#imgFilme").style.display = "none";
  }
  document.querySelector("#nomeFilme").style.display = "block";
  document.querySelector("#btnAdicionar").style.display = "block";
}
function adicionarFilmeFavorito() {
  var campoNomeFilme = document.querySelector("#nomeFilme");
  var nomeFilme = campoNomeFilme.value;
  if (nomeFilme != "") {
    if (imagemOuTrailer == "imagem") {
      var campoImagemFilme = document.querySelector("#imgFilme");
      var imagemFilme = campoImagemFilme.value;
      if (validarImagem(imagemFilme)) {
        listarFilmesNaTela(nomeFilme, imagemFilme);
        campoNomeFilme.value = "";
      } else {
        document.querySelector("#dicas").innerHTML = "URL de imagem inválida";
        setTimeout(function () {
          document.querySelector("#dicas").innerHTML = "";
        }, 3000);
      }
      campoImagemFilme.value = "";
    } else if (imagemOuTrailer == "trailer") {
      var campoTrailerFilme = document.querySelector("#trailerFilme");
      var trailerFilme = campoTrailerFilme.value;
      if (validarTrailer(trailerFilme)) {
        listarTrailersNaTela(nomeFilme, trailerFilme);
        campoNomeFilme.value = "";
      } else {
        document.querySelector("#dicas").innerHTML =
          "Embed de trailer inválido";
        setTimeout(function () {
          document.querySelector("#dicas").innerHTML = "";
        }, 2000);
      }
      campoTrailerFilme.value = "";
    }
  } else {
    document.querySelector("#dicas").innerHTML =
      "Parece que o nome está vazio!";
    setTimeout(function () {
      document.querySelector("#dicas").innerHTML = "";
    }, 2000);
  }
}

function validarImagem(imagemFilme) {
  if (imagemFilme.endsWith(".jpg")) {
    return true;
  } else if (imagemFilme.endsWith(".png")) {
    return true;
  } else if (imagemFilme.endsWith(".gif")) {
    return true;
  } else {
    return false;
  }
}

function validarTrailer(trailerFilme) {
  if (
    trailerFilme.endsWith("</iframe>") &&
    trailerFilme.startsWith("<iframe")
  ) {
    return true;
  } else {
    return false;
  }
}
function listarFilmesNaTela(nomeFilme, imgFilme) {
  qtdImagens++;
  document.querySelector("#qtdImagens").innerHTML = "(" + qtdImagens + ")";
  var listaFilmes = document.querySelector("#listaImagensFilmes");
  var elementoFilme =
    "<div class='filmeImg'><img src='" +
    imgFilme +
    "'><p>" +
    nomeFilme +
    "</p></div>";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
  document.querySelector("#dicas").innerHTML = "Filme adicionado";
  setTimeout(function () {
    document.querySelector("#dicas").innerHTML = "";
  }, 2000);
}

function listarTrailersNaTela(nomeFilme, trailerFilme) {
  qtdTrailers++;
  document.querySelector("#qtdTrailers").innerHTML = "(" + qtdTrailers + ")";
  var listaFilmes = document.querySelector("#listaTrailersFilmes");
  var elementoTrailer =
    "<div class='filmeTrailer'>" +
    trailerFilme +
    "<p>" +
    nomeFilme +
    "</p></div>";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoTrailer;
  document.querySelector("#dicas").innerHTML = "Filme adicionado";
  setTimeout(function () {
    document.querySelector("#dicas").innerHTML = "";
  }, 2000);
}