if (window.SimpleSlide) {

	new SimpleSlide({
		slide: "quote", // nome do atributo data-slide="principal"
		time: 5000 // tempo de transição dos slides
	});

	new SimpleSlide({
		slide: "portfolio",
		time: 8000,
		nav: true
	});

}

if(window.SimpleAnime){
	new SimpleAnime();
}

if(window.SimpleForm){
	new SimpleForm({
		form: ".formphp",
		buttom: "#enviar",
		erro: "<div id='form-erro'><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>",
		sucesso: "<div id=form-sucesso><p><h2>Formulário enviado com sucesso</h2>Em breve entraremos em contato.</p></div>"
	})
}
