FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos necessários e instale as dependencias
COPY package*.json ./
RUN npm install

# Exponha a porta que a API está escutando
EXPOSE 3000

# Comando para iniciar o servidor em modo de desenvolvimento
CMD ["npm", "run", "dev"]
