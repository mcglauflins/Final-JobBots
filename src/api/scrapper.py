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

driver.get('https://www.techwithtim.net/')

link = driver.find_element_by_link_text("python programming")
link.click()

try:
    element = WebDriverWait(driver,10).until(
        EC.presence_of_element_located((By.LINK_TEXT,"Begginer Python Tutorials"))
    )
    element.click()
    except:
        driver.quit()
