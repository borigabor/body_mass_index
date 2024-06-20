
document.getElementById("tobblet").value = "";
document.getElementById("index").value = "";

    function szamol() {
        let suly = parseFloat(document.getElementById("suly").value);
        let magassag = parseFloat(document.getElementById("magassag").value) / 100;
        magassag *= magassag;
        let bmi = parseFloat(suly / magassag).toFixed(2)
        let sulytobblet = parseInt(suly - 25 * magassag); 

        testTomegKiir(bmi);

        if (bmi > 25) {
            document.getElementById("tobblet").value = sulytobblet;
        } else {
            document.getElementById("tobblet").value = "";
        }
    
    };

    let bmi_suly = document.getElementById("bmi_suly");
    let bmi_magassag = document.getElementById("bmi_magassag");
    let bmi = document.getElementById("bmi");
    let suly_range = document.getElementById("suly_range");
    let magassag_range = document.getElementById("magassag_range");
    let testkep = document.getElementById("testkep");

    suly_range.innerHTML = bmi_suly.value;
    magassag_range.innerHTML = bmi_magassag.value;
    bmi.value = "";


    for (let range of document.querySelectorAll(".input-range")) {
            range.oninput = function() {



                suly_range.innerHTML = bmi_suly.value;
                magassag_range.innerHTML = bmi_magassag.value;
                
                let suly = bmi_suly.value;
                let magassag = bmi_magassag.value / 100;
                magassag *= magassag;

                let bmi_calc = parseFloat(suly / magassag).toFixed(2);

                if (bmi_calc !== "NaN" && bmi_calc < 200) {
                    bmi.value = bmi_calc;

                    if (bmi_calc < 18) {
                        bmi.style.backgroundColor="#FFFF00";
                        testkep.src = `image/body-skinny.jpg`;
                    } else if (bmi_calc > 25) {
                        bmi.style.backgroundColor="#FF0000";
                        testkep.src = `image/body-fat.jpg`;
                    } else {
                        bmi.style.backgroundColor = "#8F8";
                        testkep.src = `image/body.jpg`;
                    }
                }
                
            }
    }

    document.getElementById("gomb_suly").onclick = function() {
        bmi_suly.value++;
        suly_range.innerHTML = bmi_suly.value;
    }

    document.getElementById("gomb_magassag").onclick = function() {
        bmi_magassag.value++;
        magassag_range.innerHTML = bmi_magassag.value;
    }
    

 


    function testTomegKiir(bmi) {

        let testTomegIndex = document.getElementById("index");

        if (bmi !== "NaN" && bmi < 200) {
            testTomegIndex.value = bmi;

            

            if (bmi < 18) {
                testTomegIndex.style.backgroundColor="#FFFF00";
            } else if (bmi > 25) {
                testTomegIndex.style.backgroundColor="#FF0000";
            } else {
                testTomegIndex.style.backgroundColor = "#8F8";
            }
        }
    }




    

