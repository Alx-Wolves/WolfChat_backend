
## **1. User Management**

### **1.1 Register User**
- **Endpoint**: `POST /api/users/register`
- **Description**: Create a new user account.
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Responses**:
  - **201 Created**: User registered successfully.
  - **400 Bad Request**: Missing or invalid parameters.
  - **500 Internal Server Error**: Server error.

### **1.2 Login User**
- **Endpoint**: `POST /api/users/login`
- **Description**: Authenticate a user and return a JWT token.
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Responses**:
  - **200 OK**: Successfully authenticated, returns a JWT token.
  - **401 Unauthorized**: Invalid credentials.
  - **500 Internal Server Error**: Server error.

### **1.3 Update User Profile**
- **Endpoint**: `PUT /api/users/:id`
- **Description**: Update user details.
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Responses**:
  - **200 OK**: User updated successfully.
  - **400 Bad Request**: Missing or invalid parameters.
  - **404 Not Found**: User not found.
  - **500 Internal Server Error**: Server error.

### **1.4 Get User Details**
- **Endpoint**: `GET /api/users/:id`
- **Description**: Retrieve user details by ID.
- **Responses**:
  - **200 OK**: Returns user details.
  - **404 Not Found**: User not found.
  - **500 Internal Server Error**: Server error.

### **1.5 Delete User**
- **Endpoint**: `DELETE /api/users/:id`
- **Description**: Remove a user from the system.
- **Responses**:
  - **200 OK**: User deleted successfully.
  - **404 Not Found**: User not found.
  - **500 Internal Server Error**: Server error.

---

## **2. Messaging**

### **2.1 Send Message**
- **Endpoint**: `POST /api/messages`
- **Description**: Send a message to a user or a group.
- **Request Body**:
  ```json
  {
    "senderId": "string",
    "receiverId": "string",
    "content": "string"
  }
  ```
- **Responses**:
  - **201 Created**: Message sent successfully.
  - **400 Bad Request**: Missing or invalid parameters.
  - **500 Internal Server Error**: Server error.

### **2.2 Get Messages**
- **Endpoint**: `GET /api/messages/:conversationId`
- **Description**: Fetch messages from a conversation.
- **Responses**:
  - **200 OK**: Returns messages.
  - **404 Not Found**: Conversation not found.
  - **500 Internal Server Error**: Server error.

### **2.3 Delete Message**
- **Endpoint**: `DELETE /api/messages/:messageId`
- **Description**: Remove a message from a conversation.
- **Responses**:
  - **200 OK**: Message deleted successfully.
  - **404 Not Found**: Message not found.
  - **500 Internal Server Error**: Server error.

---

## **3. Groups & Channels**

### **3.1 Create Group**
- **Endpoint**: `POST /api/groups`
- **Description**: Create a new group.
- **Request Body**:
  ```json
  {
    "name": "string",
    "members": ["string"]
  }
  ```
- **Responses**:
  - **201 Created**: Group created successfully.
  - **400 Bad Request**: Missing or invalid parameters.
  - **500 Internal Server Error**: Server error.

### **3.2 Create Channel**
- **Endpoint**: `POST /api/channels`
- **Description**: Create a new channel.
- **Request Body**:
  ```json
  {
    "name": "string",
    "members": ["string"]
  }
  ```
- **Responses**:
  - **201 Created**: Channel created successfully.
  - **400 Bad Request**: Missing or invalid parameters.
  - **500 Internal Server Error**: Server error.

### **3.3 Add/Remove Member**
- **Endpoint**: `PUT /api/groups/:id/members` and `PUT /api/channels/:id/members`
- **Description**: Manage group/channel memberships.
- **Request Body**:
  ```json
  {
    "memberId": "string"
  }
  ```
- **Responses**:
  - **200 OK**: Member added or removed successfully.
  - **404 Not Found**: Group/Channel or member not found.
  - **500 Internal Server Error**: Server error.

### **3.4 Get Group/Channel Info**
- **Endpoint**: `GET /api/groups/:id` and `GET /api/channels/:id`
- **Description**: Retrieve details of a group or channel.
- **Responses**:
  - **200 OK**: Returns group/channel details.
  - **404 Not Found**: Group/Channel not found.
  - **500 Internal Server Error**: Server error.

### **3.5 List Groups/Channels**
- **Endpoint**: `GET /api/groups` and `GET /api/channels`
- **Description**: List all groups or channels a user belongs to.
- **Responses**:
  - **200 OK**: Returns list of groups/channels.
  - **500 Internal Server Error**: Server error.

---

## **4. User Status**

### **4.1 Update Status**
- **Endpoint**: `PUT /api/status`
- **Description**: Set the user’s status (online, offline, typing, playing).
- **Request Body**:
  ```json
  {
    "userId": "string",
    "status": "string"
  }
  ```
- **Responses**:
  - **200 OK**: Status updated successfully.
  - **400 Bad Request**: Missing or invalid parameters.
  - **500 Internal Server Error**: Server error.

### **4.2 Get Status**
- **Endpoint**: `GET /api/status/:userId`
- **Description**: Retrieve the status of a user.
- **Responses**:
  - **200 OK**: Returns user status.
  - **404 Not Found**: User not found.
  - **500 Internal Server Error**: Server error.

---

## **5. Notifications**

### **5.1 Send Notification**
- **Endpoint**: `POST /api/notifications`
- **Description**: Send notifications to users.
- **Request Body**:
  ```json
  {
    "userId": "string",
    "message": "string"
  }
  ```
- **Responses**:
  - **201 Created**: Notification sent successfully.
  - **400 Bad Request**: Missing or invalid parameters.
  - **500 Internal Server Error**: Server error.

### **5.2 Get Notifications**
- **Endpoint**: `GET /api/notifications`
- **Description**: Retrieve notifications for a user.
- **Responses**:
  - **200 OK**: Returns notifications.
  - **500 Internal Server Error**: Server error.
