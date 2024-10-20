# API de Gerenciamento de Oficinas

Esta API foi desenvolvida para gerenciar oficinas, veículos e manutenções. Com ela, é possível cadastrar, listar, atualizar e deletar oficinas, veículos e registrar manutenções, permitindo uma gestão eficiente dos serviços automotivos.

## Estrutura dos Dados

### Workshop (Oficina)
- `name` (String): Nome da oficina.
- `address` (String): Endereço completo da oficina.
- `specialties` (Array de Strings): Lista de especialidades da oficina, ex: motor, freios, suspensão.

### Vehicle (Veículo)
- `plate` (String): Placa do veículo.
- `model` (String): Modelo do veículo.
- `year` (Number): Ano de fabricação do veículo.
- `owner` (String): Nome do proprietário do veículo.
- `maintenances` (Array de ObjectId): Referência às manutenções realizadas no veículo.

### Maintenance (Manutenção)
- `workshop` (ObjectId): Referência à oficina onde a manutenção foi realizada.
- `vehicle` (ObjectId): Referência ao veículo submetido à manutenção.
- `services` (Array de Objects): Serviços prestados, cada um contendo:
  - `name` (String): Nome do serviço.
  - `price` (Number): Preço do serviço.
- `date` (Date): Data em que a manutenção foi realizada.
- `totalCost` (Number): Valor total da manutenção.

## Funcionalidades

### 1. Workshop (Oficina)
- **Criar Oficina (store):** Endpoint para criar uma nova oficina.
- **Listar Oficinas (index):** Endpoint para listar todas as oficinas cadastradas.
- **Atualizar Oficina (update):** Endpoint para atualizar os dados de uma oficina específica.
- **Deletar Oficina (destroy):** Endpoint para deletar uma oficina.

### 2. Vehicle (Veículo)
- **Criar Veículo (store):** Endpoint para cadastrar um novo veículo.
- **Listar Veículos (index):** Endpoint para listar todos os veículos cadastrados.
- **Atualizar Veículo (update):** Endpoint para atualizar os dados de um veículo específico.
- **Deletar Veículo (destroy):** Endpoint para deletar um veículo.

### 3. Maintenance (Manutenção)
- **Registrar Manutenção (store):** Endpoint para registrar uma nova manutenção, associando-a a uma oficina e um veículo.
- **Listar Manutenções (index):** Endpoint para listar todas as manutenções registradas.
- **Atualizar Manutenção (update):** Endpoint para atualizar os dados de uma manutenção específica.
- **Deletar Manutenção (destroy):** Endpoint para deletar uma manutenção.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/repositorio.git
Navegue até o diretório do projeto:

bash
Copiar código
cd Oficina
Instale as dependências:

bash
Copiar código
npm install
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

bash
Copiar código
DB_USER=seuUsuario
DB_PASSWORD=suaSenha
CLUSTER_ADDRESS=seuCluster.mongodb.net
DB_NAME=nomeDoBancoDeDados
Inicie o servidor:

bash
Copiar código
npm start
Endpoints
Workshop (Oficina)
POST /api/workshops: Cria uma nova oficina.
GET /api/workshops: Lista todas as oficinas.
PUT /api/workshops/:id: Atualiza uma oficina específica.
DELETE /api/workshops/:id: Deleta uma oficina específica.
Vehicle (Veículo)
POST /api/vehicles: Cadastra um novo veículo.
GET /api/vehicles: Lista todos os veículos.
PUT /api/vehicles/:id: Atualiza um veículo específico.
DELETE /api/vehicles/:id: Deleta um veículo específico.
Maintenance (Manutenção)
POST /api/maintenances: Registra uma nova manutenção.
GET /api/maintenances: Lista todas as manutenções.
PUT /api/maintenances/:id: Atualiza uma manutenção específica.
DELETE /api/maintenances/:id: Deleta uma manutenção específica.
Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript.
Express.js: Framework web para Node.js.
MongoDB: Banco de dados NoSQL para armazenamento dos dados.
Mongoose: Biblioteca para modelar dados MongoDB em Node.js.
