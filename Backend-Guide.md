# Getting Started

Navigate into the seleniumGrid folder thru the terminal
```
cd seleniumGrid/
```

Run the following command:
```
docker-compose up --build
```
This should spin up the chrome remote driver.

<strong>NOTE: I might make it so this commands run automatically on image build.</strong>
# Scrapper.py explanation

We need the following dependencies:

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
import time
```

- Keys is used to send input text in a text field.
- By is used to find an element in the most recent version of selenium
- Options is used to configure the google driver <strong>[This is extremely important and will be explained why later]</strong>.
<br/>
<br/>
<br/>

```py
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
```

- `chrome_options` is initialize and allows us to configure the chrome driver.
- The first two arguments being added prevent an issue where selenium is not able to find an element. This can happen randomly and it happens when there is not a set size for the screen in headless  mode.
- The fix section solves an issue with docker; mainly gitpod where the headless browser would ran out of memory and crash. <a href="#fix"> [Better explained in its own section down below.] </a>
- `chrome_options.headless = True` allows us to webscrap with chrome without the needing the browser UI.
- Finally, we use the remote driver thru the selenium grid. In this case the remote url for the driver would be assigned `command_executor` attribbute.
<br/>
<br/>

```py
driver.get('https://www.glassdoor.com/index.htm')

#print(driver.title)

time.sleep(1)
signin = driver.find_element(By.XPATH, "//*[@id='SiteNav']/nav/div[2]/div/div/div/button")
signin.click()

time.sleep(1.5)

user_email_inpt = driver.find_element(By.ID, 'modalUserEmail')
user_email_inpt.send_keys('testtestjobbot@gmail.com')
```


- ` driver.get() ` is used to fetch and parse the html of any url we want.
- We use `driver.find_element(By.<something>, "<identifier>")` to find an element from the page the driver is "getting."
- Ultimately, we use `time.sleep(n)` to pause the execution of the code for n amount of seconds. Regardless wether that's necessary or not; I have no clue as of now.

For more info about selenium <a href = "https://selenium-python.readthedocs.io/locating-elements.html"> visit the documentation. </a> In this project, always use the `driver.find_element(By.<some attr>, 'something')` INSTEAD OF: 

```python
find_element_by_name
find_element_by_xpath
find_element_by_link_text
find_element_by_partial_link_text
find_element_by_tag_name
find_element_by_class_name
find_element_by_css_selector
```
<br/>
<h1 id=fix>Crash Fix Explanation - Docker/Gitpod</h1>
While using docker and gitpod the google driver will most likely crash 9.99/10 times. The reason why the crash happens seems to be the dev SHM being too small. SHM standing for shared memory. <a href="https://en.wikipedia.org/wiki/Shared_memory"> More info about it here. </a>
<br/>
<br/>
A work around for this is just setting is adding the --disable-dev-shm-usage option to the chrome arguments which <a href="https://stackoverflow.com/questions/53902507/unknown-error-session-deleted-because-of-page-crash-from-unknown-error-cannot#:~:text=This%20will%20force%20Chrome%20to%20use%20the%20/tmp%20directory%20instead.">will force chrome to use the tmp directory. </a>
<br/>
<br/>
This does NOT mitagete the issue at 100%, but it works the vast majority of the time.
