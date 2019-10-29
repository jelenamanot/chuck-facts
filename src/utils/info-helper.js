export const getItemFromLocalStorage = storageKey => JSON.parse(localStorage.getItem(storageKey));

export const setItemToLocalStorage = (storageKey, item) => localStorage.setItem(storageKey, JSON.stringify(item));

export const setFactToLocalStorage = (fact) => {
    const currentFacts = getItemFromLocalStorage('viewedFacts');
    const updatedFacts =  currentFacts ? [fact, ...currentFacts] : [fact];
    setItemToLocalStorage('viewedFacts', updatedFacts);
};