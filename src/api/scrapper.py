from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
import time

### Headless config start
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--window-size=1920,1080")
chrome_options.add_argument("--start-maximized")
#fix for crash start
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage') 
#fix for crash end
chrome_options.headless = True
driver = webdriver.Remote(
    command_executor="http://172.18.0.3:5555/wd/hub",
    options=chrome_options
)
### Headless config end

### To make the browser visible. 1. Uncomment the line below. 2. Comment out the headless config block above.
# driver = webdriver.Chrome('chrome_driver\chromedriver.exe')

driver.get('https://www.glassdoor.com/index.htm')

# print(driver.title)

time.sleep(1)
signin = driver.find_element(By.XPATH, "//*[@id='SiteNav']/nav/div[2]/div/div/div/button")
signin.click()

time.sleep(1.5)

user_email_inpt = driver.find_element(By.ID, 'modalUserEmail')
user_email_inpt.send_keys('testtestjobbot@gmail.com')

time.sleep(.5)
user_password_inpt = driver.find_element(By.ID, 'modalUserPassword')
user_password_inpt.send_keys('Test@1345#1')

time.sleep(1)
signin = driver.find_element(By.XPATH, "//*[@id='LoginModal']/div/div/div[2]/div[2]/div[2]/div/div/form/div[3]/button/span")
signin.click()

time.sleep(1.5)
print(driver.find_element(By.CSS_SELECTOR, 'h3.css-17vthrg.e11rhuha1').text)




######### Selenium Site Scrap Example 1

# p = driver.find_element(By.ID,'td-cover-block-0').text

# # find eng btn
# englishLang = driver.find_element(By.XPATH, "//a[contains(text(), 'English')]")
# print(englishLang.text)
# englishLang.click()

# #find jap btn
# japaneseLang = driver.find_element(By.XPATH, "//a[contains(text(), '日本語')]")
# time.sleep(2)

# print(japaneseLang.text)

# japaneseLang.click()
# time.sleep(1)

# #find jap btn again because html refreshed
# japaneseLang = driver.find_element(By.XPATH, "//a[contains(text(), '日本語')]")
# japaneseLang.click()


# #find eng btn again because html refreshed
# englishLang = driver.find_element(By.XPATH, "//a[contains(text(), 'English')]")
# time.sleep(1.5)
# englishLang.click()

# #find nav search

# navSearch = driver.find_element(By.CLASS_NAME, "td-search-input")
# time.sleep(1.2)
# navSearch.click()
# time.sleep(1)
# navSearch.send_keys("Install a Selenium library")
# time.sleep(0.5)
# navSearch.send_keys(Keys.ENTER)

# time.sleep(10)
# driver.quit()