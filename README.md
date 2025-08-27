# 🚀 Cloud Todo App

A modern, full-stack todo application designed for cloud deployment with Docker and Terraform infrastructure automation.

## 📋 Overview

This is a production-ready todo application that demonstrates modern web development practices, cloud infrastructure automation, and containerized deployment. The application features a responsive React frontend, a Node.js backend API, and infrastructure-as-code for easy cloud deployment.

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │ Infrastructure  │
│   (Next.js)     │◄──►│   (Node.js)     │    │   (Terraform)   │
│   Port: 3000    │    │   Port: 4000    │    │   + Docker      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### **Technology Stack**

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, RESTful API
- **Infrastructure**: Docker, Terraform, Cloud-ready
- **Database**: In-memory storage (easily extensible to PostgreSQL/MongoDB)

## ✨ Features

- 🎯 **Full CRUD Operations** - Create, Read, Update, Delete todos
- ✅ **Task Management** - Mark todos as complete/incomplete
- 📱 **Responsive Design** - Mobile-first, works on all devices
- 🔄 **Real-time Updates** - Instant feedback for all operations
- 📊 **Progress Tracking** - Visual progress indicators and statistics
- 🚀 **Type Safety** - Full TypeScript support
- 🎨 **Modern UI/UX** - Clean design with smooth animations
- 🌐 **Cloud Ready** - Designed for containerized deployment

## 🚀 Quick Start

### **Prerequisites**

- Node.js 18+
- npm or yarn
- Docker (optional, for containerized deployment)
- Terraform (optional, for infrastructure automation)

### **1. Clone the Repository**

```bash
git clone <your-repo-url>
cd cloud-todo-app
```

### **2. Start the Backend Server**

```bash
cd app
npm install
npm start
# Server runs on http://localhost:4000
```

### **3. Start the Frontend**

```bash
cd client
npm install
npm run dev
# Frontend runs on http://localhost:3000
```

### **4. Open Your Browser**

Navigate to [http://localhost:3000](http://localhost:3000) and start creating todos!

## 📁 Project Structure

```
cloud-todo-app/
├── 📁 app/                    # Backend API server
│   ├── server.js             # Express.js server
│   ├── package.json          # Backend dependencies
│   └── node_modules/         # Backend packages
├── 📁 client/                 # Frontend Next.js application
│   ├── src/app/              # Next.js app router
│   │   ├── components/       # React components
│   │   ├── lib/              # Utilities and API client
│   │   ├── todos/            # Todo page route
│   │   └── globals.css       # Global styles
│   ├── package.json          # Frontend dependencies
│   └── README.md             # Detailed frontend docs
├── 📁 docker/                 # Docker configuration
│   ├── Dockerfile            # Application container
│   └── docker-compose.yml    # Local development setup
├── 📁 terraform/              # Infrastructure as Code
│   ├── main.tf               # Main infrastructure
│   ├── variables.tf          # Configuration variables
│   └── outputs.tf            # Output values
└── README.md                  # This file
```

## 🔌 API Endpoints

The backend provides a RESTful API with the following endpoints:

| Method   | Endpoint     | Description     |
| -------- | ------------ | --------------- |
| `GET`    | `/`          | Welcome message |
| `GET`    | `/todos`     | Fetch all todos |
| `POST`   | `/todos`     | Create new todo |
| `PUT`    | `/todos/:id` | Update todo     |
| `DELETE` | `/todos/:id` | Delete todo     |

### **API Request/Response Examples**

**Create Todo:**

```bash
POST /todos
Content-Type: application/json

{
  "task": "Buy groceries"
}
```

**Response:**

```json
{
  "id": 1,
  "task": "Buy groceries",
  "completed": false
}
```

## 🐳 Docker Development

### **Local Development with Docker**

```bash
cd docker
docker-compose up -d
```

### **Build Application Container**

```bash
cd docker
docker build -t cloud-todo-app .
docker run -p 4000:4000 cloud-todo-app
```

## ☁️ Cloud Deployment

### **Terraform Infrastructure**

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

### **Supported Cloud Platforms**

- AWS
- Azure
- Google Cloud Platform
- Any cloud with Terraform provider support

## 🛠️ Development

### **Frontend Development**

```bash
cd client
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
```

### **Backend Development**

```bash
cd app
npm start            # Start server
# Edit server.js for API changes
```

### **Adding New Features**

1. **Frontend**: Add components in `client/src/app/components/`
2. **Backend**: Add routes in `app/server.js`
3. **Types**: Update `client/src/app/lib/types.ts`
4. **API**: Update `client/src/app/lib/api.ts`

## 🧪 Testing

### **Manual Testing**

1. Start both servers
2. Navigate to frontend
3. Test CRUD operations
4. Verify responsive design

### **API Testing**

```bash
# Test backend directly
curl http://localhost:4000/todos
curl -X POST http://localhost:4000/todos \
  -H "Content-Type: application/json" \
  -d '{"task":"Test todo"}'
```

## 🚀 Production Deployment

### **Build Frontend**

```bash
cd client
npm run build
npm start
```

### **Deploy Backend**

```bash
cd app
npm start
# Or use PM2 for production
pm2 start server.js
```

### **Infrastructure Deployment**

```bash
cd terraform
terraform apply
```

## 🔧 Configuration

### **Environment Variables**

- `PORT`: Backend server port (default: 4000)
- `NODE_ENV`: Environment mode (development/production)

### **Frontend Configuration**

- API URL: Configured in `client/src/app/lib/api.ts`
- Default: `http://localhost:4000`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📚 Documentation

- **Frontend**: See [client/README.md](client/README.md) for detailed frontend documentation
- **API**: Check `app/server.js` for endpoint definitions
- **Infrastructure**: Review `terraform/` and `docker/` directories

## 🐛 Troubleshooting

### **Common Issues**

**Frontend can't connect to backend:**

- Ensure backend is running on port 4000
- Check CORS configuration in `app/server.js`
- Verify API URL in frontend config

**Port conflicts:**

- Frontend: Change port in `client/package.json`
- Backend: Change PORT environment variable

**Build errors:**

- Clear `.next` directory: `rm -rf client/.next`
- Reinstall dependencies: `npm install`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with Next.js, React, and Node.js
- Styled with Tailwind CSS
- Infrastructure automation with Terraform
- Containerization with Docker

---

**Happy coding! 🎉**

For detailed frontend documentation, see [client/README.md](client/README.md).
