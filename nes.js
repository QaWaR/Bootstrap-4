function pregled(isNext, id, nextId) {
    while (isNext) {
        id = nextId;
        return id;
    }
}

function pregled2(isNext, id, nextId) {
    if (isNext) {
        id = nextId;
        return pregled2(isNext, id, nextId)
    } else {
        return id;
    }
}