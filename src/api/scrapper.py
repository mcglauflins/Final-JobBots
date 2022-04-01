from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--window-size=1920x1080")
chrome_options.headless = True
driver =  webdriver.Chrome(options=chrome_options)

driver.get('https://star-wars-blog-by-umikami.netlify.app/')

p = driver.find_element(By.ID,'td-cover-block-0').text

# languageBTN = driver.find_element(By.XPATH, "//a[contains(text(), 'English')]").text


print(p)
print("hello")