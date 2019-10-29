export const getItemFromLocalStorage = storageKey => JSON.parse(localStorage.getItem(storageKey));

export const setItemToLocalStorage = (storageKey, item) => localStorage.setItem(storageKey, JSON.stringify(item));

export const setFactToLocalStorage = (fact) => {
    const currentFacts = getItemFromLocalStorage('viewedFacts');
    let updatedFacts;
    // TODO switch to 10
    const maxLength = 3;

    if (currentFacts && currentFacts.length >= maxLength) {
        currentFacts.pop();
        updatedFacts = [fact, ...currentFacts];
    } else if (!currentFacts) {
        updatedFacts = [fact]
    } else {
        updatedFacts = [fact, ...currentFacts];
    }

    setItemToLocalStorage('viewedFacts', updatedFacts);
};