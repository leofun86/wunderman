/*
    ====         =========     =======          ========    ===   ===    ===    ===    =========    =========
    ====         =========    =========         ========    ===   ===    =====  ===    =========    =========
    ====         ===          ===   ===         ===         ===   ===    ==========    ===          ===
    ====         =========    ===   ===         ========    ===   ===    ===  =====    =========    =========
    ====         =========    ===   ===         ========    ===   ===    ===    ===    =========    =========
    ====         ===          ===   ===         ===         ===   ===    ===    ===    ===                ===
    ==========   =========    =========         ===         =========    ===    ===    =========    =========
    ==========   =========     =======     =    ===         =========    ===    ===    =========    =========

    Prueba Wunderman 2020
*/
const dptosLocs = {
	"Artigas":["Artigas","Bella Unión"],
	"Canelones":["Canelones","Santa Lucía"],
	"Montevideo":["Montevideo"],
	"Salto":["Salto","Daymán","Arapey"]
};

document.addEventListener('DOMContentLoaded', ()=>{
    cargaDeptosLocs();
});

function cargaDeptosLocs() {
    const selectDeptos = document.getElementById('departamentos');
    const selectLocs = document.getElementById('localidades');
    const fragment = document.createDocumentFragment();
    Object.keys(dptosLocs).forEach(depto=>{
        const option = document.createElement('option');
        option.setAttribute('value', depto);
        option.textContent=depto;
        fragment.appendChild(option);
    });
    selectDeptos.appendChild(fragment);
    selectDeptos.addEventListener('input', (e)=>{
        selectLocs.innerHTML="<option value=''>Localidad</option>";
        const fragment = document.createDocumentFragment();
        dptosLocs[e.target.value].forEach(locs=>{
            const option = document.createElement('option');
            option.setAttribute('value', locs);
            option.textContent=locs;
            fragment.appendChild(option);
        });
        selectLocs.appendChild(fragment);
    });
}

