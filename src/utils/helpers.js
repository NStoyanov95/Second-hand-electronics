exports.isInBuyinglist = (buyingList, userId) =>{
    const isBuyer = buyingList.find(x => x._id == userId);
    return isBuyer;
};