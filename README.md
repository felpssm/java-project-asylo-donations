# Sistema de Controle de Doações - Asilo de Mendigos de Pelotas

Sistema web completo para gerenciamento de doações do Asilo de Mendigos de Pelotas, desenvolvido com arquitetura moderna utilizando Spring Boot (backend) e Angular (frontend).

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Funcionalidades](#-funcionalidades)
- [Como Executar](#-como-executar)
- [API Endpoints](#-api-endpoints)
- [Modelos de Dados](#-modelos-de-dados)
- [Configuração do Ambiente](#-configuração-do-ambiente)
- [Desenvolvimento](#-desenvolvimento)

## 🎯 Visão Geral

O sistema permite o controle completo e gerenciamento de doações recebidas pelo asilo, oferecendo uma interface web moderna e responsiva para:

- **Gestão de Doadores**: Cadastro de pessoas físicas e jurídicas
- **Controle de Doações**: Registro de doações monetárias e materiais
- **Dashboard Administrativo**: Visão geral com estatísticas e relatórios
- **Relatórios em PDF**: Exportação de dados para documentação
- **Interface Responsiva**: Acesso via desktop, tablet e mobile

## 🚀 Tecnologias Utilizadas

### Backend
- **Java 17** - Linguagem de programação
- **Spring Boot 3.3.1** - Framework principal
- **Spring Data JPA** - Persistência e mapeamento objeto-relacional
- **Spring Security** - Autenticação e autorização
- **Spring Validation** - Validação de dados de entrada
- **PostgreSQL 15** - Banco de dados relacional
- **H2 Database** - Banco em memória para testes
- **Flyway** - Controle de versão e migração do banco de dados
- **Maven** - Gerenciamento de dependências e build

### Frontend
- **Angular 17** - Framework SPA
- **TypeScript 5.2** - Linguagem de programação
- **Bootstrap 5.3** - Framework CSS para componentes
- **Tailwind CSS 3.4** - Framework CSS utilitário
- **Font Awesome 6.4** - Biblioteca de ícones
- **RxJS 7.8** - Programação reativa
- **jsPDF 3.0** - Geração de relatórios PDF
- **jsPDF AutoTable 5.0** - Tabelas em PDF

### Ferramentas de Desenvolvimento
- **Docker & Docker Compose** - Containerização
- **Angular CLI 17** - Ferramentas de desenvolvimento Angular
- **Karma & Jasmine** - Testes unitários
- **ESLint & Prettier** - Qualidade de código

## 📁 Estrutura do Projeto

```
asilo-doacoes/
├── 📁 src/main/java/br/org/asilo/doacoes/     # Backend Spring Boot
│   ├── 📄 DoacoesApplication.java             # Classe principal
│   ├── 📁 config/                             # Configurações
│   │   └── 📄 SecurityConfig.java             # Configuração de segurança
│   ├── 📁 controller/                         # Controllers REST
│   │   ├── 📄 DonationController.java         # Endpoints de doações
│   │   └── 📄 DonorController.java            # Endpoints de doadores
│   ├── 📁 domain/                             # Entidades JPA
│   │   ├── 📄 Donation.java                   # Entidade Doação
│   │   ├── 📄 Donor.java                      # Entidade Doador
│   │   └── 📁 enums/                          # Enumerações
│   ├── 📁 dto/                                # Data Transfer Objects
│   │   ├── 📄 DonationRequest.java            # DTO de requisição de doação
│   │   ├── 📄 DonationResponse.java           # DTO de resposta de doação
│   │   ├── 📄 DonorRequest.java               # DTO de requisição de doador
│   │   └── 📄 DonorResponse.java              # DTO de resposta de doador
│   ├── 📁 exception/                          # Tratamento de exceções
│   │   └── 📄 GlobalExceptionHandler.java     # Handler global de exceções
│   ├── 📁 mapper/                             # Mapeadores
│   │   └── 📄 Mappers.java                    # Conversão entre DTOs e entidades
│   ├── 📁 repository/                         # Repositórios JPA
│   │   ├── 📄 DonationRepository.java         # Repositório de doações
│   │   └── 📄 DonorRepository.java            # Repositório de doadores
│   └── 📁 service/                            # Regras de negócio
│       ├── 📄 DonationService.java            # Serviço de doações
│       └── 📄 DonorService.java               # Serviço de doadores
├── 📁 frontend/                               # Aplicação Angular
│   ├── 📁 src/app/                            # Código fonte Angular
│   │   ├── 📁 components/                     # Componentes reutilizáveis
│   │   │   ├── 📁 confirmation-modal/         # Modal de confirmação
│   │   │   ├── 📁 error-modal/                # Modal de erro
│   │   │   ├── 📁 footer/                     # Rodapé
│   │   │   ├── 📁 header/                     # Cabeçalho
│   │   │   ├── 📁 loading-spinner/            # Indicador de carregamento
│   │   │   └── 📁 success-modal/              # Modal de sucesso
│   │   ├── 📁 pages/                          # Páginas da aplicação
│   │   │   ├── 📁 about/                      # Página sobre
│   │   │   ├── 📁 admin-dashboard/            # Dashboard administrativo
│   │   │   ├── 📁 admin-login/                # Login administrativo
│   │   │   ├── 📁 contact/                    # Página de contato
│   │   │   ├── 📁 donations/                  # Listagem de doações
│   │   │   ├── 📁 donors/                     # Listagem de doadores
│   │   │   ├── 📁 home/                       # Página inicial
│   │   │   ├── 📁 new-donation/               # Cadastro de doação
│   │   │   ├── 📁 new-donor/                  # Cadastro de doador
│   │   │   └── 📁 services/                   # Página de serviços
│   │   ├── 📁 models/                         # Modelos TypeScript
│   │   │   ├── 📄 donation.model.ts           # Modelo de doação
│   │   │   └── 📄 donor.model.ts              # Modelo de doador
│   │   ├── 📁 services/                       # Serviços Angular
│   │   │   ├── 📄 auth.service.ts             # Serviço de autenticação
│   │   │   ├── 📄 donation.service.ts         # Serviço de doações
│   │   │   ├── 📄 donor.service.ts            # Serviço de doadores
│   │   │   ├── 📄 loading.service.ts          # Serviço de loading
│   │   │   ├── 📄 pdf.service.ts              # Serviço de PDF
│   │   │   └── 📄 performance.service.ts      # Serviço de performance
│   │   ├── 📁 guards/                         # Guards de rota
│   │   │   └── 📄 auth.guard.ts               # Guard de autenticação
│   │   └── 📁 interceptors/                   # Interceptors HTTP
│   │       ├── 📄 http-cache.interceptor.ts   # Cache HTTP
│   │       └── 📄 loading.interceptor.ts      # Loading automático
│   ├── 📄 package.json                        # Dependências do frontend
│   ├── 📄 angular.json                        # Configuração Angular
│   └── 📄 tailwind.config.js                  # Configuração Tailwind
├── 📄 pom.xml                                 # Configuração Maven
├── 📄 docker-compose.yml                      # Configuração Docker
└── 📄 README.md                               # Documentação
```

## ✨ Funcionalidades

### 🏠 Interface Pública
- **Página Inicial**: Apresentação do asilo e chamadas para doação
- **Sobre Nós**: História e missão do asilo
- **Serviços**: Serviços oferecidos pela instituição
- **Contato**: Informações de contato e localização
- **Formulários de Doação**: Cadastro público de doadores e doações

### 🔐 Área Administrativa
- **Dashboard**: Visão geral com estatísticas em tempo real
- **Gestão de Doadores**: CRUD completo com busca e filtros
- **Gestão de Doações**: CRUD completo com categorização
- **Relatórios PDF**: Exportação de dados para documentação
- **Autenticação**: Sistema de login seguro

### 📊 Recursos Técnicos
- **API RESTful**: Endpoints padronizados com documentação
- **Validação Completa**: Frontend e backend com validações robustas
- **Cache Inteligente**: Otimização de performance com cache HTTP
- **Responsividade**: Interface adaptável para todos os dispositivos
- **Segurança**: Autenticação JWT e proteção CSRF
- **Logs Estruturados**: Monitoramento e debugging facilitados

## 🚀 Como Executar

### Pré-requisitos
- **Java 17** ou superior
- **Node.js 18** ou superior
- **Maven 3.6** ou superior
- **Angular CLI 17** (`npm install -g @angular/cli`)
- **Docker** e **Docker Compose** (opcional, para PostgreSQL)

### 1. 🗄️ Configuração do Banco de Dados

**Opção A: Docker (Recomendado)**
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd asilo-doacoes

# Inicie o PostgreSQL
docker-compose up -d postgres
```

**Opção B: PostgreSQL Local**
- Instale PostgreSQL 15+
- Crie database: `doacoes`
- Configure usuário: `asilo` / senha: `asilo123`

### 2. ⚙️ Executando o Backend

```bash
# Compile e execute o backend
mvn clean install
mvn spring-boot:run
```

✅ **Backend disponível em**: `http://localhost:8080`

### 3. 🎨 Executando o Frontend

```bash
# Navegue para o diretório frontend
cd frontend

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm start
```

✅ **Frontend disponível em**: `http://localhost:4200`

### 4. 🔄 Execução Simultânea

**Terminal 1 (Backend):**
```bash
mvn spring-boot:run
```

**Terminal 2 (Frontend):**
```bash
cd frontend && npm start
```

## 🔌 API Endpoints

### Base URL
```
http://localhost:8080/api/v1
```

### 👥 Doadores (Donors)

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/donors` | Lista todos os doadores (paginado) |
| `POST` | `/donors` | Cria um novo doador |
| `GET` | `/donors/{id}` | Busca doador por ID |
| `PUT` | `/donors/{id}` | Atualiza doador |
| `DELETE` | `/donors/{id}` | Remove doador |

### 💰 Doações (Donations)

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/donations` | Lista todas as doações (paginado) |
| `POST` | `/donations` | Registra nova doação |
| `GET` | `/donations/{id}` | Busca doação por ID |
| `PUT` | `/donations/{id}` | Atualiza doação |
| `DELETE` | `/donations/{id}` | Remove doação |

### 📝 Exemplos de Requisição

**Criar Doador:**
```json
POST /api/v1/donors
{
  "type": "INDIVIDUAL",
  "name": "João Silva",
  "document": "12345678901",
  "email": "joao@email.com",
  "phone": "(51) 99999-9999"
}
```

**Criar Doação Monetária:**
```json
POST /api/v1/donations
{
  "donorId": 1,
  "type": "MONEY",
  "amount": 100.50,
  "donationDate": "2024-01-15"
}
```

**Criar Doação Material:**
```json
POST /api/v1/donations
{
  "donorId": 1,
  "type": "ITEM",
  "itemDescription": "Cestas básicas",
  "itemQuantity": 10,
  "unit": "unidades",
  "donationDate": "2024-01-15"
}
```

## 📊 Modelos de Dados

### Donor (Doador)
```typescript
interface Donor {
  id: number;
  type: 'INDIVIDUAL' | 'CORPORATE';
  name: string;
  document: string;
  email: string;
  phone: string;
}
```

### Donation (Doação)
```typescript
interface Donation {
  id: number;
  donorId: number;
  type: 'MONEY' | 'ITEM';
  amount?: number;
  itemDescription?: string;
  itemQuantity?: number;
  unit?: string;
  donationDate: string;
}
```

## ⚙️ Configuração do Ambiente

### Backend (application.yml)
```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/doacoes
    username: asilo
    password: asilo123
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
  flyway:
    enabled: true
```

### Frontend (environment.ts)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/v1'
};
```

### Docker Compose
```yaml
services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: doacoes
      POSTGRES_USER: asilo
      POSTGRES_PASSWORD: asilo123
    ports:
      - "5432:5432"
```

## 🛠️ Desenvolvimento

### Comandos Úteis

**Backend:**
```bash
# Executar testes
mvn test

# Executar com perfil de desenvolvimento
mvn spring-boot:run -Dspring-boot.run.profiles=dev

# Gerar build de produção
mvn clean package
```

**Frontend:**
```bash
# Executar testes unitários
ng test

# Executar linting
ng lint

# Build de produção
ng build --configuration production

# Análise de bundle
ng build --stats-json
npx webpack-bundle-analyzer dist/asilo-doacoes-frontend/stats.json
```

### Padrões de Desenvolvimento

**Backend:**
- Arquitetura em camadas (Controller → Service → Repository)
- DTOs para transferência de dados
- Validação com Bean Validation
- Tratamento global de exceções
- Logs estruturados

**Frontend:**
- Componentes modulares e reutilizáveis
- Serviços injetáveis para lógica de negócio
- Guards para proteção de rotas
- Interceptors para funcionalidades transversais
- Lazy loading para otimização

### Estrutura de Testes
- **Backend**: Testes unitários com JUnit 5 e Mockito
- **Frontend**: Testes unitários com Jasmine e Karma
- **Integração**: Testes de API com TestContainers

---

## 📄 Licença

Este projeto foi desenvolvido como parte do **Projeto Integrador VI-A** do curso de **Análise e Desenvolvimento de Sistemas**.

