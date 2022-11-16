export const fetchCategories = 'fetchCategories'
export const fetchCategoriesAction  = categories => {

    return {
        type: fetchCategories,
        payload: categories 
    }
}
