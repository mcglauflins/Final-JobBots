from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

chrome_options = webdriver.ChromeOptions()
chrome_options.headless = True
driver =  webdriver.Chrome(options=chrome_options)

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
