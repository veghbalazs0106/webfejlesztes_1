
/*árak megjelenítése*/

/*Itt adtam meg az egyes labdák árait*/
const labda1_ar = 29990;
const labda2_ar = 45990;

document.getElementById("szamol").addEventListener("click", fuggveny1);

function fuggveny1() {
    var osszeg1 = 0;
    var osszeg2 = 0;

    /*Itt adjuk meg a programnak, hogy melyik labdából mennyit rendel a felhasználó*/
    var x = document.getElementById("elso_labda").value;
    var y = document.getElementById("masodik_labda").value;

    /*Itt ellenőrizzük, hogy melyik labdából mennyit rendel a felhasználó
    és az alapján írjuk ki, hogy mennyibe fog kerülni*/
    if (x == 0) {
        osszeg1 = 0;
    }
    else {
        osszeg1 = labda1_ar * x;
    }

    if (y == 0) {
        osszeg2 = 0;
    }
    else {
        osszeg2 = labda2_ar * y;
    }

    if (osszeg1 == 0 && osszeg2 == 0) {
        alert("Nincs rendelés.");
    }
    else {
        var osszeg = Number(osszeg1) + Number(osszeg2);
        let osszeg_szoveg = osszeg.toString();
        if (osszeg_szoveg.length == 5) {
            let elso_resz = osszeg_szoveg.substring(0, 2);
            let masodik_resz = osszeg_szoveg.substring(2);
            alert(`A rendelések összege: ${elso_resz}.${masodik_resz} Ft.`)
        }
        else {
            let elso_fel = osszeg_szoveg.substring(0, 3);
            let masodik_fel = osszeg_szoveg.substring(3);
            alert(`A rendelések összege: ${elso_fel}.${masodik_fel} Ft.`);
        }
    }

}

/*Jogtalan felhasználás akadályozása*/

document.getElementById("jatek").addEventListener("submit", function (e) {

    /*Itt adjuk meg a programnak a két jelszó értékeit*/
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;

    /*Itt adjuk meg a programnak a felhasználó által megadott dátumot*/
    var datum = document.getElementById("datum").value;
    var megadott_datum = datum.toString();
    var ujdatum = megadott_datum.replace("-", "");
    var vegleges_datum = ujdatum.replace("-", "");


    /*Ennek a kódnak az alapját a freeCodeCamp weboldaláról szereztem, 
    https://www.freecodecamp.org/news/javascript-date-now-how-to-get-the-current-date-in-javascript/*/

    /*Itt adjuk meg a programnak a mai dátumot*/
    const mostaniido = Date.now();
    const mostanidatum = new Date(mostaniido);
    const maidatum = mostanidatum.toISOString();
    const maidatum_rovid = maidatum.substring(0, 10);
    const maidatum_minusz = maidatum_rovid.replace("-", "");
    const maidatum_vegleges = maidatum_minusz.replace("-", "");

    /*Itt ellenőrizzük a két jelszó azonosságát, ha nem azonosak, akkor nem
    engedjük tovább a felhasználót*/
    if (password1 != "" && password2 != "") {
        if (password1 != password2) {
            alert(`A két jelszónak meg kell egyeznie!`)
            e.preventDefault();
        }
    }
    /*Itt ellenőrizzük, hogy a felhasználó idősebb-e 18 évnél, ha nem,
    akkor nem engedjük tovább*/
    if (Number(maidatum_vegleges) - Number(vegleges_datum) < 180000) {
        alert("Csak 18 éven felüliek regisztrálhatnak!");
        e.preventDefault();
    }
})