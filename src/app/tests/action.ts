'use server'

// get all quotes
export async function getQuotes() {
    try {
        const response = await fetch('https://dummyjson.com/quotes');
        const { quotes } = await response.json()
        return quotes
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message)
        }
    }
}

// get all recipes
export async function getRecipes() {
    try {
        const response = await fetch('https://dummyjson.com/recipes');
        const { recipes } = await response.json()
        return recipes
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message)
        }
    }
}

