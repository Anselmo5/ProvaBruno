class filho extends pai{
    constructor(nome,idade,aniversario,ano,familiar){
        super(nome,idade,aniversario)
        this.ano = ano
        this.familiar = familiar
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