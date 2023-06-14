class BinaryThree {
    constructor(){
        this.dados = [1,2,"-",3,"-"];
        this.raiz;
        this.esquerda;
        this.direita;
    }
    get altura(){
        let i, aux = 1;
        for(i = 1;i<this.dados.length;i = i + 2){
            aux++;
        }
        return aux;
    }
    nivel(value){//Olhar com cuidado depois
        for(let i=0; i<=this.dados.length;i++){
            if(value == this.dados[i]){
                return i;
            }
        }
    }
    get validarSeEstritamenteBinaria(){
        let i, aux = true;
        for(i = 1;i<=this.dados.length;i = i + 2){
            if(this.dados[i] == "-" && this.dados[i + 1] != "-"){
                aux = false;
            }else if(this.dados[i] != "-" && this.dados[i + 1] == "-"){
                aux = false;
            }
        }
        return aux;
    }
    get numerodefolhas(){
        let aux = 0;
        for(let i = 0; i <= this.dados.length; i++){
            if(this.dados[(this.dados.indexOf(this.dados[i]) * 2) + 1] == undefined && this.dados[(this.dados.indexOf(this.dados[i]) * 2) + 2] == undefined){
                aux++
            }
        }
        return aux;
    }
    get validarsearvorecompleta(){//não funciona ainda

    }
    adding(raiz, esquerda, direta){
        this.raiz = raiz;
        this.esquerda = esquerda;
        this.direita = direta;
        if(this.dados[0] === this.dados[this.dados.length-1]){
            this.dados.push(this.raiz);
            this.dados.push(this.esquerda);
            this.dados.push(this.direita);
        }else{
            for(let i = 0; i <= this.dados.length; i++){
                if(Number.isInteger(this.dados[(this.dados.indexOf(this.dados[i]) * 2) + 1]) == false){
                    this.dados[(this.dados.indexOf(this.dados[i]) * 2) + 1] = raiz;
                    if(Number.isInteger(this.dados[(this.dados.indexOf(this.dados[i]) * 2) + 3]) == false){
                        this.dados[(this.dados.indexOf(this.dados[i]) * 2) + 3] = esquerda;
                    }else{
                        this.dados[(this.dados.indexOf(this.dados[i]) * 2) + 4] = direta;
                    }
                    break;
                }else if(Number.isInteger(this.dados[(this.dados.indexOf(this.dados[i]) * 2) + 2]) == false){
                    this.dados[(this.dados.indexOf(this.dados[i]) * 2) + 2] = raiz;
                    if(Number.isInteger(this.dados[(this.dados.indexOf(this.dados[i]) * 2) + 3]) == false){
                        this.dados[(this.dados.indexOf(this.dados[i]) * 2) + 5] = esquerda;
                    }else{
                        this.dados[(this.dados.indexOf(this.dados[i]) * 2) + 6] = direta;
                    }
                    break;
                }
            }
        }
        console.log(this)
    }
    PreOrdem(){
        const preOrdem = [];
        const getValuesFromClass = (rais) => {
            console.log(this.dados[i])
        }
    }
    EmOrdem(){

    }
    PosOrdem(){

    }
}

const a = new BinaryThree();
a.adding(8,9,5);


/*
          1
    2           3
4       5    6      7
*/
//Pré-Ordem -- Primeiro a raiz 1,2,4,5,3,6,7
//Em-Ordem -- Primeiro sub esquerda depois a raiz 4,2,5,1,6,3 ,7
//Pós-Ordem -- Raiz por ultimo 4,5,2,6,7,3,1
//Busca em Produnfida é uma busca que vai ter retorno.
//Busca em largura é uma busca que testa os nós afjacentes ao mesmo.
//Busca Binaria ele vai filtrando a arvore de acordo com a busca.
//Não confundir altura de cada elemento com fator de balanceamento, são coisas diferentes. O fator de balanceamento deve ser calculado
//Arvore ALV é chamada uma arvore que está 100% balanceada.
