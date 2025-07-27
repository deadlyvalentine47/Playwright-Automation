require('dotenv').config();

class HomePage {
    constructor(page) {
        this.page = page;
    }


    async navigateToHomePage() {
        await this.page.goto(process.env.SWIGGY_URL);
    }
    

    async selectCuisine(cuisineName) {
        const cuisineList = await this.page.$$('.sc-gEkIjz.fiQyNG img');
        console.log('Total cuisines:', cuisineList.length);
    
        for (const cuisine of cuisineList) {
            const src = await cuisine.getAttribute('src');
            if(src.includes(cuisineName)){
                await cuisine.click();
                await this.page.waitForTimeout(3000);
                break;
            }
        }
    }
}

module.exports = { HomePage }; 