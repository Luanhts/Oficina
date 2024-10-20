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
