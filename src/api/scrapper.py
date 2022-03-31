from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

chrome_options = webdriver.ChromeOptions()
chrome_options.headless = True
driver =  webdriver.Chrome(options=chrome_options)

driver.get('https://www.selenium.dev/')

p = driver.find_element(By.ID,'td-cover-block-0').text

print(p)