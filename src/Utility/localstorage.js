const getReadBookId = () => {
    const storedBookId = localStorage.getItem('read-books');
    if (storedBookId) {
        return JSON.parse(storedBookId);
    }
    return [];
};

const saveReadBookId = id => {
    removeFromWishList(id);
    const storedBookId = getReadBookId();
    const exists = storedBookId.find(bookId => bookId === id);
    if (!exists) {
        storedBookId.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedBookId));
        return 0;
    }
    else {
        return 1;
    }

};

const removeFromWishList = id => {
    const wishListBooks = getWishBookId();
    const updatedWishListBooks = wishListBooks.filter(bookId => bookId !== id);
    localStorage.setItem('wish-books', JSON.stringify(updatedWishListBooks));

}
const getWishBookId = () => {
    const storedBookId = localStorage.getItem('wish-books');
    if (storedBookId) {
        return JSON.parse(storedBookId);
    }
    return [];
};

const saveWishBookId = id => {
    const readBooks = getReadBookId();
    const inReadBooks = readBooks.find(bookId => bookId === id);
    if (inReadBooks) {
        return 2;
    }
    else {
        const storedBookId = getWishBookId();
        const exists = storedBookId.find(bookId => bookId === id);
        if (!exists) {
            storedBookId.push(id);
            localStorage.setItem('wish-books', JSON.stringify(storedBookId));
            return 0;
        }
        else {
            return 1;
        }
    }

};

export { getReadBookId, saveReadBookId, getWishBookId, saveWishBookId }