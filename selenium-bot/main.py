from selenium import webdriver
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.common.action_chains import ActionChains
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
from random import randint
import time

td = time.strftime("%Y-%m-%d")

def main():
	file = open('config.txt','r')
	data = file.readlines()
	file.close()

	mail = data[0].split(':')[-1].strip()
	passw = data[1].split(':')[-1].strip()
	search = data[2].split(':')[-1].strip()
	location = data[3].split(':')[-1].strip()
	tm = int(data[4].split(':')[-1].strip())

	def login(driver):
		driver.get('https://www.linkedin.com/checkpoint/lg/sign-in-another-account')
		condition = EC.visibility_of_element_located((By.CSS_SELECTOR, '#username'))
		first_option = WebDriverWait(driver, 15).until(condition)
		first_option.send_keys(mail)

		condition = EC.visibility_of_element_located((By.CSS_SELECTOR, '#password'))
		first_option = WebDriverWait(driver, 15).until(condition)
		first_option.send_keys(passw)

		condition = EC.visibility_of_element_located((By.CSS_SELECTOR, '.btn__primary--large'))
		first_option = WebDriverWait(driver, 15).until(condition)
		first_option.click()  

	options = webdriver.ChromeOptions()
	options.add_experimental_option('excludeSwitches', ['enable-logging'])
	caps = DesiredCapabilities().CHROME
	caps["pageLoadStrategy"] = "eager"
	driver = webdriver.Chrome(executable_path=ChromeDriverManager().install(),options=options,desired_capabilities=caps)
	driver.maximize_window()
	login(driver)
	actions = ActionChains(driver)

	while 'feed' not in driver.current_url:
		pass

	print('Login success!')
	driver.get('https://www.linkedin.com/jobs/')

	for i in range(0,100000,25):
		lst = []
		driver.get(f'https://www.linkedin.com/jobs/search/?f_AL=true&keywords={search}&location={location}&start={i}')
		l = []
		l_2 = []

		print('>>> Scraping Job listings')
		while len(l)<25:
			soup = BeautifulSoup(driver.page_source,'html.parser')
			k = soup.find_all('a',{'class':'disabled ember-view job-card-container__link'})
			for y in k:
				try:
					if 'jobs/view' in y.get('href'):
						if y.get('href') not in l:
							l.append(y.get('href'))
							actions.send_keys(Keys.TAB)
							actions.perform()
							lst.append('https://www.linkedin.com/'+y.get('href'))
				except Exception as e:
					pass

		print(f'>>> Total {len(lst)} jobs found on page {i}')

		for ln in lst:
			driver.get(ln)
			n=0
			try:
				elm = driver.find_element_by_xpath('/html/body/div[6]/div[3]/div/div[1]/div[1]/div/div[1]/div[1]/div[3]/div/ul/li/span[1]')
				if 'submitted' in elm.text:
					n=1
					break 
			except:
				pass

			if n==0:
				btn = ''
				while btn=='':
					try:
						soup = BeautifulSoup(driver.page_source,'html.parser')
						btn = soup.find('button',{'class':'jobs-apply-button artdeco-button artdeco-button--3 artdeco-button--primary ember-view'}).get('id')
						break
					except:
						try:
							lb = soup.find('a',{'aria-label':'Download your submitted resume'})
							lb.get('href')
							n=1
							print('>>> Have already applied for this job')
							break
						except:
							pass

			if n==0:
				while True:
					elm = WebDriverWait(driver, 15).until(EC.presence_of_element_located((By.CSS_SELECTOR, f'#{btn}')))
					driver.execute_script("arguments[0].click();", elm)

					btn = ''
					while btn=='':
						try:
							soup = BeautifulSoup(driver.page_source,'html.parser')
							btn = soup.find('div',{'class':'display-flex justify-flex-end ph5 pv4'}).find('button').get('id')
							break
						except:
							pass

					elm = WebDriverWait(driver, 15).until(EC.presence_of_element_located((By.CSS_SELECTOR, f'#{btn}')))
					break

				if elm.get_attribute('aria-label')=='Submit application':
					driver.execute_script("arguments[0].click();", elm)
					print('>>> Job application submitted succesfully')
				
			n = randint(1,60)
			print(f'>>> Visiting next job in {tm}.{n} seconds')
			time.sleep(tm+n//100)

main()