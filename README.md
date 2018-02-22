# nodetodo

TODO app using MEAN STACK majority with NodeJS
* Inside the config folder, copy the file 'configValues-sample.json' and rename it as 'configValue.json' with the mongodb uri values
* run inside root folder using this command     
> `npm install`  
> `npm start`
* get inside the public folder and run this command     
> `npm install`   
> `npm run tsc:w`

## Run using Docker
> `docker build -t <your-username>/nodetodo`    
> `docker run -p 3000:3000 -d <your-username>/nodetodo`     

## Run using Docker with Docker Compose
> `docker-compose up`     
> `docker-compose down`     //this command will stop and remove containers, networks, images, and volumes
