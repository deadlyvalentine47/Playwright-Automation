const { test, expect } = require('@playwright/test');
import { HomePage } from '../pages/homepage';
import { getTestData } from '../utils/dataProvider';


const testData = getTestData('testdata/swiggy/selectCuisineData.json');

testData.forEach((testCase) => {
    test(`${testCase.testName}`, async ({page}) => {
        const h = new HomePage(page);
        
        await h.navigateToHomePage()
        await h.selectCuisine(testCase.cuisine)
    })
})

// testData.forEach((testCase)=>{
//     test('', ({page}) => {

//     })
// })