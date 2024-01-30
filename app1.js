function calcMedia(media) {
    if (media >= 7) {
        console.log('Aluno Aprovado!')
    }
    else if (media >= 5 ) {
        console.log('Aluno de Recuperação!')
    }
    else{
        console.log('Aluno Reprovado!')
    }
}

calcMedia(4)