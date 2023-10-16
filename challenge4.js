function checkSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "the season is Winter";
        case 3:
        case 4:
        case 5:
            return "the season is Spring";
        case 6:
        case 7:
        case 8:
            return "the season is Summer";
        case 9:
        case 10:
        case 11:
            return "the season is Autumn";
        default:
            return "the month you entered is invalid";
    }
}
