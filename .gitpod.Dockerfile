FROM gitpod/workspace-postgres

RUN npm i heroku -g

USER gitpod

RUN sudo apt-get update && \
    sudo apt-get install -y \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgbm1 \
    libgcc1 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    lsb-release \
    libgbm1 \
    wget \
    xdg-utils && \
    sudo rm -rf /var/lib/apt/lists/* && \
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    sudo dpkg -i google-chrome*.deb && \
    wget https://chromedriver.storage.googleapis.com/100.0.4896.60/chromedriver_linux64.zip && \
    unzip chromedriver_linux64.zip && \
    sudo mv chromedriver /usr/bin/chromedriver && \
    sudo chown root:root /usr/bin/chromedriver && \
    sudo chmod +x /usr/bin/chromedriver

ENV CHROME_BIN=/usr/bin/chromium-browser
ENV BROWSER="Chrome_Without_Sandbox"