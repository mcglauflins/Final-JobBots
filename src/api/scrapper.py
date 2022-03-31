from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument('--headless')
options.add_argument('--disable-gpu')  # Last I checked this was necessary.
driver = webdriver.Chrome('chrome_driver\chromedriver.exe', chrome_options=options)

driver.get('https://www.selenium.dev/')

p = driver.find_element(By.ID,'td-cover-block-0').text

print(p)