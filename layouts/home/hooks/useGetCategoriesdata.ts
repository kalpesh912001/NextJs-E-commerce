import { accessories, cosmetics, footwears, home, kids, men, sports, women } from "../components/categories/images"


export const useGetCategoriesdata = () => {
    const categoriesList = [
        {
            title: 'Men',
            logo: men
        },
        {
            title: 'Women',
            logo: women
        },
        {
            title: 'Kids',
            logo: kids
        },
        {
            title: 'Cosmetics',
            logo: cosmetics
        },
        {
            title: 'Accessories',
            logo: accessories
        },
        {
            title: 'Home',
            logo: home
        },
        {
            title: 'Footwears',
            logo: footwears
        },
        {
            title: 'Sports',
            logo: sports
        },
    ]
    return {
        categoriesList
    }
}

