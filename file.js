// CÓDIGOS DOS TEMPOS VERBAIS
// PI - PRÉSENT D'INDICATIF
// PAC - PASSÉ COMPOSÉ
// IM - IMPARFAIT
// PQP - PLUS-QUE-PARFAIT
// FS - FUTUR SIMPLE
// FA - FUTUR ANTÉRIEUR 
// SPR - SUBJONCTIF PRÉSENT
// SPA - SUBJONCTIF PASSÉ
// CPR - CONDITIONNEL PRÉSENT
// CPA - CONDITIONNEL PASSÉ
// IMP - IMPÉRATIF
// PRP - PRÉSENT PROGRESSIF
// PAR - PASSÉ RÉCENT
// FUP - FUTUR PROCHE
// GER - GÉRONDIF
// FVP - FORME PASSIVE

var array_suffixes = [];

function clearData() {
    let arr_Cod = ['PI', 'PAC', 'IM', 'PQP', 'FS', 'FA', 'SPR', 'SPA', 'CPR', 'CPA', 'IMP', 'PRP', 'PAR', 'FUP', 'GER', 'FVP'];
    
    for (let i=0; i < arr_Cod.length; i++) {
        let cod = arr_Cod[i];
        
        // LIMPAR TODOS OS INPUT'S
        document.getElementById('1psTeste' + cod).value = '';
        document.getElementById('2psTeste' + cod).value = '';
        document.getElementById('3psTeste' + cod).value = '';
        document.getElementById('1ppTeste' + cod).value = '';
        document.getElementById('2ppTeste' + cod).value = '';
        document.getElementById('3ppTeste' + cod).value = '';
        
        // LIMPAR RESULTADOS
        document.getElementById('1psRes' + cod).innerHTML = '';
        document.getElementById('1psRes' + cod).style.backgroundColor = 'white';
        document.getElementById('2psRes' + cod).innerHTML = '';
        document.getElementById('2psRes' + cod).style.backgroundColor = 'white';
        document.getElementById('3psRes' + cod).innerHTML = '';
        document.getElementById('3psRes' + cod).style.backgroundColor = 'white';
        document.getElementById('1ppRes' + cod).innerHTML = '';
        document.getElementById('1ppRes' + cod).style.backgroundColor = 'white';
        document.getElementById('2ppRes' + cod).innerHTML = '';
        document.getElementById('2ppRes' + cod).style.backgroundColor = 'white';
        document.getElementById('3ppRes' + cod).innerHTML = '';
        document.getElementById('3ppRes' + cod).style.backgroundColor = 'white';
    
    
        // BOTAO MOSTRAR - OCULTAR
        document.getElementById('1psConj' + cod).style.color = 'black';
        document.getElementById('2psConj' + cod).style.color = 'black';
        document.getElementById('3psConj' + cod).style.color = 'black';
        document.getElementById('1ppConj' + cod).style.color = 'black';
        document.getElementById('2ppConj' + cod).style.color = 'black';
        document.getElementById('3ppConj' + cod).style.color = 'black';
        
        document.getElementById('btn_' + cod).innerHTML = 'MASQUER';
        document.getElementById('btn_' + cod).style.backgroundColor = '#0066b8';
        document.getElementById('btn_' + cod).style.color = 'white';
    }    
    
}

function conjugate() {
    
    clearData()
    
    let verb = document.getElementById('verb');
    verb = (verb.value).toLowerCase();
        
    if(verb == "ouïr") {
        alert("Le verbe 'ouïr' a définitivement cédé la place à 'entendre'");
    } else if(verb != "faillir" & verb != "clore" & verb != "gésir") {
        conjugatePI(verb);
        conjugatePAC(verb);
        conjugateIM(verb);
        conjugatePQP(verb);
        conjugateFS(verb);
        conjugateFA(verb);
        conjugateSPR(verb);
        conjugateSPA(verb);
        conjugateCPR(verb);
        conjugateCPA(verb);
        conjugateIMP(verb);
        conjugatePRP(verb);
        conjugatePAR(verb);
        conjugateFUP(verb);
        conjugateGER(verb);
        conjugateFVP(verb);
    } else {
        location.reload();
    }
}

function conjugateGeneral(cod, rad, array) {
    
    document.getElementById('1psConj' + cod).innerHTML = rad + array[0];
    document.getElementById('2psConj' + cod).innerHTML = rad + array[1];
    document.getElementById('3psConj' + cod).innerHTML = rad + array[2];
    document.getElementById('1ppConj' + cod).innerHTML = rad + array[3];
    document.getElementById('2ppConj' + cod).innerHTML = rad + array[4];
    document.getElementById('3ppConj' + cod).innerHTML = rad + array[5];
}

function conjugateTenseComposed(cod, verb, arr_A, arr_E) {
    let verbs_aux_etre = ['devenir', 'rester', 'monter', 'retourner', 'sortir', 'venir', 'aller', 'maître', 'descendre', 'entrer', 'rentrer', 'tomber', 'revenir', 'arriver', 'mourrir', 'partir', 'passer'];
    
    // ACRESCENTAR ACIMA: se lever, s'habiller, s'inviter, s'embrasser, se demander, se parler, s'offrir
    
    let vPPA = participePasse(verb);
    
    if (verb == 'falloir') {
        document.getElementById('pron' + cod).innerHTML = 'Il';
        document.getElementById('1psConj' + cod).innerHTML = '-';
        document.getElementById('2psConj' + cod).innerHTML = '-';
        document.getElementById('3psConj' + cod).innerHTML = arr_A[2] + ' ' + vPPA;
        document.getElementById('1ppConj' + cod).innerHTML = '-';
        document.getElementById('2ppConj' + cod).innerHTML = '-';
        document.getElementById('3ppConj' + cod).innerHTML = '-';
        
    } else if (verb == 'pleuvoir') {
        document.getElementById('pron' + cod).innerHTML = 'Il';
        document.getElementById('1psConj' + cod).innerHTML = '-';
        document.getElementById('2psConj' + cod).innerHTML = '-';
        document.getElementById('3psConj' + cod).innerHTML = arr_A[2] + ' ' + vPPA;
        document.getElementById('1ppConj' + cod).innerHTML = '-';
        document.getElementById('2ppConj' + cod).innerHTML = '-';
        document.getElementById('3ppConj' + cod).innerHTML = '-';
        
    } else if (verbs_aux_etre.indexOf(verb) == -1 ) {
        
        document.getElementById('1psConj' + cod).innerHTML = arr_A[0] + ' ' + vPPA;
        document.getElementById('2psConj' + cod).innerHTML = arr_A[1] + ' ' + vPPA;
        document.getElementById('3psConj' + cod).innerHTML = arr_A[2] + ' ' + vPPA;
        document.getElementById('1ppConj' + cod).innerHTML = arr_A[3] + ' ' + vPPA;
        document.getElementById('2ppConj' + cod).innerHTML = arr_A[4] + ' ' + vPPA;
        document.getElementById('3ppConj' + cod).innerHTML = arr_A[5] + ' ' + vPPA;
        
    } else {
        document.getElementById('1psConj' + cod).innerHTML = arr_E[0] + ' ' + vPPA + '(e)';
        document.getElementById('2psConj' + cod).innerHTML = arr_E[1] + ' ' + vPPA + '(e)';
        document.getElementById('3psConj' + cod).innerHTML = arr_E[2] + ' ' + vPPA + '(e)(s)';
        document.getElementById('1ppConj' + cod).innerHTML = arr_E[3] + ' ' + vPPA + '(e)s';
        document.getElementById('2ppConj' + cod).innerHTML = arr_E[4] + ' ' + vPPA + '(e)s';;
        document.getElementById('3ppConj' + cod).innerHTML = arr_E[5] + ' ' + vPPA + '(e)s';;
    }
}


function conferir(cod) {
    
    // 1 Pessoa Singular
    let conj1ps = document.getElementById('1psConj' + cod);
    conj1ps = conj1ps.innerHTML.toLowerCase();  
        
    let teste1ps = document.getElementById('1psTeste' + cod);
    teste1ps = teste1ps.value.toLowerCase();
        
    if (conj1ps == teste1ps) {
        document.getElementById('1psRes' + cod).innerHTML = '✔';
        document.getElementById('1psRes' + cod).style.backgroundColor = 'limegreen';
    } else {
        document.getElementById('1psRes' + cod).innerHTML = 'X';
        document.getElementById('1psRes' + cod).style.backgroundColor = 'red';  
    }
    
    // 2 Pessoa Singular
    let conj2ps = document.getElementById('2psConj' + cod);
    conj2ps = conj2ps.innerHTML.toLowerCase();  
        
    let teste2ps = document.getElementById('2psTeste' + cod);
    teste2ps = teste2ps.value.toLowerCase();
        
    if (conj2ps == teste2ps) {
        document.getElementById('2psRes' + cod).innerHTML = '✔';
        document.getElementById('2psRes' + cod).style.backgroundColor = 'limegreen';
    } else {
        document.getElementById('2psRes' + cod).innerHTML = 'X';
        document.getElementById('2psRes' + cod).style.backgroundColor = 'red';
    }
    
    // 3 Pessoa Singular
    let conj3ps = document.getElementById('3psConj' + cod);
    conj3ps = conj3ps.innerHTML.toLowerCase();  
        
    let teste3ps = document.getElementById('3psTeste' + cod);
    teste3ps = teste3ps.value.toLowerCase();
        
    if (conj3ps == teste3ps) {
        document.getElementById('3psRes' + cod).innerHTML = '✔';
        document.getElementById('3psRes' + cod).style.backgroundColor = 'limegreen';
    } else {
        document.getElementById('3psRes' + cod).innerHTML = 'X';
        document.getElementById('3psRes' + cod).style.backgroundColor = 'red';  
    }
    
    // 1 Pessoa Plural
    let conj1pp = document.getElementById('1ppConj' + cod);
    conj1pp = conj1pp.innerHTML.toLowerCase();  
        
    let teste1pp = document.getElementById('1ppTeste' + cod);
    teste1pp = teste1pp.value.toLowerCase();
        
    if (conj1pp == teste1pp) {
        document.getElementById('1ppRes' + cod).innerHTML = '✔';
        document.getElementById('1ppRes' + cod).style.backgroundColor = 'limegreen';
    } else {
        document.getElementById('1ppRes' + cod).innerHTML = 'X';
        document.getElementById('1ppRes' + cod).style.backgroundColor = 'red'; 
    }
    
    // 2 Pessoa Plural
    let conj2pp = document.getElementById('2ppConj' + cod);
    conj2pp = conj2pp.innerHTML.toLowerCase();  
        
    let teste2pp = document.getElementById('2ppTeste' + cod);
    teste2pp = teste2pp.value.toLowerCase();
        
    if (conj2pp == teste2pp) {
        document.getElementById('2ppRes' + cod).innerHTML = '✔';
        document.getElementById('2ppRes' + cod).style.backgroundColor = 'limegreen';
    } else {
        document.getElementById('2ppRes' + cod).innerHTML = 'X';
        document.getElementById('2ppRes' + cod).style.backgroundColor = 'red';  
    }
    
    // 3 Pessoa Plural
    let conj3pp = document.getElementById('3ppConj' + cod);
    conj3pp = conj3pp.innerHTML.toLowerCase();  
        
    let teste3pp = document.getElementById('3ppTeste' + cod);
    teste3pp = teste3pp.value.toLowerCase();
        
    if (conj3pp == teste3pp) {
        document.getElementById('3ppRes' + cod).innerHTML = '✔';
        document.getElementById('3ppRes' + cod).style.backgroundColor = 'limegreen';
    } else {
        document.getElementById('3ppRes' + cod).innerHTML = 'X';
        document.getElementById('3ppRes' + cod).style.backgroundColor = 'red'; 
    }    
}


function ocultarResposta(cod) {
    
    var $button = document.getElementById('btn_' + cod);
    
    if($button.innerHTML == "MASQUER") {
        document.getElementById('1psConj' + cod).style.color = 'white';
        document.getElementById('2psConj' + cod).style.color = 'white';
        document.getElementById('3psConj' + cod).style.color = 'white';
        document.getElementById('1ppConj' + cod).style.color = 'white';
        document.getElementById('2ppConj' + cod).style.color = 'white';
        document.getElementById('3ppConj' + cod).style.color = 'white';

        $button.innerHTML = 'AFFICHER';        
        $button.style.backgroundColor = 'yellow';
        $button.style.color = 'black';
    } else {
        document.getElementById('1psConj' + cod).style.color = 'black';
        document.getElementById('2psConj' + cod).style.color = 'black';
        document.getElementById('3psConj' + cod).style.color = 'black';
        document.getElementById('1ppConj' + cod).style.color = 'black';
        document.getElementById('2ppConj' + cod).style.color = 'black';
        document.getElementById('3ppConj' + cod).style.color = 'black';
        
        $button.innerHTML = 'MASQUER';
        $button.style.backgroundColor = '#0066b8';
        $button.style.color = 'white';
        
    }
}

function buscarRadical (v) {
    var rad = '';
    switch (v) {
            case 'aller':
                rad = 'ir';
            break;
            case 'asseoir':
                rad = 'assiér';
            break;
            case 'avoir':
                rad = 'aur';
            break;
            case 'battre':
                rad = 'battr';
            break;
            case 'courir':
                rad = 'courr';
            break;
            case 'cueillir':
                rad = 'cueiller';
            break;
            case 'devoir':
                rad = 'devr';
            break;
            case 'envoyer':
                rad = 'enverr';
            break;
            case 'être':
                rad = 'ser';
            break;
            case 'faire':
                rad = 'fer';
            break;
            case 'mourir':
                rad = 'mourr';
            break;
            case 'pouvoir':
                rad = 'pourr';
            break;
            case 'recevoir':
                rad = 'recevr';
            break;
            case 'savoir':
                rad = 'saur';
            break;
            case 'tenir':
                rad = 'tiendr';
            break;
            case 'valoir':
                rad = 'vaudr';
            break;
            case 'venir':
                rad = 'viendr';
            break;
            case 'voir':
                rad = 'verr';
            break;
            case 'vouloir':
                rad = 'voudr';
            break;
            default: 
                rad = otherRadicals(v);
        }
    return rad;
}

function otherRadicals(v) {
    var rad = '';
    if(v.endsWith('re')) {
        for (i=0; i<(v.length - 1); i++) {
                rad = rad + v[i];
            }
    } else {
        rad = v;
    }
    return rad;
}

// PRÉSENT D'INDICATIF
function conjugatePI(verb) {
        
    switch (verb) {
            
        case 'aller':            
            array_suffixes = ['vais', 'vas', 'va', 'allons', 'allez', 'vont'];
            conjugateGeneral('PI', '', array_suffixes);        
        break;
            
        case 'avoir':
            array_suffixes = ['ai', 'as', 'a', 'avons', 'avez', 'ont'];
            conjugateGeneral('PI', '', array_suffixes);
        break;
            
        case 'être':
            array_suffixes = ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'];
            conjugateGeneral('PI', '', array_suffixes);
        break;
            
        case 'asseoir':
            array_suffixes = ['assieds', 'assieds', 'assied', 'asseyons', 'asseyez', 'asseyent'];
            conjugateGeneral('PI', '' , array_suffixes);
        break;
            
        case 'battre':
            array_suffixes = ['bats', 'bats', 'bat', 'battons', 'battez', 'battent'];
        break;
        
        case 'bouillir':
            array_suffixes = ['bous', 'bous', 'bout', 'bouillons', 'bouillez', 'bouillent'];
            conjugateGeneral('PI', '', array_suffixes);
        break;
            
        case 'courir':
            array_suffixes = ['cours', 'cours', 'court', 'courons', 'courez', 'courent'];
            conjugateGeneral('PI', '', array_suffixes);
        break;
            
        case 'fuir':
            array_suffixes = ['fuis', 'fuis', 'fuit', 'fuyons', 'fuyez', 'fuient'];
            conjugateGeneral('PI', '', array_suffixes);
        break;
            
        case 'mourir':
            array_suffixes = ['meurs', 'meurs', 'meurt', 'mourons', 'mourez', 'meurent'];
            conjugateGeneral('PI', '', array_suffixes);            
        break;
            
        case 'mouvoir':
            array_suffixes = ['meus', 'meus', 'meut', 'mouvons', 'mouvez', 'meuvent'];
            conjugateGeneral('PI', '', array_suffixes);
        break;
        
        case 'pouvoir':
            array_suffixes = ['peux', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent'];
            conjugateGeneral('PI', '', array_suffixes);
        break;
            
        case 'vouloir':
            array_suffixes = ['veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent'];
            conjugateGeneral('PI', '', array_suffixes);
        break;
            
        case 'devoir':
            array_suffixes = ['dois', 'dois', 'doit', 'devons', 'devez', 'doivent'];
            conjugateGeneral('PI', '', array_suffixes);      
        break;
            
        case 'falloir':
            array_suffixes = ['-', '-', 'faut', '-', '-', '-'];
            conjugateGeneral('PI', '', array_suffixes);
            document.getElementById('pronPI').innerHTML = 'Il';
        break;
            
        case 'paître':
            array_suffixes = ['pais', 'pais', 'pait', 'paissons', 'paissez', 'paissent'];
            conjugateGeneral('PI', '', array_suffixes);
        break;
            
        case 'pleuvoir':
            array_suffixes = ['-', '-', 'pleut', '-', '-', 'pleuvent'];
            conjugateGeneral('PI', '', array_suffixes);
            document.getElementById('pronPI').innerHTML = 'Il';  
        break;
            
        case 'naître':
            array_suffixes = ['nais', 'nais', 'naît', 'naissons', 'naissez', 'naissent'];
            conjugateGeneral('PI', '', array_suffixes);
        break;
                    
        case 'faire':
            array_suffixes = ['fais', 'fais', 'fait', 'faisons', 'faites', 'font'];
            conjugateGeneral('PI', '', array_suffixes);    
        break;
            
        case 'haïr':
            array_suffixes = ['hais', 'hais', 'hait', 'haïssons', 'haïssez', 'haïssent'];
            conjugateGeneral('PI', '', array_suffixes);         
        break;
            
        case 'dire':
            array_suffixes = ['dis', 'dis', 'dit', 'disons', 'disez', 'disent'];
            conjugateGeneral('PI', '', array_suffixes);      
        break;
            
        case 'mettre':
            array_suffixes = ['mets', 'mets', 'met', 'mettons', 'mettez', 'mettent'];
            conjugateGeneral('PI', '', array_suffixes);        
        break;
            
        case 'plaire':
            array_suffixes = ['plais', 'plais', 'plaît', 'plaisons', 'plaisez', 'plaisent'];
            conjugateGeneral('PI', '', array_suffixes);         
        break;
            
        case 'savoir':
            array_suffixes = ['sais', 'sais', 'sait', 'savons', 'savez', 'savent'];
            conjugateGeneral('PI', '', array_suffixes);         
        break;
            
        case 'surseoir':
            array_suffixes = ['sursois', 'sursois', 'sursoit', 'sursoyons', 'sursoyez', 'sursoient'];
            conjugateGeneral('PI', '', array_suffixes);         
        break;
            
        case 'connaître':
            array_suffixes = ['connais', 'connais', 'connait', 'connaissons', 'connaissez', 'connaissent'];
            conjugateGeneral('PI', '', array_suffixes);         
        break;
            
        case 'boire':
            array_suffixes = ['bois', 'bois', 'boit', 'buvons', 'buvez', 'boivent'];
            conjugateGeneral('PI', '', array_suffixes);         
        break;
            
        case 'jeter':
            array_suffixes = ['jette', 'jettes', 'jette', 'jetons', 'jetez', 'jettent'];
            conjugateGeneral('PI', '', array_suffixes);          
        break;
            
        case 'régler':
            array_suffixes = ['règle', 'règles', 'règle', 'réglons', 'réglez', 'règlent'];
            conjugateGeneral('PI', '', array_suffixes);       
        break;
            
        case 'traire':
            array_suffixes = ['trais', 'trais', 'trait', 'trayons', 'trayez', 'traient'];
            conjugateGeneral('PI', '', array_suffixes);          
        break;
            
        case 'valoir':
            array_suffixes = ['vaux', 'vaux', 'vaut', 'valons', 'valez', 'valent'];
            conjugateGeneral('PI', '', array_suffixes);         
        break;
            
        case 'vaincre':
            array_suffixes = ['vaincs', 'vaincs', 'vainc', 'vainquons', 'vainquez', 'vainquent'];
            conjugateGeneral('PI', '', array_suffixes);        
        break;
            
        default:
            regularVerbs ();
    }
    
    function regularVerbs () {
        if (verb.endsWith("ayer")) {
            
            alert("Les verbes en '-ayer' ont deux orthographes et deux prononciations possibles.")
            var rad = '';

            for (i=0; i<(verb.length - 3); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['ye(ie)', 'yes(ies)', 'ye(ie)', 'yons', 'yez', 'yent(ient)'];
            conjugateGeneral('PI', rad, array_suffixes);

        } else if (verb.endsWith("oyer") || verb.endsWith("uyer")) {
            var rad = '';

            for (i=0; i<(verb.length - 3); i++) {
                rad = rad + verb[i];
            }

            array_suffixes = ['ie', 'ies', 'ie', 'yons', 'yez', 'ient'];
            conjugateGeneral('PI', rad, array_suffixes);

        } else if (verb.endsWith("ettre")) {
            var rad = '';

            for (i=0; i<(verb.length - 4); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['ts', 'ts', 't', 'ttons', 'ttez', 'ttent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("ger")) {
            var rad = '';

            for (i=0; i<(verb.length - 2); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['e', 'es', 'e', 'eons', 'ez', 'ent'];
            conjugateGeneral('PI',rad, array_suffixes);
            
        } else if (verb.endsWith("cer")) {
            var rad = '';

            for (i=0; i<(verb.length - 3); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['ce', 'ces', 'ce', 'çons', 'cez', 'cent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("eler")) {
            var rad = '';

            for (i=0; i<(verb.length - 2); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['le', 'les', 'le', 'ons', 'ez', 'lent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("eter")) {
            var rad = '';

            for (i=0; i<(verb.length - 4); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['ète', 'ètes', 'ète', 'etons', 'etez', 'ètent'];
            conjugateGeneral('PI',rad, array_suffixes);            

        } else if (verb.endsWith("ever")) {
            var rad = '';

            for (i=0; i<(verb.length - 4); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['ève', 'èves', 'ève', 'evons', 'evez', 'èvent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("ener")) {
            var rad = '';

            for (i=0; i<(verb.length - 4); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['ène', 'ènes', 'ène', 'enons', 'enez', 'ènent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("érer")) {
            var rad = '';

            for (i=0; i<(verb.length - 4); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['ère', 'ères', 'ère', 'érons', 'érez', 'èrent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("éter")) {
            var rad = '';

            for (i=0; i<(verb.length - 4); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['ète', 'ètes', 'ète', 'étons', 'étez', 'ètent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("er") || verb.endsWith("vrir") || verb.endsWith("frir") || verb.endsWith("illir")) {
            var rad = '';

            for (i=0; i<(verb.length - 2); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['e', 'es', 'e', 'ons', 'ez', 'ent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("venir") || verb.endsWith("tenir")) {
            var rad = '';

            for (i=0; i<(verb.length - 5); i++) {
                rad = rad + verb[i];
            }
            
            if (verb.endsWith("venir")) {
                rad = rad + 'v';
            } else {
                rad = rad + 't';
            }
            
            array_suffixes = ['iens', 'iens', 'ient', 'enons', 'enez', 'iennent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("rtir") || verb.endsWith("ntir")) {
            var rad = '';

            for (i=0; i<(verb.length - 3); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['s', 's', 't', 'tons', 'tez', 'tent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("rmir")) {
            var rad = '';

            for (i=0; i<(verb.length - 3); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['s', 's', 't', 'mons', 'mez', 'ment'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("rvir") & verb != "asservir") {
            var rad = '';

            for (i=0; i<(verb.length - 3); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['s', 's', 't', 'vons', 'vez', 'vent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("cevoir")) {
            var rad = '';

            for (i=0; i<(verb.length - 6); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['çois', 'çois', 'çoit', 'cevons', 'cevez', 'çoivent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("voir")) {
            var rad = '';

            for (i=0; i<(verb.length - 2); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['is', 'is', 'it', 'yons', 'yez', 'ient'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("oire")) {
            var rad = '';

            for (i=0; i<(verb.length - 3); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['is', 'is', 'it', 'yons', 'yez', 'ient'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("ir")) {
            var rad = '';

            for (i=0; i<(verb.length - 1); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['s', 's', 't', 'ssons', 'ssez', 'ssent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("crire")) {
            var rad = '';

            for (i=0; i<(verb.length - 2); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['s', 's', 't', 'vons', 'vez', 'vent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("vre")) {
            var rad = '';

            for (i=0; i<(verb.length - 3); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['s', 's', 't', 'vons', 'vez', 'vent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("rire")) {
            var rad = '';

            for (i=0; i<(verb.length - 2); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['s', 's', 't', 'ons', 'ez', 'ent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("ire")) {
            var rad = '';

            for (i=0; i<(verb.length - 2); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['s', 's', 't', 'sons', 'sez', 'sent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("prendre")) {
            var rad = '';

            for (i=0; i<(verb.length - 3); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['ds', 'ds', 'd', 'ons', 'ez', 'nent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("indre")) {
            var rad = '';

            for (i=0; i<(verb.length - 4); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['ns', 'ns', 'nt', 'gnons', 'gnez', 'gnent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("soudre")) {
            var rad = '';

            for (i=0; i<(verb.length - 3); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['s', 's', 't', 'ons', 'ez', 'ent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("coudre")) {
            var rad = '';

            for (i=0; i<(verb.length - 3); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['ds', 'ds', 'd', 'sons', 'sez', 'sent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("moudre")) {
            var rad = '';

            for (i=0; i<(verb.length - 3); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['ds', 'ds', 'd', 'lons', 'lez', 'lent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("dre")) {
            var rad = '';

            for (i=0; i<(verb.length - 2); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['s', 's', '', 'ons', 'ez', 'ent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("oître")) {
            var rad = '';

            for (i=0; i<(verb.length - 4); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['îs', 'îs', 'ît', 'issons', 'issez', 'issent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else if (verb.endsWith("clure")) {
            var rad = '';

            for (i=0; i<(verb.length - 2); i++) {
                rad = rad + verb[i];
            }
            
            array_suffixes = ['s', 's', 't', 'ons', 'ez', 'ent'];
            conjugateGeneral('PI',rad, array_suffixes);

        } else {
            
            array_suffixes = ['-', '-', '-', '-', '-', '-'];
            conjugateGeneral('PI', '', array_suffixes);        
        }
    }  
}


// PARTICIPE PASSÉ

function participePasse(v) {
    switch (v) {
        case 'apercevoir':
            return 'aperçu';
        break;
        case 'apprendre':
            return 'apris';
        break;
        case 'assesoir':
            return 'assis';
        break;
        case 'attendre':
            return 'attendu';
        break;
        case 'avoir':
            return 'eu';
        break;
        case 'battre':
            return 'battu';
        break;        
        case 'boire':
            return 'bu';
        break;
        case 'comprendre':
            return 'compris';
        break;
        case 'conclure':
            return 'conclu';
        break;
        case 'conduire':
            return 'conduit';
        break;
        case 'confire':
            return 'confit';
        break;
        case 'connaître':
            return 'connu';
        break;
        case 'construire':
            return 'connu';
        break;
        case 'coudre':
            return 'cousu';
        break;
        case 'courir':
            return 'couru';
        break;        
        case 'croire':
            return 'cru';
        break;
        case 'cuire':
            return 'cuit';
        break;
        case 'décevoir':
            return 'déçu';
        break;
        case 'découdre':
            return 'décousu';
        break;
        case 'décrire':
            return 'décrit';
        break;
        case 'descendre':
            return 'descendu';
        break;
        case 'devoir':
            return 'dû';
        break;
        case 'dire':
            return 'dit';
        break;
        case 'disparître':
            return 'disparu';
        break;
        case 'dissoudre':
            return 'dissous';
        break;
        case 'écrire':
            return 'écrit';
        break;
        case 'élire':
            return 'élu';
        break;
        case 'émoudre':
            return 'émoulu';
        break;
        case 'entendre':
            return 'entendu';
        break;
        case 'éteindre':
            return 'éteint';
        break;
        case 'être':
            return 'été';
        break;
        case 'faire':
            return 'fait';
        break;
        case 'falloir':
            return 'fallu';
        break;   
        case 'haïr':
            return 'haï';
        break;
        case 'inconclure':
            return 'inclu';
        break;
        case 'lire':
            return 'lu';
        break;
        case 'mattre':
            return 'mis';
        break;
        case 'moudre':
            return 'moulu';
        break;
        case 'mourir':
            return 'mort';
        break;
        case 'naître':
            return 'né';
        break;
        case 'obtenir':
            return 'obtenu';
        break;
        case 'occlure':
            return 'occlu';
        break;
        case 'parître':
            return 'paru';
        break;
        case 'perdre':
            return 'perdu';
        break;        
        case 'plaire':
            return 'plu';
        break;
        case 'pleuvoir':
            return 'plu';
        break;
        case 'pouvoir':
            return 'pu';
        break;
        case 'prendre':
            return 'pris';
        break;
        case 'recevoir':
            return 'reçu';
        break;
        case 'recoudre':
            return 'recousu';
        break;
        case 'remoudre':
            return 'remoulu';
        break;
        case 'rendre':
            return 'rendu';
        break;
        case 'répondre':
            return 'répondu';
        break;
        case 'résoudre':
            return 'résolu';
        break;
        case 'rire':
            return 'ri';
        break;
        case 'savoir':
            return 'su';
        break;
        case 'suivre':
            return 'suivi';
        break;
        case 'surprendre':
            return 'surpris';
        break;
        case 'tenir':
            return 'tenu';
        break;
        case 'valoir':
            return 'valu';
        break;
        case 'vendre':
            return 'vendu';
        break;
        case 'venir':
            return 'venu';
        break;
        case 'vivre':
            return 'vécu';
        break;
        case 'voir':
            return 'vu';
        break;
        case 'vouloir':
            return 'voulu';
        break;
        default:
            return participePasseRegulars(v);
    }
    
    function participePasseRegulars(v) {

        if (v.endsWith("venir")) {
            var rad = '';

            for (i=0; i<(v.length - 2); i++) {
                rad = rad + v[i];
            }
            return rad + 'u';
        } else if (v.endsWith("frir") || v.endsWith("vrir")) {
            var rad = '';

            for (i=0; i<(v.length - 3); i++) {
                rad = rad + v[i];
            }
            return rad + 'ert';
        } else if (v.endsWith("ettre")) {
            var rad = '';

            for (i=0; i<(v.length - 5); i++) {
                rad = rad + v[i];
            }
            return rad + 'is';
        } else if (v.endsWith("indre")) {
            var rad = '';

            for (i=0; i<(v.length - 3); i++) {
                rad = rad + v[i];
            }
            return rad + 't';
        } else if (v.endsWith("ire")) {
            var rad = '';

            for (i=0; i<(v.length - 2); i++) {
                rad = rad + v[i];
            }
            return rad + 't';
        } else if (v.endsWith("re")) {
            var rad = '';

            for (i=0; i<(v.length - 2); i++) {
                rad = rad + v[i];
            }
            return rad + 'it';
        } else if (v.endsWith("ir")) {
            var rad = '';

            for (i=0; i<(v.length - 1); i++) {
                rad = rad + v[i];
            }
            return rad;
        } else if (v.endsWith("er")) {
            var rad = '';

            for (i=0; i<(v.length - 2); i++) {
                rad = rad + v[i];
            }
            return rad + 'é';
        }
    }
}


// PARTICIPE PRÉSENT

function participePresent(v) {
    
    if (v == 'avoir') {
        return 'ayant';
    } else if (v == 'être') {
        return 'étant';
    } else if (v == 'savoir') {
        return 'sachant';
    } else {
        let verb1ppPI = document.getElementById('1ppConjPI').innerHTML;
        verb1ppPI = verb1ppPI.slice(0,-3) + 'ant';
        return verb1ppPI;
    }

}

    
// PASSÉ COMPOSÉ    

function conjugatePAC(verb) {
    
    let arr_avoir = ['ai', 'as', 'a', 'avons', 'avez', 'ont'];
    let arr_etre = ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'];
    
    conjugateTenseComposed('PAC', verb, arr_avoir, arr_etre); 
    
}



// IMPARFAIT

function conjugateIM(verb) {
                
    let verb1ppPI = document.getElementById('1ppConjPI').innerHTML;
        
    if (verb == 'falloir') {
        document.getElementById('pronIM').innerHTML = 'Il';
        
        array_suffixes = ['-', '-', 'fallait', '', '', ''];
        conjugateGeneral('IM', '', array_suffixes);
        
    } else if (verb == 'pleuvoir') {
        document.getElementById('pronIM').innerHTML = 'Il';
        
        array_suffixes = ['-', '-', 'pleuvait', '', '', ''];
        conjugateGeneral('IM', '', array_suffixes);
        
    } else {
        let rad = '';
    
        for (i=0; i<(verb1ppPI.length - 3); i++) {
            rad = rad + verb1ppPI[i];
        }
        
        if (verb == 'être') {
            rad = 'ét';
        }
        
        array_suffixes = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'];
        conjugateGeneral('IM',rad, array_suffixes);
    }
    
}




// PLUS-QUE-PARFAIT    

function conjugatePQP(verb) {
    
    let arr_avoir = ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'];
    let arr_etre = ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'];
    
    conjugateTenseComposed('PQP', verb, arr_avoir, arr_etre); 
}




// FUTUR SIMPLE

function conjugateFS(verb) {    
            
    if (verb == 'falloir') {
        document.getElementById('pronFS').innerHTML = 'Il';
        
        array_suffixes = ['-', '-', 'faudra', '', '', ''];
        conjugateGeneral('FS', '', array_suffixes);
        
    } else if (verb == 'pleuvoir') {
        document.getElementById('pronFS').innerHTML = 'Il';
        
        array_suffixes = ['-', '-', 'pleuvra', '', '', ''];
        conjugateGeneral('FS', '', array_suffixes);
        
    } else {
        
        let rad = buscarRadical(verb);    
        
        array_suffixes = ['ai', 'as', 'a', 'ons', 'ez', 'ont'];
        conjugateGeneral('FS',rad, array_suffixes);
        
    }    
}




// FUTUR ANTÉRIEUR    

function conjugateFA(verb) {
    
    let arr_avoir = ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'];
    let arr_etre = ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'];
    
    conjugateTenseComposed('FA', verb, arr_avoir, arr_etre); 
    
}



// SUBJONCTIF PRÉSENT

function conjugateSPR(verb) {
            
    let verb1ppPI = document.getElementById('1ppConjPI').innerHTML;
    let verb2ppPI = document.getElementById('2ppConjPI').innerHTML;
    let verb3ppPI = document.getElementById('3ppConjPI').innerHTML;
            
    if (verb == 'falloir') {
        document.getElementById('pronSPR').innerHTML = 'Il';
        
        array_suffixes = ['-', '-', 'faille', '-', '-', '-'];
        conjugateGeneral('SPR', '', array_suffixes);
        
    } else if (verb == 'pleuvoir') {
        document.getElementById('pronSPR').innerHTML = 'Il';
        
        array_suffixes = ['-', '-', 'pleuve', '-', '-', '-'];
        conjugateGeneral('SPR', '', array_suffixes);
        
    } else if (verb == 'être') {
        
        array_suffixes = ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'];
        conjugateGeneral('SPR', '', array_suffixes);
        
    } else if (verb == 'avoir') {
        
        array_suffixes = ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'];
        conjugateGeneral('SPR', '', array_suffixes);
        
    } else if (verb == 'aller') {
        
        array_suffixes = ['aille', 'ailles', 'aille', 'allions', 'alliez', 'aillent'];
        conjugateGeneral('SPR', '', array_suffixes);
        
    } else if (verb == 'faire') {
        
        array_suffixes = ['fasse', 'fasses', 'fasse', 'fassions', 'fassiez', 'fassent'];
        conjugateGeneral('SPR', '', array_suffixes);
        
    } else if (verb == 'pouvoir') {
        
        array_suffixes = ['puisse', 'puisses', 'puisse', 'puissions', 'puissiez', 'puissent'];
        conjugateGeneral('SPR', '', array_suffixes);
              
    } else if (verb == 'vouloir') {
        
        array_suffixes = ['veuille', 'veuilles', 'veuille', 'voulions', 'vouliez', 'veuillent'];
        conjugateGeneral('SPR', '', array_suffixes);
              
    } else if (verb == 'savoir') {
        
        array_suffixes = ['sache', 'saches', 'sache', 'sachions', 'sachiez', 'sachent'];
        conjugateGeneral('SPR', '', array_suffixes);
        
    } else {
        let rad1pp = '';
        let rad3pp = '';
        
        
        for (i=0; i<(verb1ppPI.length - 3); i++) {
            rad1pp = rad1pp + verb1ppPI[i];
        }        

        for (i=0; i<(verb3ppPI.length - 3); i++) {
            rad3pp = rad3pp + verb3ppPI[i];
        }

        if (verb.endsWith('ger') || verb.endsWith('cer')) {
            rad1pp = rad3pp;
        } 
                
        document.getElementById('1psConjSPR').innerHTML = rad3pp + 'e';
        document.getElementById('2psConjSPR').innerHTML = rad3pp + 'es';
        document.getElementById('3psConjSPR').innerHTML = rad3pp + 'e';
        document.getElementById('1ppConjSPR').innerHTML = rad1pp + 'ions';
        document.getElementById('2ppConjSPR').innerHTML = rad1pp + 'iez';
        document.getElementById('3ppConjSPR').innerHTML = rad3pp + 'ent';
    }    
}



// SUBJONCTIF PASSÉ    

function conjugateSPA(verb) {
    
    let arr_avoir = ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'];
    let arr_etre = ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'];
    
    conjugateTenseComposed('SPA', verb, arr_avoir, arr_etre); 
    
}



// CONDITIONNEL PRÉSENT

function conjugateCPR(verb) {            
            
    if (verb == 'falloir') {
        document.getElementById('pronCPR').innerHTML = 'Il';
        
        array_suffixes = ['-', '-', 'faudrait', '-', '-', '-'];
        conjugateGeneral('CPR', '', array_suffixes);
        
    } else if (verb == 'pleuvoir') {
        document.getElementById('pronCPR').innerHTML = 'Il';
        
        array_suffixes = ['-', '-', 'pleuvrait', '-', '-', '-'];
        conjugateGeneral('CPR', '', array_suffixes);
        
    } else {
        
        let rad = buscarRadical (verb);   
        
        array_suffixes = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'];
        conjugateGeneral('CPR',rad, array_suffixes);
        
    }    
}




// CONDITIONNEL PASSÉ    

function conjugateCPA(verb) {
    
    let arr_avoir = ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient'];
    let arr_etre = ['serais', 'serais', 'serait', 'serions', 'seriez', 'seraient'];
    
    conjugateTenseComposed('CPA', verb, arr_avoir, arr_etre); 
    
}



// IMPÉRATIF

function conjugateIMP(verb) {
    
    if (verb == 'être') {
        
        array_suffixes = ['-', 'sois', '-', 'soyons', 'soyez', '-'];
        conjugateGeneral('IMP', '', array_suffixes);
        
    } else if (verb == 'avoir') {
        
        array_suffixes = ['-', 'aie', '-', 'ayons', 'ayez', '-'];
        conjugateGeneral('IMP', '', array_suffixes);
             
    } else if (verb == 'savoir') {
        
        array_suffixes = ['-', 'sache', '-', 'sachons', 'sachez', '-'];
        conjugateGeneral('IMP', '', array_suffixes);
            
    } else if (verb == 'vouloir') {
        
        array_suffixes = ['-', 'veuille', '-', 'veuillons', 'veuillez', '-'];
        conjugateGeneral('IMP', '', array_suffixes);
            
    } else {
        
        // Verbs terminados em -ER deve-se retirar o -S final, mas se seguidos por EN ou Y o mantém. Então deixei assim!
                
        document.getElementById('1psConjIMP').innerHTML = '-';
        document.getElementById('2psConjIMP').innerHTML = document.getElementById('2psConjPI').innerHTML;
        document.getElementById('3psConjIMP').innerHTML = '-';
        document.getElementById('1ppConjIMP').innerHTML = document.getElementById('1ppConjPI').innerHTML;
        document.getElementById('2ppConjIMP').innerHTML = document.getElementById('2ppConjPI').innerHTML;
        document.getElementById('3ppConjIMP').innerHTML = '-';  
    }
}




// PRÉSENT PROGRESSIF

function conjugatePRP(verb) {
            
    document.getElementById('1psConjPRP').innerHTML = 'suis en train de' + ' ' + verb;
    document.getElementById('2psConjPRP').innerHTML = 'es en train de' + ' ' + verb;
    document.getElementById('3psConjPRP').innerHTML = 'est en train de' + ' ' + verb;
    document.getElementById('1ppConjPRP').innerHTML = 'sommes en train de' + ' ' + verb;
    document.getElementById('2ppConjPRP').innerHTML = 'êtes en train de' + ' ' + verb;
    document.getElementById('3ppConjPRP').innerHTML = 'sont en train de' + ' ' + verb;    
        
}




// PASSÉ RÉCENT

function conjugatePAR(verb) {    
            
    document.getElementById('1psConjPAR').innerHTML = 'viens de' + ' ' + verb;
    document.getElementById('2psConjPAR').innerHTML = 'viens de' + ' ' + verb;
    document.getElementById('3psConjPAR').innerHTML = 'vient de' + ' ' + verb;
    document.getElementById('1ppConjPAR').innerHTML = 'venons de' + ' ' + verb;
    document.getElementById('2ppConjPAR').innerHTML = 'venez de' + ' ' + verb;
    document.getElementById('3ppConjPAR').innerHTML = 'viennent de' + ' ' + verb;  
    
}



// FUTUR PROCHE

function conjugateFUP(verb) {    
            
    document.getElementById('1psConjFUP').innerHTML = 'vais' + ' ' + verb;
    document.getElementById('2psConjFUP').innerHTML = 'vas' + ' ' + verb;
    document.getElementById('3psConjFUP').innerHTML = 'va' + ' ' + verb;
    document.getElementById('1ppConjFUP').innerHTML = 'allons' + ' ' + verb;
    document.getElementById('2ppConjFUP').innerHTML = 'allez' + ' ' + verb;
    document.getElementById('3ppConjFUP').innerHTML = 'vont' + ' ' + verb;  
    
}



// GÉRONDIF

function conjugateGER(verb) {
    
    let vPPR = participePresent(verb);
            
    document.getElementById('1psConjGER').innerHTML = 'en' + ' ' + vPPR;
    document.getElementById('2psConjGER').innerHTML = 'en' + ' ' + vPPR;
    document.getElementById('3psConjGER').innerHTML = 'en' + ' ' + vPPR;
    document.getElementById('1ppConjGER').innerHTML = 'en' + ' ' + vPPR;
    document.getElementById('2ppConjGER').innerHTML = 'en' + ' ' + vPPR;
    document.getElementById('3ppConjGER').innerHTML = 'en' + ' ' + vPPR;  
    
}



// FORME PASSIVE

function conjugateFVP(verb) {
    
    let vPPA = participePasse(verb);            
        
    var select = document.getElementById('select');

    var $button = document.getElementById('btn_tense_FVP');
    
    console.log($button);
    
    document.getElementById('1psConjFVP').innerHTML = 'suis' + ' ' + vPPA;
    document.getElementById('2psConjFVP').innerHTML = 'es' + ' ' + vPPA;
    document.getElementById('3psConjFVP').innerHTML = 'est' + ' ' + vPPA;
    document.getElementById('1ppConjFVP').innerHTML = 'sommes' + ' ' + vPPA;
    document.getElementById('2ppConjFVP').innerHTML = 'êtes' + ' ' + vPPA;
    document.getElementById('3ppConjFVP').innerHTML = 'sont' + ' ' + vPPA;    

    $button.addEventListener('click', function(event){
        
        let tense = select.value; 
        
        switch (tense) {
            case 'PI':
                document.getElementById('1psConjFVP').innerHTML = 'suis' + ' ' + vPPA + '(e)';
                document.getElementById('2psConjFVP').innerHTML = 'es' + ' ' + vPPA + '(e)';
                document.getElementById('3psConjFVP').innerHTML = 'est' + ' ' + vPPA + '(e)(s)';
                document.getElementById('1ppConjFVP').innerHTML = 'sommes' + ' ' + vPPA + '(e)s';
                document.getElementById('2ppConjFVP').innerHTML = 'êtes' + ' ' + vPPA + '(e)s';
                document.getElementById('3ppConjFVP').innerHTML = 'sont' + ' ' + vPPA + '(e)s';
            break;
            case 'PAC':
                document.getElementById('1psConjFVP').innerHTML = 'ai été' + ' ' + vPPA + '(e)';
                document.getElementById('2psConjFVP').innerHTML = 'as été' + ' ' + vPPA + '(e)';
                document.getElementById('3psConjFVP').innerHTML = 'a été' + ' ' + vPPA + '(e)(s)';
                document.getElementById('1ppConjFVP').innerHTML = 'avons été' + ' ' + vPPA + '(e)s';
                document.getElementById('2ppConjFVP').innerHTML = 'avez été' + ' ' + vPPA + '(e)s';
                document.getElementById('3ppConjFVP').innerHTML = 'ont été' + ' ' + vPPA + '(e)s';
            break;
            case 'IM':
                document.getElementById('1psConjFVP').innerHTML = 'étais' + ' ' + vPPA + '(e)';
                document.getElementById('2psConjFVP').innerHTML = 'étais' + ' ' + vPPA + '(e)';
                document.getElementById('3psConjFVP').innerHTML = 'était' + ' ' + vPPA + '(e)(s)';
                document.getElementById('1ppConjFVP').innerHTML = 'étions' + ' ' + vPPA + '(e)s';
                document.getElementById('2ppConjFVP').innerHTML = 'étiez' + ' ' + vPPA + '(e)s';
                document.getElementById('3ppConjFVP').innerHTML = 'étaient' + ' ' + vPPA + '(e)s';
            break;
            case 'FS':
                document.getElementById('1psConjFVP').innerHTML = 'serai' + ' ' + vPPA + '(e)';
                document.getElementById('2psConjFVP').innerHTML = 'seras' + ' ' + vPPA + '(e)';
                document.getElementById('3psConjFVP').innerHTML = 'sera' + ' ' + vPPA + '(e)(s)';
                document.getElementById('1ppConjFVP').innerHTML = 'serons' + ' ' + vPPA + '(e)s';
                document.getElementById('2ppConjFVP').innerHTML = 'serez' + ' ' + vPPA + '(e)s';
                document.getElementById('3ppConjFVP').innerHTML = 'seront' + ' ' + vPPA + '(e)s';
            break;
            case 'FUP':
                document.getElementById('1psConjFVP').innerHTML = 'vais être' + ' ' + vPPA + '(e)';
                document.getElementById('2psConjFVP').innerHTML = 'vas être' + ' ' + vPPA + '(e)';
                document.getElementById('3psConjFVP').innerHTML = 'va être' + ' ' + vPPA + '(e)(s)';
                document.getElementById('1ppConjFVP').innerHTML = 'allons être' + ' ' + vPPA + '(e)s';
                document.getElementById('2ppConjFVP').innerHTML = 'allez être' + ' ' + vPPA + '(e)s';
                document.getElementById('3ppConjFVP').innerHTML = 'vont être' + ' ' + vPPA + '(e)s';
            break;
            case 'PAR':
                document.getElementById('1psConjFVP').innerHTML = 'viens de être' + ' ' + vPPA + '(e)';
                document.getElementById('2psConjFVP').innerHTML = 'viens de être' + ' ' + vPPA + '(e)';
                document.getElementById('3psConjFVP').innerHTML = 'vient de être' + ' ' + vPPA + '(e)(s)';
                document.getElementById('1ppConjFVP').innerHTML = 'venons de être' + ' ' + vPPA + '(e)s';
                document.getElementById('2ppConjFVP').innerHTML = 'venez de être' + ' ' + vPPA + '(e)s';
                document.getElementById('3ppConjFVP').innerHTML = 'viennent de être' + ' ' + vPPA + '(e)s';
            break;
        }
        
    });
    
}


function selecionarverb() {
    
    var select = document.getElementById('selecionarverb');
        
    select = select.value;
    
    document.getElementById('traducao').innerHTML = select;
    
    document.getElementById('verb').innerHTML = select;
}
    
    
   