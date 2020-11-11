Simple api and socket.io server built to serve https://github.com/jvanvoorst/josh-ai-store

app is running fully functional here: https://josh-server-vlu5i.ondigitalocean.app/

# Getting Started

clone repo
```
git clone https://github.com/jvanvoorst/josh-server.git
```
cd into directory
```
cd josh-server
```
install dependencies
```
npm install
```
start app
```
npm run start
```
app can now be seen at http://localhost:3000

# Docker

app is also available as a docker image
```
docker run --name produce-store -p 3000:3000 -d jvanvoorst/produce-store
```