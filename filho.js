class filho extends pai{
    constructor(nome,idade,aniversario,ano){
        super(nome,idade,aniversario)
        this.ano = ano
    }

    filhonome(){
        console.log( "esse e meu nome "+this.nome)
    }

    filhoidade(){
        console.log("essa e minha idade "+this.idade);
    }

    filhoaniversario(){
        console.log("meus parabens atrasado "+this.aniversario);
    }


}