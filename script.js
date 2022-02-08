function calcular(){
 var idadetxt = document.getElementById ('idadetxt') 
 var pesotxt = document.getElementById ('pesotxt')
 var alturatxt = document.getElementById ('alturatxt')  
 var idade = Number(idadetxt.value)
 var peso = Number(pesotxt.value)
 var altura = Number(alturatxt.value)
 var fsex = document.getElementsByName ('radsex')
 var inte = document.getElementsByName ('ativtxt')
 var genero = ''
 var res = document.getElementById ('res')
 var obj = document.getElementById ('obj')

if(idade <=0 || peso <=0 || altura <=0){  // idade, peso e altura da pessoa
    window.alert('[[ERRO!!!]] \n Idade, peso ou altura não e valido')
}else if(fsex[0].checked){  // sexo masculino
  genero = 'Masculino'
  
  var pesobm = 13.7*peso
  var alturabm = 5.0*altura
  var idadebm = 6.8*idade
  var basal = 66 + pesobm + alturabm - idadebm

    if(inte[0].checked){ // calculo exerc leve
    var calorias = basal*1.55

    }else if(inte[1].checked){ // calculo exerc moderado
    var calorias = basal*1.84

    }else if(inte[2].checked){  // calculo exerc pesado
     var calorias = basal*2.2
    }

}else if(fsex[1].checked){  //sexo femenino
    genero = 'Femenino'

    var pesobf = 9.6*peso
    var alturabf = 1.8*altura
    var idadebf = 4.7*idade
    var basal = 665+pesobf+alturabf-idadebf
    

    if(inte[0].checked){ // calculo exerc leve
    var calorias = basal*1.55

    }else if(inte[1].checked){ // calculo exerc moderado
    var calorias = basal*1.84
}

    else if(inte[2].checked){ // calculo de exerc pesado
    var calorias = basal*2.2
    }
}
var calorias = calorias.toString().replace(".",",")
res.innerHTML = (`Seu gasto diario em calorias é: <strong>${calorias} Calorias. </strong>`)
obj.innerHTML = (`Para emagrecer, você deve consumir menos de:<strong> ${calorias} Calorias diaria. </strong> <br> Para manter, você deve consumir:<br><strong> ${calorias} Calorias diaria.</strong><br> para ganhar massa você deve consumir mais de: <strong>${calorias} Calorias diaria.</strong>`)
}
