import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar"
import LoginPage from "../pages/LoginPage"
import FeedbackPage from "../pages/FeedbackPage"

describe ("End-To-End Test",()=> {
    let homepage;
    let feedbackpage;
    let loginpage;
    let topbar;
    

beforeAll(async () => {
    jest.setTimeout(15000);
    homepage = new HomePage();
    feedbackpage = new FeedbackPage();
    loginpage = new LoginPage();
    topbar = new TopBar();

});

it("should load homepage", async () => {
    await homepage.visit();
    await homepage.isNavbarDisplayed();
})

it("should submit feedback", async () => {
    await homepage.clickFeedBackpageLink();
    await feedbackpage.isFeedbackFormDisplayed();
    await feedbackpage.submitFeedback(
        "Johnny",
        "JohnyTheSales@email.com",
        "Subject",
        "comment"
        );
});

it('should login to application', async () =>{
    await homepage.visit();
    await topbar.isTopBarDisplayed();
    await topbar.clickSignInButton();
    await loginpage.isLoginFormDisplayed();
    await loginpage.login("username","password");
})

});