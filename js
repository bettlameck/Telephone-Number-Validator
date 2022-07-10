function telephoneCheck(str) {
    var regex1 = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;
    var regex2 = /^[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}$/;
    var regex3 = /^[(][0-9]{3}[)][\s][0-9]{3}[-][0-9]{4}$/;
    var regex4 = /^[0-9]{3}[\s][0-9]{3}[\s][0-9]{4}$/;
    var regex5 = /^[0-9]{10}$/;
    var regex6 = /^[1]{1}[\s][0-9]{3}[\s][0-9]{3}[\s][0-9]{4}$/;
    var regex7 = /^[1]{1}[\s][0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;
    var regex8 = /^[1]{1}[\s][(][0-9]{3}[)][\s][0-9]{3}[-][0-9]{4}$/;
    var regex9 = /^[1]{1}[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}$/;

    if (str.match(regex1)) {
        return true;
    } else if (str.match(regex2)) {
        return true;
    } else if (str.match(regex3)) {
        return true;
    } else if (str.match(regex4)) {
        return true;
    } else if (str.match(regex5)) {
        return true;
    } else if (str.match(regex6)) {
        return true;
    } else if (str.match(regex7)) {
        return true;
    } else if (str.match(regex8)) {
        return true;
    } else if (str.match(regex9)) {
        return true;
    } else {
        return false;
    }
}
